

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  LayoutDashboard,
  BarChart3,
  Map,
  AlertTriangle,
  Brain,
  Rss,
  Globe,
  MessageSquare,
  Target,
  TrendingUp,
  Briefcase,
  Search,
  UserCheck,
  FileText,
  Route,
  Users,
  MessageCircle,
  Smartphone,
  Video,
  Cpu,
  GitBranch,
  Bot,
  Link2,
  Mic,
  Shield,
  CheckCircle,
  Puzzle,
  Settings,
  Boxes,
  MapPin,
  Store,
  MicOff,
  User,
  CreditCard,
  CheckSquare, // Used for Two-Factor Auth
  TestTube,
  FileCheck, // Used for Audit Trail, Privacy Policy
  File, // Used for Terms of Service
  Cookie,
  Eye,
  ChevronDown,
  ChevronRight,
  Zap,
  Radio, // Added Radio icon for Drone Fleet
  Paintbrush, // Added for White Label
  Scale, // Added for Comparisons
  ListTodo, // Added for Tasks
  HelpCircle, // Added for Help
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

import LanguageSwitcher from "./components/language/LanguageSwitcher";
import OfflineMode from "./components/shared/OfflineMode";
import PanicButton from "./components/shared/PanicButton"; // Added PanicButton import

const QuickActions = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#DC2626] text-white p-3 rounded-full shadow-lg hover:bg-[#B91C1C] transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#DC2626] focus:ring-opacity-75"
        aria-label="Toggle Quick Actions"
      >
        <Zap className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-64 bg-[#000000] border border-[#0f0f0f] rounded-lg shadow-xl p-4 text-sm text-gray-300 animate-fade-in-up">
          <h3 className="font-semibold text-white mb-3 text-base flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#DC2626]" /> Quick Actions
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-between">
              <span>Toggle Sidebar</span>
              <span className="flex gap-1">
                <kbd>Ctrl</kbd> <kbd>+</kbd> <kbd>B</kbd>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Open Search</span>
              <span className="flex gap-1">
                <kbd>Ctrl</kbd> <kbd>+</kbd> <kbd>F</kbd>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>New Alert</span>
              <span className="flex gap-1">
                <kbd>Ctrl</kbd> <kbd>+</kbd> <kbd>N</kbd>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Settings</span>
              <span className="flex gap-1">
                <kbd>Ctrl</kbd> <kbd>+</kbd> <kbd>S</kbd>
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>Toggle This Menu</span>
              <span className="flex gap-1">
                <kbd>Ctrl</kbd> <kbd>+</kbd> <kbd>K</kbd>
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const menuStructure = [
  {
    section: "DASHBOARD",
    items: [
      { title: "Overview", url: "Dashboard", icon: LayoutDashboard },
      { title: "Analytics", url: "Analytics", icon: BarChart3 },
      { title: "Threat Map", url: "ThreatMap", icon: Map },
      { title: "Alerts", url: "Alerts", icon: AlertTriangle },
    ]
  },
  {
    section: "INTELLIGENCE",
    items: [
      { title: "AI Query", url: "AIQuery", icon: Brain },
      { title: "Intelligence Feeds", url: "Intelligence", icon: Rss },
      { title: "Threat Feeds", url: "Threats", icon: Globe, highlight: true },
      { title: "SOCMINT", url: "SOCMINT", icon: MessageSquare },
      { title: "MITRE ATT&CK", url: "MitreAttack", icon: Target },
      { title: "ML Analytics", url: "MLAnalytics", icon: TrendingUp },
    ]
  },
  {
    section: "EXECUTIVE",
    items: [
      { title: "Executive Briefing", url: "ExecutiveBriefing", icon: Briefcase },
      { title: "Threat Lookup", url: "ThreatLookup", icon: Search },
      { title: "Persona Tracking", url: "PersonaTracking", icon: UserCheck },
      { title: "Reports", url: "Reports", icon: FileText },
    ]
  },
  {
    section: "OPERATIONS",
    items: [
      { title: "Mission Planning", url: "Routes", icon: Route },
      { title: "Travel Planning", url: "TravelPlanning", icon: MapPin },
      { title: "Team Management", url: "Team", icon: Users },
      { title: "Live Collaboration", url: "Collaboration", icon: MessageCircle },
      { title: "Mobile Ops", url: "MobileOps", icon: Smartphone },
      { title: "Camera Systems", url: "CameraSystems", icon: Video },
      { title: "Drone Fleet", url: "Drones", icon: Radio, highlight: true }, // New item
      { title: "Drone Operations", url: "DroneOperations", icon: Cpu, highlight: true }, // New item
    ]
  },
  {
    section: "AI & AUTOMATION",
    items: [
      { title: "Predictive AI", url: "PredictiveAI", icon: Cpu },
      { title: "Predictive Modeling", url: "PredictiveModeling", icon: GitBranch },
      { title: "Autonomous Hunter", url: "AutonomousHunter", icon: Bot },
      { title: "Blockchain Intel", url: "BlockchainIntel", icon: Link2 },
      { title: "Voice Intelligence", url: "VoiceIntelligence", icon: Mic },
    ]
  },
  {
    section: "SECURITY & COMPLIANCE",
    items: [
      { title: "Zero Trust", url: "ZeroTrust", icon: Shield },
      { title: "Two-Factor Auth", url: "TwoFactorAuth", icon: CheckSquare }, // Added
      { title: "Audit Trail", url: "AuditTrail", icon: FileCheck }, // Added
      { title: "Compliance", url: "Compliance", icon: CheckCircle },
      { title: "Integrations", url: "Integrations", icon: Puzzle },
      { title: "Settings", url: "Settings", icon: Settings },
    ]
  },
  {
    section: "ADVANCED FEATURES",
    items: [
      { title: "3D Visualization", url: "3DVisualization", icon: Boxes },
      { title: "3D Map", url: "3DMap", icon: MapPin },
      { title: "Geofencing", url: "Geofencing", icon: MapPin, highlight: true }, // Added
      { title: "Secure Comms", url: "SecureComms", icon: MessageSquare, highlight: true }, // Added
      { title: "Market Positioning", url: "MarketPositioning", icon: Store },
      { title: "Voice Commands", url: "VoiceCommands", icon: MicOff },
      { title: "Marketplace Distribution", url: "MarketplaceIntegration", icon: Store, highlight: true },
    ]
  },
  {
    section: "ENTERPRISE FEATURES", // New section for enterprise features
    items: [
      { title: "White Label", url: "WhiteLabel", icon: Paintbrush },
      { title: "Comparisons", url: "Comparisons", icon: Scale },
      { title: "Tasks", url: "Tasks", icon: ListTodo },
      { title: "Help", url: "Help", icon: HelpCircle },
    ]
  },
  {
    section: "SYSTEM & SUPPORT",
    items: [
      { title: "User Profile", url: "Profile", icon: User },
      { title: "Subscription", url: "Subscription", icon: CreditCard },
      { title: "Verification", url: "Verification", icon: CheckSquare },
      { title: "Testing", url: "Testing", icon: TestTube },
    ]
  },
  {
    section: "LEGAL & COMPLIANCE",
    items: [
      { title: "Privacy Policy", url: "PrivacyPolicy", icon: FileCheck },
      { title: "Terms of Service", url: "TermsOfService", icon: File },
      { title: "Cookie Policy", url: "CookiePolicy", icon: Cookie },
      { title: "Accessibility", url: "Accessibility", icon: Eye },
    ]
  },
  {
    section: "LAW ENFORCEMENT & SECURITY",
    items: [
      { title: "Law Enforcement", url: "LawEnforcement", icon: Shield },
      { title: "Case Management", url: "CaseManagement", icon: FileText },
      { title: "Private Security", url: "PrivateSecurity", icon: Shield },
      { title: "Emergency Protocols", url: "EmergencyProtocols", icon: AlertTriangle },
    ]
  }
];

export default function Layout({ children }) {
  const location = useLocation();
  const sidebarRef = React.useRef(null);
  const [expandedSections, setExpandedSections] = React.useState(
    menuStructure.reduce((acc, section) => {
      acc[section.section] = true;
      return acc;
    }, {})
  );

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Preserve sidebar scroll position when navigating
  React.useEffect(() => {
    const sidebar = sidebarRef.current;
    if (sidebar) {
      const scrollPosition = sessionStorage.getItem('sidebarScrollPosition');
      if (scrollPosition) {
        sidebar.scrollTop = parseInt(scrollPosition, 10);
      }
    }
  }, [location.pathname]);

  const handleSidebarScroll = (e) => {
    sessionStorage.setItem('sidebarScrollPosition', e.target.scrollTop.toString());
  };

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --primary: 0 84% 60%;
          --primary-foreground: 0 0% 100%;
          --secondary: 0 0% 20%;
          --background: 0 0% 3%;
          --foreground: 0 0% 98%;
          --card: 0 0% 5%;
          --card-foreground: 0 0% 98%;
          --muted: 0 0% 8%;
          --muted-foreground: 0 0% 65%;
          --accent: 0 84% 60%;
          --destructive: 0 84% 60%;
          --border: 0 0% 10%;
          --ring: 0 84% 60%;
        }
        
        body {
          background: #050505;
        }

        .sidebar-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .sidebar-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(220, 38, 38, 0.3);
          border-radius: 3px;
        }

        .sidebar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(220, 38, 38, 0.5);
        }

        kbd {
          background: #1a1a1a;
          border: 1px solid #2a2a2a;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 11px;
          color: #888;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
          white-space: nowrap;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.2s ease-out forwards;
        }
      `}</style>

      <OfflineMode />
      <PanicButton /> {/* Added PanicButton component */}
      <QuickActions />

      <div className="min-h-screen flex w-full bg-[#050505]">
        <Sidebar className="border-r border-[#0f0f0f] bg-[#000000]">
          <SidebarHeader className="border-b border-[#0f0f0f] p-4 bg-[#050505]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#DC2626] rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-white text-sm">Izulu Sentinel</h2>
                  <p className="text-[10px] text-gray-600">Protection Intelligence</p>
                </div>
              </div>
              <LanguageSwitcher />
            </div>
          </SidebarHeader>

          <SidebarContent 
            ref={sidebarRef}
            onScroll={handleSidebarScroll}
            className="sidebar-scrollbar overflow-y-auto bg-[#000000]"
          >
            {menuStructure.map((section) => (
              <Collapsible
                key={section.section}
                open={expandedSections[section.section]}
                onOpenChange={() => toggleSection(section.section)}
              >
                <SidebarGroup>
                  <CollapsibleTrigger className="w-full">
                    <SidebarGroupLabel className="text-[10px] font-semibold text-gray-600 uppercase tracking-wider px-3 py-2 hover:text-gray-500 transition-colors flex items-center justify-between group">
                      <span>{section.section}</span>
                      {expandedSections[section.section] ? (
                        <ChevronDown className="w-3 h-3 text-gray-700 group-hover:text-gray-600" />
                      ) : (
                        <ChevronRight className="w-3 h-3 text-gray-700 group-hover:text-gray-600" />
                      )}
                    </SidebarGroupLabel>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenu className="space-y-0.5 px-2">
                        {section.items.map((item) => {
                          const isActive = location.pathname === createPageUrl(item.url);
                          return (
                            <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton
                                asChild
                                className={`
                                  transition-all duration-150 rounded group relative px-3 py-2
                                  ${item.highlight && isActive
                                    ? 'bg-[#DC2626] text-white'
                                    : item.highlight
                                    ? 'bg-[#DC2626] hover:bg-[#B91C1C] text-white'
                                    : isActive
                                    ? 'bg-[#DC2626] text-white'
                                    : 'text-gray-500 hover:text-gray-300 hover:bg-[#0f0f0f]'
                                  }
                                `}
                              >
                                <Link to={createPageUrl(item.url)} className="flex items-center gap-3">
                                  <item.icon className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-normal text-sm">{item.title}</span>
                                </Link>
                              </SidebarMenuButton>
                            </SidebarMenuItem>
                          );
                        })}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </SidebarGroup>
              </Collapsible>
            ))}
          </SidebarContent>

          <SidebarFooter className="border-t border-[#0f0f0f] p-3 bg-[#000000]">
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>System Operational</span>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-[#050505] border-b border-[#0f0f0f] px-6 py-3 lg:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-[#0f0f0f] p-2 rounded transition-colors duration-200" />
              <h1 className="text-lg font-bold text-white">Izulu Sentinel</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto bg-[#0a0a0a]">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

