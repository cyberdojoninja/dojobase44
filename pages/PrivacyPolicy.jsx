import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FileCheck className="w-8 h-8 text-[#DC2626]" />
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last updated: January 2024</p>
        </div>

        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardContent className="p-6 md:p-8 space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
              <p>
                Izulu Sentinel ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our protection intelligence platform at izulusentinel.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (name, email, organization)</li>
                <li>Security credentials and authentication data</li>
                <li>Threat intelligence data you input or generate</li>
                <li>Location data for security assessments</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the collected information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and maintain our security intelligence services</li>
                <li>Detect, prevent, and respond to security threats</li>
                <li>Improve and personalize your experience</li>
                <li>Send critical security alerts and notifications</li>
                <li>Comply with legal obligations and enforce our terms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, 
                access controls, and regular security audits to protect your data. 
                We are compliant with ISO 27001, GDPR, and other relevant security frameworks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
              <p>
                We retain your data for as long as necessary to provide our services and 
                comply with legal obligations. You can request data deletion at any time 
                through your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request data deletion</li>
                <li>Export your data</li>
                <li>Opt-out of certain data collection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="mt-3 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
                <p className="font-medium text-white">Izulu Sentinel</p>
                <p className="text-sm">Email: privacy@izulusentinel.com</p>
                <p className="text-sm">Website: izulusentinel.com</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}