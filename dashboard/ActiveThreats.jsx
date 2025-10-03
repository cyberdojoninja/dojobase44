
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ActiveThreats({ threats }) {
  if (threats.length === 0) return null;

  return (
    <Card className="border-[#DC2626]/30 bg-[#0f0f0f]">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-[#DC2626]/20 rounded-lg">
            <AlertTriangle className="w-6 h-6 text-[#DC2626] flex-shrink-0" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              Active Threat Alerts
              <Badge className="bg-[#DC2626] text-white border-0 text-xs">
                {threats.length}
              </Badge>
            </h3>
            <div className="space-y-3">
              {threats.slice(0, 3).map((threat) => (
                <div key={threat.id} className="p-3 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                  <div className="flex items-start justify-between mb-1">
                    <p className="text-white font-medium">{threat.title}</p>
                    <Badge className="bg-[#DC2626]/20 text-[#DC2626] border-[#DC2626]/30 text-xs">
                      {threat.severity}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{threat.location_name}</p>
                  {threat.recommendation && (
                    <p className="text-xs text-cyan-400">→ {threat.recommendation}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
