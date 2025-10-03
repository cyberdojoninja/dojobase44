import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Activity } from "lucide-react";
import { format } from "date-fns";

export default function IncidentDetailModal({ incident, onClose }) {
  if (!incident) return null;

  return (
    <Dialog open={!!incident} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-slate-900 border-slate-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">{incident.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {incident.image_url && (
            <img
              src={incident.image_url}
              alt={incident.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="capitalize">
              {incident.type.replace(/_/g, ' ')}
            </Badge>
            <Badge
              variant={incident.severity === "critical" ? "destructive" : "secondary"}
            >
              {incident.severity} severity
            </Badge>
            <Badge>{incident.status}</Badge>
          </div>

          {incident.description && (
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-slate-300">{incident.description}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="w-4 h-4" />
                Location
              </div>
              <p className="text-white">{incident.location_name || "Unknown"}</p>
              <p className="text-sm text-slate-400">
                {incident.latitude.toFixed(4)}, {incident.longitude.toFixed(4)}
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="w-4 h-4" />
                Reported Date
              </div>
              <p className="text-white">
                {format(new Date(incident.created_date), "MMMM d, yyyy")}
              </p>
              <p className="text-sm text-slate-400">
                {format(new Date(incident.created_date), "h:mm a")}
              </p>
            </div>

            {incident.affected_area_km2 && (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Activity className="w-4 h-4" />
                  Affected Area
                </div>
                <p className="text-white">{incident.affected_area_km2} km²</p>
              </div>
            )}

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Activity className="w-4 h-4" />
                Reported By
              </div>
              <p className="text-white">{incident.created_by || "System"}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}