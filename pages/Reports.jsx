import React, { useState, useEffect } from "react";
import { IntelligenceReport } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Filter, Calendar, Plus } from "lucide-react";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    setIsLoading(true);
    const data = await IntelligenceReport.list("-report_date");
    setReports(data);
    setIsLoading(false);
  };

  const filteredReports = filterType === "all"
    ? reports
    : reports.filter(r => r.report_type === filterType);

  const reportTypes = [
    { value: "all", label: "All Reports" },
    { value: "daily_brief", label: "Daily Briefs" },
    { value: "threat_assessment", label: "Threat Assessments" },
    { value: "incident_report", label: "Incident Reports" },
    { value: "travel_advisory", label: "Travel Advisories" },
    { value: "regional_analysis", label: "Regional Analysis" }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <FileText className="w-8 h-8 text-[#DC2626]" />
              Intelligence Reports
            </h1>
            <p className="text-gray-400">Comprehensive security reports and assessments</p>
          </div>
          <Button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Report
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Reports</p>
                  <p className="text-3xl font-bold text-white">{reports.length}</p>
                </div>
                <FileText className="w-8 h-8 text-[#DC2626]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">This Month</p>
                  <p className="text-3xl font-bold text-white">
                    {reports.filter(r => {
                      const reportDate = new Date(r.report_date);
                      const now = new Date();
                      return reportDate.getMonth() === now.getMonth();
                    }).length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-[#DC2626]" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Critical Level</p>
                  <p className="text-3xl font-bold text-white">
                    {reports.filter(r => r.threat_level === "critical").length}
                  </p>
                </div>
                <Badge className="bg-[#DC2626] text-white">HIGH</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Regions</p>
                  <p className="text-3xl font-bold text-white">
                    {new Set(reports.map(r => r.region).filter(Boolean)).size}
                  </p>
                </div>
                <Filter className="w-8 h-8 text-[#DC2626]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Filter by type:</span>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-64 bg-[#1a1a1a] border-[#2a2a2a] text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReports.map((report) => (
            <Card
              key={report.id}
              className="border-[#1a1a1a] bg-[#0f0f0f] hover:border-[#DC2626]/50 transition-colors cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-white text-lg mb-2">{report.title}</CardTitle>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className="border-[#2a2a2a] text-gray-400 capitalize text-xs">
                        {report.report_type?.replace('_', ' ')}
                      </Badge>
                      {report.threat_level && (
                        <Badge
                          className={
                            report.threat_level === "critical"
                              ? "bg-[#DC2626]/20 text-[#DC2626] border-[#DC2626]/50 text-xs"
                              : "bg-amber-500/20 text-amber-400 border-amber-500/50 text-xs"
                          }
                        >
                          {report.threat_level}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{report.content}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{report.region || "Global"}</span>
                  <span>{format(new Date(report.report_date), "MMM d, yyyy")}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
            <CardContent className="p-12 text-center">
              <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No reports found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}