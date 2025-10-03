import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Building } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Subscription() {
  const currentPlan = {
    name: "Professional",
    price: 149,
    nextBilling: "Feb 1, 2024",
    status: "Active"
  };

  const usage = {
    threatFeeds: { current: 18, limit: 25 },
    teamMembers: { current: 8, limit: 15 },
    storage: { current: 6.2, limit: 10, unit: "GB" },
    apiCalls: { current: 647, limit: 1000 }
  };

  const plans = [
    {
      name: "Basic",
      price: 49,
      icon: Zap,
      description: "Essential threat intelligence for small teams",
      features: [
        "5 threat feeds",
        "Basic analytics",
        "Email alerts",
        "Community support",
        "10 API calls/day"
      ]
    },
    {
      name: "Professional",
      price: 149,
      icon: Crown,
      description: "Advanced capabilities for growing security teams",
      popular: true,
      current: true,
      features: [
        "25 threat feeds",
        "Advanced analytics",
        "Real-time alerts",
        "Priority support",
        "1000 API calls/day",
        "Custom integrations",
        "Team collaboration"
      ]
    },
    {
      name: "Enterprise",
      price: 499,
      icon: Building,
      description: "Full-scale threat intelligence platform",
      features: [
        "Unlimited threat feeds",
        "AI-powered analytics",
        "Multi-channel alerts",
        "24/7 dedicated support",
        "Unlimited API calls",
        "Custom development",
        "Advanced compliance",
        "SLA guarantee"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Subscription Management
          </h1>
          <p className="text-gray-400">Manage your plan, usage, and billing information</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <Badge className="mb-2 bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                    <Crown className="w-3 h-3 mr-1" />
                    Current Plan
                  </Badge>
                  <CardTitle className="text-white text-2xl">{currentPlan.name}</CardTitle>
                  <p className="text-3xl font-bold text-white mt-2">
                    ${currentPlan.price}<span className="text-lg text-gray-400">/month</span>
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Next billing</span>
                <span className="text-white font-medium">{currentPlan.nextBilling}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Status</span>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">{currentPlan.status}</Badge>
              </div>
              <div className="flex gap-3 pt-4">
                <Button className="flex-1 bg-[#DC2626] hover:bg-[#B91C1C] text-white">Upgrade</Button>
                <Button variant="outline" className="border-[#2a2a2a] text-white bg-[#1a1a1a] hover:bg-[#2a2a2a]">Manage</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardHeader>
              <CardTitle className="text-white">Usage Overview</CardTitle>
              <p className="text-sm text-gray-400">Current usage against your plan limits</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Threat Feeds</span>
                  <span className="text-white font-medium">{usage.threatFeeds.current}/{usage.threatFeeds.limit}</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#DC2626]" 
                    style={{ width: `${(usage.threatFeeds.current / usage.threatFeeds.limit) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Team Members</span>
                  <span className="text-white font-medium">{usage.teamMembers.current}/{usage.teamMembers.limit}</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#DC2626]" 
                    style={{ width: `${(usage.teamMembers.current / usage.teamMembers.limit) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Storage</span>
                  <span className="text-white font-medium">{usage.storage.current}{usage.storage.unit}/{usage.storage.limit}{usage.storage.unit}</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#DC2626]" 
                    style={{ width: `${(usage.storage.current / usage.storage.limit) * 100}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">API Calls (Today)</span>
                  <span className="text-white font-medium">{usage.apiCalls.current}/{usage.apiCalls.limit}</span>
                </div>
                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#DC2626]" 
                    style={{ width: `${(usage.apiCalls.current / usage.apiCalls.limit) * 100}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white border border-[#2a2a2a]">Available Plans</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a1a1a]">Billing History</Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-[#1a1a1a]">Usage Analytics</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={`${
                  plan.popular 
                    ? 'border-[#DC2626] bg-[#0f0f0f] relative'
                    : 'border-[#1a1a1a] bg-[#0f0f0f]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#DC2626] text-white border-0">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                      <plan.icon className="w-5 h-5 text-[#DC2626]" />
                    </div>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${
                      plan.current
                        ? 'bg-[#2a2a2a] text-gray-400 cursor-not-allowed border border-[#2a2a2a]'
                        : 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
                    }`}
                    disabled={plan.current}
                  >
                    {plan.current ? 'Current Plan' : 'Upgrade'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}