import Layout from "./Layout.jsx";

import Dashboard from "./Dashboard";

import Analytics from "./Analytics";

import Incidents from "./Incidents";

import Alerts from "./Alerts";

import Report from "./Report";

import Profile from "./Profile";

import Routes from "./Routes";

import Threats from "./Threats";

import Intelligence from "./Intelligence";

import Team from "./Team";

import Subscription from "./Subscription";

import ThreatMap from "./ThreatMap";

import ComingSoon from "./ComingSoon";

import AIQuery from "./AIQuery";

import SOCMINT from "./SOCMINT";

import MitreAttack from "./MitreAttack";

import MLAnalytics from "./MLAnalytics";

import ExecutiveBriefing from "./ExecutiveBriefing";

import ThreatLookup from "./ThreatLookup";

import PersonaTracking from "./PersonaTracking";

import Collaboration from "./Collaboration";

import MobileOps from "./MobileOps";

import CameraSystems from "./CameraSystems";

import PredictiveAI from "./PredictiveAI";

import PredictiveModeling from "./PredictiveModeling";

import AutonomousHunter from "./AutonomousHunter";

import BlockchainIntel from "./BlockchainIntel";

import VoiceIntelligence from "./VoiceIntelligence";

import ZeroTrust from "./ZeroTrust";

import CompliancePage from "./CompliancePage";

import Integrations from "./Integrations";

import SettingsPage from "./SettingsPage";

import 3DVisualization from "./3DVisualization";

import 3DMap from "./3DMap";

import MarketPositioning from "./MarketPositioning";

import VoiceCommands from "./VoiceCommands";

import Verification from "./Verification";

import Testing from "./Testing";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import CookiePolicy from "./CookiePolicy";

import Accessibility from "./Accessibility";

import Reports from "./Reports";

import Compliance from "./Compliance";

import Settings from "./Settings";

import NotificationCenter from "./NotificationCenter";

import ActivityLog from "./ActivityLog";

import HelpCenter from "./HelpCenter";

import Geofencing from "./Geofencing";

import ScheduledReports from "./ScheduledReports";

import TaskManagement from "./TaskManagement";

import CostCalculator from "./CostCalculator";

import ComparisonTools from "./ComparisonTools";

import WhiteLabel from "./WhiteLabel";

import Onboarding from "./Onboarding";

import Favorites from "./Favorites";

import CustomDashboard from "./CustomDashboard";

import ExportData from "./ExportData";

import ThreatFeeds from "./ThreatFeeds";

import SelfHosting from "./SelfHosting";

import OutpostZeroIntegration from "./OutpostZeroIntegration";

import ThreatFeedIntegrations from "./ThreatFeedIntegrations";

import APIWebhooks from "./APIWebhooks";

import AuditLog from "./AuditLog";

import DeepFakeDetection from "./DeepFakeDetection";

import WearableIntegration from "./WearableIntegration";

import QuantumEncryption from "./QuantumEncryption";

import SatelliteIntegration from "./SatelliteIntegration";

import ExecutiveProtectionIntegrations from "./ExecutiveProtectionIntegrations";

import RouteOptimization from "./RouteOptimization";

import HistoricalAnalytics from "./HistoricalAnalytics";

import LawEnforcement from "./LawEnforcement";

import CaseManagement from "./CaseManagement";

import PrivateSecurity from "./PrivateSecurity";

import EmergencyProtocols from "./EmergencyProtocols";

import TravelPlanning from "./TravelPlanning";

import MarketplaceIntegration from "./MarketplaceIntegration";

import Drones from "./Drones";

import DroneOperations from "./DroneOperations";

import SecureComms from "./SecureComms";

import TwoFactorAuth from "./TwoFactorAuth";

import AdvancedSearch from "./AdvancedSearch";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Dashboard: Dashboard,
    
    Analytics: Analytics,
    
    Incidents: Incidents,
    
    Alerts: Alerts,
    
    Report: Report,
    
    Profile: Profile,
    
    Routes: Routes,
    
    Threats: Threats,
    
    Intelligence: Intelligence,
    
    Team: Team,
    
    Subscription: Subscription,
    
    ThreatMap: ThreatMap,
    
    ComingSoon: ComingSoon,
    
    AIQuery: AIQuery,
    
    SOCMINT: SOCMINT,
    
    MitreAttack: MitreAttack,
    
    MLAnalytics: MLAnalytics,
    
    ExecutiveBriefing: ExecutiveBriefing,
    
    ThreatLookup: ThreatLookup,
    
    PersonaTracking: PersonaTracking,
    
    Collaboration: Collaboration,
    
    MobileOps: MobileOps,
    
    CameraSystems: CameraSystems,
    
    PredictiveAI: PredictiveAI,
    
    PredictiveModeling: PredictiveModeling,
    
    AutonomousHunter: AutonomousHunter,
    
    BlockchainIntel: BlockchainIntel,
    
    VoiceIntelligence: VoiceIntelligence,
    
    ZeroTrust: ZeroTrust,
    
    CompliancePage: CompliancePage,
    
    Integrations: Integrations,
    
    SettingsPage: SettingsPage,
    
    3DVisualization: 3DVisualization,
    
    3DMap: 3DMap,
    
    MarketPositioning: MarketPositioning,
    
    VoiceCommands: VoiceCommands,
    
    Verification: Verification,
    
    Testing: Testing,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    CookiePolicy: CookiePolicy,
    
    Accessibility: Accessibility,
    
    Reports: Reports,
    
    Compliance: Compliance,
    
    Settings: Settings,
    
    NotificationCenter: NotificationCenter,
    
    ActivityLog: ActivityLog,
    
    HelpCenter: HelpCenter,
    
    Geofencing: Geofencing,
    
    ScheduledReports: ScheduledReports,
    
    TaskManagement: TaskManagement,
    
    CostCalculator: CostCalculator,
    
    ComparisonTools: ComparisonTools,
    
    WhiteLabel: WhiteLabel,
    
    Onboarding: Onboarding,
    
    Favorites: Favorites,
    
    CustomDashboard: CustomDashboard,
    
    ExportData: ExportData,
    
    ThreatFeeds: ThreatFeeds,
    
    SelfHosting: SelfHosting,
    
    OutpostZeroIntegration: OutpostZeroIntegration,
    
    ThreatFeedIntegrations: ThreatFeedIntegrations,
    
    APIWebhooks: APIWebhooks,
    
    AuditLog: AuditLog,
    
    DeepFakeDetection: DeepFakeDetection,
    
    WearableIntegration: WearableIntegration,
    
    QuantumEncryption: QuantumEncryption,
    
    SatelliteIntegration: SatelliteIntegration,
    
    ExecutiveProtectionIntegrations: ExecutiveProtectionIntegrations,
    
    RouteOptimization: RouteOptimization,
    
    HistoricalAnalytics: HistoricalAnalytics,
    
    LawEnforcement: LawEnforcement,
    
    CaseManagement: CaseManagement,
    
    PrivateSecurity: PrivateSecurity,
    
    EmergencyProtocols: EmergencyProtocols,
    
    TravelPlanning: TravelPlanning,
    
    MarketplaceIntegration: MarketplaceIntegration,
    
    Drones: Drones,
    
    DroneOperations: DroneOperations,
    
    SecureComms: SecureComms,
    
    TwoFactorAuth: TwoFactorAuth,
    
    AdvancedSearch: AdvancedSearch,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Dashboard />} />
                
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/Analytics" element={<Analytics />} />
                
                <Route path="/Incidents" element={<Incidents />} />
                
                <Route path="/Alerts" element={<Alerts />} />
                
                <Route path="/Report" element={<Report />} />
                
                <Route path="/Profile" element={<Profile />} />
                
                <Route path="/Routes" element={<Routes />} />
                
                <Route path="/Threats" element={<Threats />} />
                
                <Route path="/Intelligence" element={<Intelligence />} />
                
                <Route path="/Team" element={<Team />} />
                
                <Route path="/Subscription" element={<Subscription />} />
                
                <Route path="/ThreatMap" element={<ThreatMap />} />
                
                <Route path="/ComingSoon" element={<ComingSoon />} />
                
                <Route path="/AIQuery" element={<AIQuery />} />
                
                <Route path="/SOCMINT" element={<SOCMINT />} />
                
                <Route path="/MitreAttack" element={<MitreAttack />} />
                
                <Route path="/MLAnalytics" element={<MLAnalytics />} />
                
                <Route path="/ExecutiveBriefing" element={<ExecutiveBriefing />} />
                
                <Route path="/ThreatLookup" element={<ThreatLookup />} />
                
                <Route path="/PersonaTracking" element={<PersonaTracking />} />
                
                <Route path="/Collaboration" element={<Collaboration />} />
                
                <Route path="/MobileOps" element={<MobileOps />} />
                
                <Route path="/CameraSystems" element={<CameraSystems />} />
                
                <Route path="/PredictiveAI" element={<PredictiveAI />} />
                
                <Route path="/PredictiveModeling" element={<PredictiveModeling />} />
                
                <Route path="/AutonomousHunter" element={<AutonomousHunter />} />
                
                <Route path="/BlockchainIntel" element={<BlockchainIntel />} />
                
                <Route path="/VoiceIntelligence" element={<VoiceIntelligence />} />
                
                <Route path="/ZeroTrust" element={<ZeroTrust />} />
                
                <Route path="/CompliancePage" element={<CompliancePage />} />
                
                <Route path="/Integrations" element={<Integrations />} />
                
                <Route path="/SettingsPage" element={<SettingsPage />} />
                
                <Route path="/3DVisualization" element={<3DVisualization />} />
                
                <Route path="/3DMap" element={<3DMap />} />
                
                <Route path="/MarketPositioning" element={<MarketPositioning />} />
                
                <Route path="/VoiceCommands" element={<VoiceCommands />} />
                
                <Route path="/Verification" element={<Verification />} />
                
                <Route path="/Testing" element={<Testing />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/CookiePolicy" element={<CookiePolicy />} />
                
                <Route path="/Accessibility" element={<Accessibility />} />
                
                <Route path="/Reports" element={<Reports />} />
                
                <Route path="/Compliance" element={<Compliance />} />
                
                <Route path="/Settings" element={<Settings />} />
                
                <Route path="/NotificationCenter" element={<NotificationCenter />} />
                
                <Route path="/ActivityLog" element={<ActivityLog />} />
                
                <Route path="/HelpCenter" element={<HelpCenter />} />
                
                <Route path="/Geofencing" element={<Geofencing />} />
                
                <Route path="/ScheduledReports" element={<ScheduledReports />} />
                
                <Route path="/TaskManagement" element={<TaskManagement />} />
                
                <Route path="/CostCalculator" element={<CostCalculator />} />
                
                <Route path="/ComparisonTools" element={<ComparisonTools />} />
                
                <Route path="/WhiteLabel" element={<WhiteLabel />} />
                
                <Route path="/Onboarding" element={<Onboarding />} />
                
                <Route path="/Favorites" element={<Favorites />} />
                
                <Route path="/CustomDashboard" element={<CustomDashboard />} />
                
                <Route path="/ExportData" element={<ExportData />} />
                
                <Route path="/ThreatFeeds" element={<ThreatFeeds />} />
                
                <Route path="/SelfHosting" element={<SelfHosting />} />
                
                <Route path="/OutpostZeroIntegration" element={<OutpostZeroIntegration />} />
                
                <Route path="/ThreatFeedIntegrations" element={<ThreatFeedIntegrations />} />
                
                <Route path="/APIWebhooks" element={<APIWebhooks />} />
                
                <Route path="/AuditLog" element={<AuditLog />} />
                
                <Route path="/DeepFakeDetection" element={<DeepFakeDetection />} />
                
                <Route path="/WearableIntegration" element={<WearableIntegration />} />
                
                <Route path="/QuantumEncryption" element={<QuantumEncryption />} />
                
                <Route path="/SatelliteIntegration" element={<SatelliteIntegration />} />
                
                <Route path="/ExecutiveProtectionIntegrations" element={<ExecutiveProtectionIntegrations />} />
                
                <Route path="/RouteOptimization" element={<RouteOptimization />} />
                
                <Route path="/HistoricalAnalytics" element={<HistoricalAnalytics />} />
                
                <Route path="/LawEnforcement" element={<LawEnforcement />} />
                
                <Route path="/CaseManagement" element={<CaseManagement />} />
                
                <Route path="/PrivateSecurity" element={<PrivateSecurity />} />
                
                <Route path="/EmergencyProtocols" element={<EmergencyProtocols />} />
                
                <Route path="/TravelPlanning" element={<TravelPlanning />} />
                
                <Route path="/MarketplaceIntegration" element={<MarketplaceIntegration />} />
                
                <Route path="/Drones" element={<Drones />} />
                
                <Route path="/DroneOperations" element={<DroneOperations />} />
                
                <Route path="/SecureComms" element={<SecureComms />} />
                
                <Route path="/TwoFactorAuth" element={<TwoFactorAuth />} />
                
                <Route path="/AdvancedSearch" element={<AdvancedSearch />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}