import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { File, Shield } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <File className="w-8 h-8 text-[#DC2626]" />
            Terms of Service
          </h1>
          <p className="text-gray-400">Last updated: January 2024</p>
        </div>

        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardContent className="p-6 md:p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Izulu Sentinel's protection intelligence platform 
                at izulusentinel.com, you accept and agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Description of Services</h2>
              <p className="mb-3">
                Izulu Sentinel provides enterprise-grade protection intelligence services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Real-time threat monitoring and intelligence</li>
                <li>AI-powered predictive analytics</li>
                <li>Route planning and mission coordination</li>
                <li>Social media intelligence (SOCMINT)</li>
                <li>Asset and personnel tracking</li>
                <li>Comprehensive security reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. User Responsibilities</h2>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the platform only for lawful security purposes</li>
                <li>Not attempt to breach or test platform security</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Subscription and Billing</h2>
              <p>
                Izulu Sentinel operates on a subscription basis. You will be billed according 
                to your selected plan. Fees are non-refundable except as required by law. 
                We reserve the right to modify pricing with 30 days notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of the Izulu Sentinel platform are 
                owned by us and are protected by international copyright, trademark, and 
                other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
              <p>
                Izulu Sentinel provides intelligence and analysis tools. We are not responsible 
                for decisions made based on platform data. The platform is provided "as is" 
                without warranties of any kind. We shall not be liable for any indirect, 
                incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, 
                without prior notice, for any violation of these Terms of Service or for any 
                other reason at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">8. Contact Information</h2>
              <div className="mt-3 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                <p className="font-medium text-white">Izulu Sentinel</p>
                <p className="text-sm">Email: legal@izulusentinel.com</p>
                <p className="text-sm">Website: izulusentinel.com</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}