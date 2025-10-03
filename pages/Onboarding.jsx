import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/api/entities";
import { useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Shield, 
  Map, 
  Users, 
  AlertTriangle, 
  FileText, 
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Izulu Sentinel",
      description: "Your comprehensive protection intelligence platform",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Izulu Sentinel provides real-time threat intelligence, asset protection, 
            and situational awareness for security professionals worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <AlertTriangle className="w-8 h-8 text-[#DC2626] mb-2" />
              <h4 className="font-semibold text-white mb-1">Threat Intelligence</h4>
              <p className="text-sm text-gray-400">Real-time global threat monitoring and alerts</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <Map className="w-8 h-8 text-cyan-500 mb-2" />
              <h4 className="font-semibold text-white mb-1">Interactive Maps</h4>
              <p className="text-sm text-gray-400">Visualize threats and assets globally</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <Users className="w-8 h-8 text-emerald-500 mb-2" />
              <h4 className="font-semibold text-white mb-1">Asset Protection</h4>
              <p className="text-sm text-gray-400">Monitor and protect personnel and facilities</p>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg">
              <FileText className="w-8 h-8 text-amber-500 mb-2" />
              <h4 className="font-semibold text-white mb-1">Intelligence Reports</h4>
              <p className="text-sm text-gray-400">Comprehensive threat assessments and briefings</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Dashboard Overview",
      description: "Your command center for security operations",
      icon: Map,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            The dashboard provides real-time visibility into:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Global Threat Map</strong>
                <p className="text-sm text-gray-400">Interactive map showing active threats and protected assets worldwide</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Real-time Statistics</strong>
                <p className="text-sm text-gray-400">Key metrics including active threats, critical alerts, and asset status</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Alert System</strong>
                <p className="text-sm text-gray-400">Immediate notifications for critical threats and incidents</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Managing Threats & Incidents",
      description: "Track and respond to security events",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Our incident management system helps you:
          </p>
          <div className="space-y-3 p-4 bg-[#1a1a1a] rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#DC2626]/20 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#DC2626] font-bold">1</span>
              </div>
              <div>
                <strong className="text-white">Report Incidents</strong>
                <p className="text-sm text-gray-400">Quickly document security events with location, severity, and details</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#DC2626]/20 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#DC2626] font-bold">2</span>
              </div>
              <div>
                <strong className="text-white">Track Status</strong>
                <p className="text-sm text-gray-400">Monitor incident progression from active to resolved</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#DC2626]/20 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#DC2626] font-bold">3</span>
              </div>
              <div>
                <strong className="text-white">Coordinate Response</strong>
                <p className="text-sm text-gray-400">Share intelligence and coordinate with your team</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Team Collaboration",
      description: "Work together securely",
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300">
            Collaborate with your security team:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Secure Communications</strong>
                <p className="text-sm text-gray-400">End-to-end encrypted messaging for sensitive operations</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Team Management</strong>
                <p className="text-sm text-gray-400">Track team member locations, status, and availability</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Mission Planning</strong>
                <p className="text-sm text-gray-400">Plan and coordinate travel routes with threat assessments</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "You're All Set!",
      description: "Start protecting what matters",
      icon: CheckCircle,
      content: (
        <div className="space-y-6 text-center">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-emerald-400" />
          </div>
          <p className="text-gray-300 text-lg">
            You're ready to start using Izulu Sentinel!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Button
              onClick={() => navigate(createPageUrl("Dashboard"))}
              className="bg-[#DC2626] hover:bg-[#B91C1C]"
            >
              Go to Dashboard
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(createPageUrl("HelpCenter"))}
              className="border-[#2a2a2a] text-white"
            >
              Visit Help Center
            </Button>
          </div>
        </div>
      )
    }
  ];

  const currentStepData = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  const handleNext = async () => {
    if (isLastStep) {
      // Mark onboarding as complete
      await User.updateMyUserData({ onboarding_completed: true });
      navigate(createPageUrl("Dashboard"));
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = async () => {
    await User.updateMyUserData({ onboarding_completed: true });
    navigate(createPageUrl("Dashboard"));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardContent className="p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`h-2 flex-1 mx-1 rounded-full transition-colors ${
                      index <= currentStep ? 'bg-[#DC2626]' : 'bg-[#1a1a1a]'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 text-center">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>

            {/* Content */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#DC2626]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <currentStepData.icon className="w-8 h-8 text-[#DC2626]" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {currentStepData.title}
              </h1>
              <p className="text-gray-400">
                {currentStepData.description}
              </p>
            </div>

            <div className="mb-8">
              {currentStepData.content}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                onClick={handleSkip}
                className="text-gray-400 hover:text-white"
              >
                Skip Tutorial
              </Button>

              <div className="flex gap-3">
                {!isFirstStep && (
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    className="border-[#2a2a2a] text-white"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  className="bg-[#DC2626] hover:bg-[#B91C1C]"
                >
                  {isLastStep ? "Get Started" : "Next"}
                  {!isLastStep && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}