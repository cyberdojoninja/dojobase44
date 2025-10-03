import React, { useState, useEffect } from "react";
import { Incident, Asset, TravelRoute } from "@/api/entities";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Users, Route } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import StatsOverview from "../components/dashboard/StatsOverview";
import ActiveThreats from "../components/dashboard/ActiveThreats";
import ThreatMarkers from "../components/dashboard/ThreatMarkers";
import AssetMarkers from "../components/dashboard/AssetMarkers";

// Fix Leaflet default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Dashboard() {
  const [incidents, setIncidents] = useState([]);
  const [assets, setAssets] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState([20, 0]);
  const [showLayer, setShowLayer] = useState({ threats: true, assets: true, routes: true });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [incidentsData, assetsData, routesData] = await Promise.all([
        Incident.list("-created_date", 100),
        Asset.list("-last_check_in", 50),
        TravelRoute.filter({ status: "in_progress" }, "-departure_time", 20)
      ]);
      setIncidents(incidentsData);
      setAssets(assetsData);
      setRoutes(routesData);
      
      // Set default center to show global view
      if (assetsData.length > 0 && assetsData[0].latitude && assetsData[0].longitude) {
        setMapCenter([assetsData[0].latitude, assetsData[0].longitude]);
      } else if (incidentsData.length > 0) {
        setMapCenter([incidentsData[0].latitude, incidentsData[0].longitude]);
      }
    } catch (error) {
      console.error("Error loading dashboard data:", error);
    }
    setIsLoading(false);
  };

  const activeThreats = incidents.filter(i => i.status === "active");
  const criticalThreats = incidents.filter(i => i.severity === "critical");
  const assetsAtRisk = assets.filter(a => a.status === "at_risk" || a.status === "emergency");

  const toggleLayer = (layer) => {
    setShowLayer(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-[2000px] mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Global Threat Intelligence Center
            </h1>
            <p className="text-gray-400">Real-time protection intelligence and situational awareness worldwide</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Live Global Feed</span>
            </div>
          </div>
        </div>

        <StatsOverview 
          incidents={incidents}
          assets={assets}
          routes={routes}
          activeThreats={activeThreats.length}
          criticalThreats={criticalThreats.length}
          assetsAtRisk={assetsAtRisk.length}
          isLoading={isLoading}
        />

        {activeThreats.length > 0 && <ActiveThreats threats={activeThreats} />}

        {/* Map Controls */}
        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => toggleLayer('threats')}
                variant={showLayer.threats ? "default" : "outline"}
                size="sm"
                className={showLayer.threats ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C]' : 'border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'}
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Global Threats ({incidents.length})
              </Button>
              <Button
                onClick={() => toggleLayer('assets')}
                variant={showLayer.assets ? "default" : "outline"}
                size="sm"
                className={showLayer.assets ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C]' : 'border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'}
              >
                <Users className="w-4 h-4 mr-2" />
                Protected Assets ({assets.length})
              </Button>
              <Button
                onClick={() => toggleLayer('routes')}
                variant={showLayer.routes ? "default" : "outline"}
                size="sm"
                className={showLayer.routes ? 'bg-[#DC2626] text-white hover:bg-[#B91C1C]' : 'border-[#2a2a2a] text-gray-400 hover:text-white hover:bg-[#2a2a2a]'}
              >
                <Route className="w-4 h-4 mr-2" />
                Active Routes ({routes.length})
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Main Tactical Map */}
        <Card className="border-[#1a1a1a] bg-[#0f0f0f] shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <div className="h-[600px] relative">
              {!isLoading && (
                <MapContainer
                  center={mapCenter}
                  zoom={2}
                  style={{ height: "100%", width: "100%" }}
                  className="z-0"
                  scrollWheelZoom={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {showLayer.threats && <ThreatMarkers incidents={incidents} />}
                  {showLayer.assets && <AssetMarkers assets={assets} />}
                </MapContainer>
              )}
              
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-[#DC2626] animate-pulse mx-auto mb-4" />
                    <p className="text-gray-400">Loading global tactical intelligence...</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}