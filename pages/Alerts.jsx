import React, { useState, useEffect } from "react";
import { Alert } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Info, AlertCircle, AlertOctagon } from "lucide-react";
import { format } from "date-fns";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAlerts();
  }, []);

  const loadAlerts = async () => {
    setIsLoading(true);
    const data = await Alert.list("-created_date");
    setAlerts(data);
    setIsLoading(false);
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "critical":
        return <AlertOctagon className="w-5 h-5" />;
      case "urgent":
        return <AlertTriangle className="w-5 h-5" />;
      case "warning":
        return <AlertCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "urgent":
        return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      case "warning":
        return "bg-amber-500/20 text-amber-400 border-amber-500/50";
      default:
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/50";
    }
  };

  const activeAlerts = alerts.filter(a => a.active);
  const inactiveAlerts = alerts.filter(a => !a.active);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Alert Management
          </h1>
          <p className="text-slate-400">System-wide notifications and warnings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-slate-800/50 bg-gradient-to-br from-red-500/10 to-slate-900/50 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Critical Alerts</p>
                  <p className="text-3xl font-bold text-white">
                    {alerts.filter(a => a.priority === "critical" && a.active).length}
                  </p>
                </div>
                <AlertOctagon className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800/50 bg-gradient-to-br from-amber-500/10 to-slate-900/50 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Active Warnings</p>
                  <p className="text-3xl font-bold text-white">
                    {alerts.filter(a => a.priority === "warning" && a.active).length}
                  </p>
                </div>
                <AlertCircle className="w-8 h-8 text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800/50 bg-gradient-to-br from-cyan-500/10 to-slate-900/50 backdrop-blur-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Total Active</p>
                  <p className="text-3xl font-bold text-white">{activeAlerts.length}</p>
                </div>
                <Info className="w-8 h-8 text-cyan-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts */}
        <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeAlerts.length === 0 ? (
              <p className="text-slate-400 text-center py-8">No active alerts</p>
            ) : (
              activeAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-xl border ${getPriorityColor(alert.priority)}`}
                >
                  <div className="flex items-start gap-4">
                    {getPriorityIcon(alert.priority)}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-bold text-white">{alert.title}</h3>
                        <Badge variant="outline" className="capitalize">
                          {alert.priority}
                        </Badge>
                      </div>
                      <p className="text-slate-300 mb-3">{alert.message}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span>Category: {alert.category}</span>
                        {alert.expires_at && (
                          <span>Expires: {format(new Date(alert.expires_at), "MMM d, yyyy HH:mm")}</span>
                        )}
                      </div>
                      {alert.affected_regions && alert.affected_regions.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {alert.affected_regions.map((region, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {region}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Inactive Alerts */}
        {inactiveAlerts.length > 0 && (
          <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-white">Archived Alerts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {inactiveAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="p-4 rounded-xl bg-slate-800/30 opacity-60"
                >
                  <div className="flex items-start gap-4">
                    {getPriorityIcon(alert.priority)}
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{alert.title}</h3>
                      <p className="text-slate-400 text-sm">{alert.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}