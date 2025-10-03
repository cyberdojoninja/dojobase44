import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, Users, MapPin, FileText, Shield, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CostCalculator() {
  const [users, setUsers] = useState(10);
  const [assets, setAssets] = useState(25);
  const [reports, setReports] = useState(50);
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricing = {
    baseUser: 49,
    additionalUser: 39,
    asset: 5,
    report: 2
  };

  const calculateCost = () => {
    const userCost = pricing.baseUser + ((users - 5) * pricing.additionalUser);
    const assetCost = assets * pricing.asset;
    const reportCost = reports * pricing.report;
    const monthlyTotal = userCost + assetCost + reportCost;
    
    return billingCycle === "annually" 
      ? Math.round(monthlyTotal * 12 * 0.8) // 20% annual discount
      : monthlyTotal;
  };

  const totalCost = calculateCost();
  const monthlyCost = billingCycle === "annually" ? Math.round(totalCost / 12) : totalCost;

  const features = {
    essential: [
      "Real-time Threat Intelligence",
      "Global Threat Map",
      "Incident Management",
      "Asset Tracking",
      "Email Alerts",
      "Basic Reports"
    ],
    professional: [
      "Everything in Essential",
      "Advanced Analytics",
      "Team Collaboration",
      "Travel Route Planning",
      "Intelligence Reports",
      "API Access",
      "Priority Support"
    ],
    enterprise: [
      "Everything in Professional",
      "Drone Integration",
      "Custom Integrations",
      "White-label Options",
      "Dedicated Support",
      "SLA Guarantee",
      "Custom Training"
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Calculator className="w-8 h-8 text-[#DC2626]" />
            Cost Calculator
          </h1>
          <p className="text-gray-400">Estimate your monthly investment</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calculator */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
              <CardHeader>
                <CardTitle className="text-white">Configure Your Plan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Billing Cycle */}
                <div>
                  <Label className="text-white mb-3 block">Billing Cycle</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={billingCycle === "monthly" ? "default" : "outline"}
                      onClick={() => setBillingCycle("monthly")}
                      className={billingCycle === "monthly" ? "bg-[#DC2626] hover:bg-[#B91C1C]" : "border-[#2a2a2a] text-white"}
                    >
                      Monthly
                    </Button>
                    <Button
                      variant={billingCycle === "annually" ? "default" : "outline"}
                      onClick={() => setBillingCycle("annually")}
                      className={billingCycle === "annually" ? "bg-[#DC2626] hover:bg-[#B91C1C]" : "border-[#2a2a2a] text-white"}
                    >
                      Annually
                      <Badge className="ml-2 bg-emerald-500/20 text-emerald-400">Save 20%</Badge>
                    </Button>
                  </div>
                </div>

                {/* Users */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-white flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Number of Users
                    </Label>
                    <span className="text-2xl font-bold text-white">{users}</span>
                  </div>
                  <Slider
                    value={[users]}
                    onValueChange={(value) => setUsers(value[0])}
                    min={1}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-400">
                    ${pricing.baseUser} base + ${pricing.additionalUser}/user after 5 users
                  </p>
                </div>

                {/* Assets */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Protected Assets
                    </Label>
                    <span className="text-2xl font-bold text-white">{assets}</span>
                  </div>
                  <Slider
                    value={[assets]}
                    onValueChange={(value) => setAssets(value[0])}
                    min={1}
                    max={200}
                    step={5}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-400">
                    ${pricing.asset} per asset per month
                  </p>
                </div>

                {/* Reports */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label className="text-white flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Intelligence Reports
                    </Label>
                    <span className="text-2xl font-bold text-white">{reports}</span>
                  </div>
                  <Slider
                    value={[reports]}
                    onValueChange={(value) => setReports(value[0])}
                    min={10}
                    max={500}
                    step={10}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-400">
                    ${pricing.report} per report per month
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cost Summary */}
          <div>
            <Card className="border-[#1a1a1a] bg-gradient-to-br from-[#DC2626]/10 to-[#0f0f0f] sticky top-4">
              <CardHeader>
                <CardTitle className="text-white">Cost Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-white mb-2">
                    ${monthlyCost.toLocaleString()}
                  </div>
                  <p className="text-gray-400">per month</p>
                  {billingCycle === "annually" && (
                    <p className="text-emerald-400 text-sm mt-2">
                      ${totalCost.toLocaleString()} billed annually
                    </p>
                  )}
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1a1a1a]">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Users ({users})</span>
                    <span className="text-white">
                      ${(pricing.baseUser + (Math.max(0, users - 5) * pricing.additionalUser)).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Assets ({assets})</span>
                    <span className="text-white">${(assets * pricing.asset).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Reports ({reports})</span>
                    <span className="text-white">${(reports * pricing.report).toLocaleString()}</span>
                  </div>
                </div>

                <Button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] h-12">
                  Get Started
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  No credit card required for 14-day trial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Feature Comparison */}
        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardHeader>
            <CardTitle className="text-white">Plan Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Essential</h3>
                  <Badge className="bg-cyan-500/20 text-cyan-400">Starter</Badge>
                </div>
                <div className="text-3xl font-bold text-white mb-4">$49/mo</div>
                <ul className="space-y-3">
                  {features.essential.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#DC2626]/20 to-[#1a1a1a] rounded-lg border-2 border-[#DC2626]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Professional</h3>
                  <Badge className="bg-[#DC2626]">Popular</Badge>
                </div>
                <div className="text-3xl font-bold text-white mb-4">$149/mo</div>
                <ul className="space-y-3">
                  {features.professional.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#1a1a1a] rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">Enterprise</h3>
                  <Badge className="bg-purple-500/20 text-purple-400">Premium</Badge>
                </div>
                <div className="text-3xl font-bold text-white mb-4">Custom</div>
                <ul className="space-y-3">
                  {features.enterprise.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}