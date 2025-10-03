import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Scale } from "lucide-react";

export default function ComparisonTools() {
  const [selectedPlans, setSelectedPlans] = useState(["professional", "enterprise"]);

  const plans = {
    essential: {
      name: "Essential",
      price: "$49/mo",
      tagline: "Perfect for small teams",
      color: "cyan"
    },
    professional: {
      name: "Professional",
      price: "$149/mo",
      tagline: "Most popular choice",
      color: "red"
    },
    enterprise: {
      name: "Enterprise",
      price: "Custom",
      tagline: "For large organizations",
      color: "purple"
    }
  };

  const features = [
    {
      category: "Core Features",
      items: [
        { name: "Users", essential: "Up to 5", professional: "Up to 50", enterprise: "Unlimited" },
        { name: "Protected Assets", essential: "Up to 25", professional: "Up to 200", enterprise: "Unlimited" },
        { name: "Real-time Threat Map", essential: true, professional: true, enterprise: true },
        { name: "Incident Management", essential: true, professional: true, enterprise: true },
        { name: "Email Alerts", essential: true, professional: true, enterprise: true },
        { name: "Mobile Access", essential: true, professional: true, enterprise: true }
      ]
    },
    {
      category: "Intelligence & Analytics",
      items: [
        { name: "Basic Reports", essential: true, professional: true, enterprise: true },
        { name: "Advanced Analytics", essential: false, professional: true, enterprise: true },
        { name: "AI Query System", essential: false, professional: true, enterprise: true },
        { name: "Predictive AI", essential: false, professional: false, enterprise: true },
        { name: "ML Analytics", essential: false, professional: false, enterprise: true },
        { name: "MITRE ATT&CK Framework", essential: false, professional: true, enterprise: true },
        { name: "Threat Intelligence Feeds", essential: "1 feed", professional: "5 feeds", enterprise: "Unlimited" }
      ]
    },
    {
      category: "Team Collaboration",
      items: [
        { name: "Team Management", essential: true, professional: true, enterprise: true },
        { name: "Secure Communications", essential: false, professional: true, enterprise: true },
        { name: "Live Collaboration", essential: false, professional: true, enterprise: true },
        { name: "Travel Route Planning", essential: false, professional: true, enterprise: true },
        { name: "Mission Planning", essential: false, professional: true, enterprise: true }
      ]
    },
    {
      category: "Operations",
      items: [
        { name: "Drone Fleet Management", essential: false, professional: false, enterprise: true },
        { name: "Drone Operations", essential: false, professional: false, enterprise: true },
        { name: "Camera Systems", essential: false, professional: true, enterprise: true },
        { name: "Geofencing", essential: false, professional: true, enterprise: true },
        { name: "Emergency Protocols", essential: false, professional: true, enterprise: true }
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        { name: "Two-Factor Authentication", essential: true, professional: true, enterprise: true },
        { name: "Zero Trust Architecture", essential: false, professional: true, enterprise: true },
        { name: "Audit Trail", essential: false, professional: true, enterprise: true },
        { name: "Compliance Reports", essential: false, professional: true, enterprise: true },
        { name: "SOC 2 Compliance", essential: false, professional: false, enterprise: true }
      ]
    },
    {
      category: "Integrations & API",
      items: [
        { name: "API Access", essential: false, professional: true, enterprise: true },
        { name: "Webhooks", essential: false, professional: true, enterprise: true },
        { name: "Custom Integrations", essential: false, professional: false, enterprise: true },
        { name: "White-label Options", essential: false, professional: false, enterprise: true },
        { name: "Marketplace Distribution", essential: false, professional: false, enterprise: true }
      ]
    },
    {
      category: "Support",
      items: [
        { name: "Email Support", essential: "Business hours", professional: "24/7", enterprise: "24/7" },
        { name: "Priority Support", essential: false, professional: true, enterprise: true },
        { name: "Dedicated Account Manager", essential: false, professional: false, enterprise: true },
        { name: "Custom Training", essential: false, professional: false, enterprise: true },
        { name: "SLA Guarantee", essential: false, professional: false, enterprise: "99.9%" }
      ]
    }
  ];

  const renderValue = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-emerald-400 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-600 mx-auto" />
      );
    }
    return <span className="text-white">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Scale className="w-8 h-8 text-[#DC2626]" />
            Plan Comparison
          </h1>
          <p className="text-gray-400">Compare features across all plans</p>
        </div>

        {/* Plan Headers */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1"></div>
          {Object.entries(plans).map(([key, plan]) => (
            <Card key={key} className="border-[#1a1a1a] bg-gradient-to-br from-[#DC2626]/10 to-[#0f0f0f]">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{plan.tagline}</p>
                <div className="text-3xl font-bold text-white mb-4">{plan.price}</div>
                <Badge className={`bg-${plan.color}-500/20 text-${plan.color}-400`}>
                  {key === "professional" ? "Most Popular" : key === "enterprise" ? "Premium" : "Starter"}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        {features.map((category) => (
          <Card key={category.category} className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardHeader>
              <CardTitle className="text-white">{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.items.map((feature, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-[#1a1a1a] last:border-0">
                    <div className="col-span-1">
                      <span className="text-gray-300">{feature.name}</span>
                    </div>
                    <div className="text-center">
                      {renderValue(feature.essential)}
                    </div>
                    <div className="text-center">
                      {renderValue(feature.professional)}
                    </div>
                    <div className="text-center">
                      {renderValue(feature.enterprise)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* CTA */}
        <Card className="border-[#1a1a1a] bg-gradient-to-br from-[#DC2626]/20 to-[#0f0f0f]">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-6">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-lg font-semibold">
                Start Free Trial
              </button>
              <button className="px-6 py-3 border border-[#2a2a2a] text-white rounded-lg hover:bg-[#1a1a1a]">
                Contact Sales
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}