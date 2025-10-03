
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, AlertTriangle, Users, Route, Shield } from "lucide-react";

export default function StatsOverview({ incidents, assets, routes, activeThreats, criticalThreats, assetsAtRisk, isLoading }) {
  const stats = [
    {
      title: "Active Threats",
      value: activeThreats,
      icon: AlertTriangle,
      color: "from-red-500 to-rose-600",
      iconBg: "bg-[#DC2626]/20",
    },
    {
      title: "Critical Alerts",
      value: criticalThreats,
      icon: Shield,
      color: "from-orange-500 to-red-600",
      iconBg: "bg-orange-500/20",
    },
    {
      title: "Protected Assets",
      value: assets.length,
      icon: Users,
      color: "from-cyan-500 to-blue-600",
      iconBg: "bg-cyan-500/20",
    },
    {
      title: "Active Routes",
      value: routes.length,
      icon: Route,
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-purple-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="border-[#1a1a1a] bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-all duration-300"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-2">{stat.title}</p>
                {isLoading ? (
                  <div className="h-8 w-20 bg-[#1a1a1a] rounded animate-pulse" />
                ) : (
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                )}
              </div>
              <div className={`p-3 rounded-xl ${stat.iconBg}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
