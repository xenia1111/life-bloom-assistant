import { useState, useRef } from "react";
import { ArrowLeft, Send, Mic, MicOff, Camera, Image, MoreHorizontal, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import blueEyeIcon from "@/assets/blue-eye-icon.png";

const Chat = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "It's 8 o'clock, Monster will now give you an overview of today",
      timestamp: "08:00"
    },
    {
      id: 2,
      type: "ai",
      content: "Monster has picked 'Here for it All' for you, let's activate today with music",
      timestamp: "08:00",
      isMusic: true,
      musicData: {
        title: "Here for it All",
        artist: "Monster",
        duration: "3:42"
      }
    },
    {
      id: 3,
      type: "user", 
      content: "Alright, I'm ready for the day!",
      timestamp: "08:01"
    }
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages([...messages, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: "I understand your message. Is there anything else I can help you with?",
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement voice recording logic
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // TODO: Handle image upload
      console.log("File selected:", file.name);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-background border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => window.history.back()}
            className="hover:bg-muted"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src={blueEyeIcon} alt="AI Assistant" />
            <AvatarFallback className="bg-muted">
              AI
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[80%] ${msg.type === "ai" ? "" : "flex gap-3 flex-row-reverse"}`}>
              {msg.type === "user" && (
                <Avatar className="h-8 w-8 mt-2">
                  <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
                  <AvatarFallback className="bg-muted text-xs">U</AvatarFallback>
                </Avatar>
              )}
              <div className="flex flex-col">
                {msg.isMusic ? (
                  <div className="bg-card border border-border rounded-2xl p-4 max-w-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{msg.musicData?.title}</p>
                        <p className="text-xs text-muted-foreground">{msg.musicData?.artist}</p>
                        <p className="text-xs text-muted-foreground">{msg.musicData?.duration}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      msg.type === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-foreground text-background rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                )}
                <p className={`text-xs text-muted-foreground mt-1 px-2 ${
                  msg.type === "user" ? "text-right" : ""
                }`}>
                  {msg.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-background border-t border-border">
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            <Button variant="outline" className="flex-shrink-0 rounded-full whitespace-nowrap">
              📷 Image Recognition
            </Button>
            <Button variant="outline" className="flex-shrink-0 rounded-full whitespace-nowrap">
              📊 Health Status
            </Button>
            <Button variant="outline" className="flex-shrink-0 rounded-full whitespace-nowrap">
              📋 Nutrition Library
            </Button>
          </div>
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-3">
          <Button
            variant={isRecording ? "destructive" : "default"}
            size="icon"
            onClick={handleVoiceRecording}
            className="rounded-full flex-shrink-0 w-12 h-12"
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </Button>
          
          <div className="flex-1 relative">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="rounded-full bg-muted border-0 pr-12 h-12"
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={handleImageUpload}
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
            >
              <Camera className="h-4 w-4" />
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
          
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="rounded-full flex-shrink-0 w-12 h-12"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;