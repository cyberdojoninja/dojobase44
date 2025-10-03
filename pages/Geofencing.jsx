import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapContainer, TileLayer, Circle, Polygon, Marker, Popup } from "react-leaflet";
import { Shield, Plus, MapPin, AlertTriangle, Edit, Trash2 } from "lucide-react";
import "leaflet/dist/leaflet.css";

export default function Geofencing() {
  const [geofences, setGeofences] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newFence, setNewFence] = useState({
    name: "",
    type: "safe_zone",
    latitude: -26.2041,
    longitude: 28.0473,
    radius_km: 5,
    alert_on_entry: false,
    alert_on_exit: true
  });

  useEffect(() => {
    loadGeofences();
  }, []);

  const loadGeofences = () => {
    // Load from localStorage for demo
    const saved = localStorage.getItem('geofences');
    if (saved) {
      setGeofences(JSON.parse(saved));
    } else {
      // Sample data
      const sampleFences = [
        {
          id: "1",
          name: "Corporate HQ - Safe Zone",
          type: "safe_zone",
          latitude: -26.2041,
          longitude: 28.0473,
          radius_km: 2,
          alert_on_entry: false,
          alert_on_exit: true,
          active: true
        },
        {
          id: "2",
          name: "High Risk Area - Downtown",
          type: "restricted_zone",
          latitude: -26.1950,
          longitude: 28.0350,
          radius_km: 1.5,
          alert_on_entry: true,
          alert_on_exit: false,
          active: true
        }
      ];
      setGeofences(sampleFences);
      localStorage.setItem('geofences', JSON.stringify(sampleFences));
    }
  };

  const createGeofence = () => {
    const fence = {
      ...newFence,
      id: Date.now().toString(),
      active: true
    };
    const updated = [...geofences, fence];
    setGeofences(updated);
    localStorage.setItem('geofences', JSON.stringify(updated));
    setShowCreateForm(false);
    setNewFence({
      name: "",
      type: "safe_zone",
      latitude: -26.2041,
      longitude: 28.0473,
      radius_km: 5,
      alert_on_entry: false,
      alert_on_exit: true
    });
  };

  const deleteGeofence = (id) => {
    const updated = geofences.filter(f => f.id !== id);
    setGeofences(updated);
    localStorage.setItem('geofences', JSON.stringify(updated));
  };

  const toggleGeofence = (id) => {
    const updated = geofences.map(f => 
      f.id === id ? { ...f, active: !f.active } : f
    );
    setGeofences(updated);
    localStorage.setItem('geofences', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#DC2626]" />
              Geofencing & Safe Zones
            </h1>
            <p className="text-gray-400">Define virtual perimeters and get real-time alerts</p>
          </div>
          <Button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="bg-[#DC2626] hover:bg-[#B91C1C]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Geofence
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Geofences</p>
                  <p className="text-3xl font-bold text-white">{geofences.length}</p>
                </div>
                <MapPin className="w-8 h-8 text-[#DC2626]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Active Zones</p>
                  <p className="text-3xl font-bold text-white">
                    {geofences.filter(f => f.active).length}
                  </p>
                </div>
                <Shield className="w-8 h-8 text-emerald-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Restricted Zones</p>
                  <p className="text-3xl font-bold text-white">
                    {geofences.filter(f => f.type === "restricted_zone").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-amber-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {showCreateForm && (
          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardHeader>
              <CardTitle className="text-white">Create New Geofence</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Geofence Name"
                value={newFence.name}
                onChange={(e) => setNewFence({ ...newFence, name: e.target.value })}
                className="bg-[#1a1a1a] border-[#2a2a2a] text-white"
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="number"
                  step="any"
                  placeholder="Latitude"
                  value={newFence.latitude}
                  onChange={(e) => setNewFence({ ...newFence, latitude: parseFloat(e.target.value) })}
                  className="bg-[#1a1a1a] border-[#2a2a2a] text-white"
                />
                <Input
                  type="number"
                  step="any"
                  placeholder="Longitude"
                  value={newFence.longitude}
                  onChange={(e) => setNewFence({ ...newFence, longitude: parseFloat(e.target.value) })}
                  className="bg-[#1a1a1a] border-[#2a2a2a] text-white"
                />
              </div>

              <Input
                type="number"
                step="0.1"
                placeholder="Radius (km)"
                value={newFence.radius_km}
                onChange={(e) => setNewFence({ ...newFence, radius_km: parseFloat(e.target.value) })}
                className="bg-[#1a1a1a] border-[#2a2a2a] text-white"
              />

              <div className="flex gap-4">
                <Button onClick={createGeofence} className="bg-[#DC2626] hover:bg-[#B91C1C]">
                  Create Geofence
                </Button>
                <Button 
                  onClick={() => setShowCreateForm(false)}
                  variant="outline"
                  className="border-[#2a2a2a] text-white"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardContent className="p-0">
            <div className="h-[600px]">
              <MapContainer
                center={[-26.2041, 28.0473]}
                zoom={11}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {geofences.map((fence) => (
                  <React.Fragment key={fence.id}>
                    <Circle
                      center={[fence.latitude, fence.longitude]}
                      radius={fence.radius_km * 1000}
                      pathOptions={{
                        color: fence.type === "safe_zone" ? "#10B981" : "#DC2626",
                        fillColor: fence.type === "safe_zone" ? "#10B981" : "#DC2626",
                        fillOpacity: fence.active ? 0.2 : 0.05,
                        weight: fence.active ? 2 : 1
                      }}
                    />
                    <Marker position={[fence.latitude, fence.longitude]}>
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold mb-2">{fence.name}</h3>
                          <Badge className={fence.type === "safe_zone" ? "bg-emerald-500" : "bg-red-500"}>
                            {fence.type.replace('_', ' ')}
                          </Badge>
                          <p className="text-sm mt-2">Radius: {fence.radius_km}km</p>
                        </div>
                      </Popup>
                    </Marker>
                  </React.Fragment>
                ))}
              </MapContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardHeader>
            <CardTitle className="text-white">Configured Geofences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {geofences.map((fence) => (
              <div
                key={fence.id}
                className="flex items-center justify-between p-4 bg-[#1a1a1a] rounded-lg"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold">{fence.name}</h3>
                    <Badge className={fence.type === "safe_zone" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}>
                      {fence.type.replace('_', ' ')}
                    </Badge>
                    {fence.active && (
                      <Badge className="bg-cyan-500/20 text-cyan-400">Active</Badge>
                    )}
                  </div>
                  <div className="text-sm text-gray-400">
                    Radius: {fence.radius_km}km • 
                    {fence.alert_on_entry && " Alert on Entry"}
                    {fence.alert_on_exit && " Alert on Exit"}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleGeofence(fence.id)}
                    className="border-[#2a2a2a] text-white"
                  >
                    {fence.active ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteGeofence(fence.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}