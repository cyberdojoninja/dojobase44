
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, Users, Pin, Paperclip, Clock, Image as ImageIcon } from "lucide-react";
import { Incident } from "@/api/entities";
import { Case } from "@/api/entities";
import { User } from "@/api/entities";
import { format } from "date-fns";

export default function Collaboration() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "John Doe",
      message: "Threat detected in Zone Alpha. All units be advised.",
      timestamp: new Date(Date.now() - 300000),
      pinned: true,
      type: "alert"
    },
    {
      id: 2,
      user: "Sarah Smith",
      message: "Roger that. Moving team to safe position.",
      timestamp: new Date(Date.now() - 240000),
      pinned: false,
      type: "normal"
    },
    {
      id: 3,
      user: "Mike Johnson",
      message: "Asset secured. Requesting extraction at checkpoint Bravo.",
      timestamp: new Date(Date.now() - 120000),
      pinned: false,
      type: "normal"
    }
  ]);

  const [currentUser, setCurrentUser] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [activeUsers, setActiveUsers] = useState(3);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const user = await User.me();
      setCurrentUser(user);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      user: currentUser?.full_name || "Anonymous",
      message: newMessage,
      timestamp: new Date(),
      pinned: false,
      type: "normal"
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  const togglePin = (id) => {
    setMessages(messages.map(m =>
      m.id === id ? {...m, pinned: !m.pinned} : m
    ));
  };

  const pinnedMessages = messages.filter(m => m.pinned);
  const regularMessages = messages.filter(m => !m.pinned);

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-[#DC2626]" />
              Team Collaboration
            </h1>
            <p className="text-gray-400">Real-time communication and coordination</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-emerald-500/20 text-emerald-400">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse mr-2"></div>
              {activeUsers} Active
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {pinnedMessages.length > 0 && (
              <Card className="border-[#DC2626]/30 bg-[#DC2626]/10">
                <CardHeader>
                  <CardTitle className="text-white text-sm flex items-center gap-2">
                    <Pin className="w-4 h-4" />
                    Pinned Messages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {pinnedMessages.map((msg) => (
                    <div key={msg.id} className="p-3 bg-[#1a1a1a] rounded-lg">
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-bold text-white text-sm">{msg.user}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => togglePin(msg.id)}
                          className="h-6 w-6 text-gray-400"
                        >
                          <Pin className="w-3 h-3" />
                        </Button>
                      </div>
                      <p className="text-gray-300 text-sm">{msg.message}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {format(msg.timestamp, "MMM d, HH:mm")}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
              <CardHeader>
                <CardTitle className="text-white">Team Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4 max-h-[500px] overflow-y-auto">
                  {regularMessages.map((msg) => (
                    <div key={msg.id} className="p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#1a1a1a]/80 transition-colors">
                      <div className="flex items-start justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {msg.user.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="font-bold text-white text-sm">{msg.user}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <p className="text-xs text-gray-500">
                            {format(msg.timestamp, "HH:mm")}
                          </p>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => togglePin(msg.id)}
                            className="h-6 w-6 text-gray-400 hover:text-white"
                          >
                            <Pin className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm ml-10">{msg.message}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="bg-[#1a1a1a] border-[#2a2a2a] text-white"
                  />
                  <Button onClick={sendMessage} className="bg-[#DC2626] hover:bg-[#B91C1C]">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
              <CardHeader>
                <CardTitle className="text-white text-sm flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Online Team Members
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {["John Doe", "Sarah Smith", "Mike Johnson"].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 hover:bg-[#1a1a1a] rounded transition-colors">
                    <div className="h-8 w-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-xs text-gray-400">Active now</p>
                    </div>
                    <div className="h-2 w-2 bg-emerald-500 rounded-full"></div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-[#1a1a1a] bg-[#0f0f0f]">
              <CardHeader>
                <CardTitle className="text-white text-sm flex items-center gap-2">
                  <Paperclip className="w-4 h-4" />
                  Shared Files
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="p-3 bg-[#1a1a1a] rounded hover:bg-[#1a1a1a]/80 transition-colors cursor-pointer">
                  <p className="text-white text-sm font-medium mb-1">Mission_Brief_Alpha.pdf</p>
                  <p className="text-xs text-gray-400">Shared by John Doe • 2 hours ago</p>
                </div>
                <div className="p-3 bg-[#1a1a1a] rounded hover:bg-[#1a1a1a]/80 transition-colors cursor-pointer">
                  <p className="text-white text-sm font-medium mb-1">Threat_Map_Update.png</p>
                  <p className="text-xs text-gray-400">Shared by Sarah Smith • 5 hours ago</p>
                </div>
                <Button variant="outline" className="w-full border-[#2a2a2a] text-gray-300 hover:text-white" size="sm">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
