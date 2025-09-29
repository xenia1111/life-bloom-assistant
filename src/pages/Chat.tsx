import { useState, useRef } from "react";
import { ArrowLeft, Send, Mic, MicOff, Camera, Image, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Chat = () => {
  const [inputMode, setInputMode] = useState<"text" | "voice" | "image">("text");
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString()
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
        content: "I understand your message. How else can I assist you?",
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
    <div className="min-h-screen bg-gradient-background flex flex-col">
      {/* Header */}
      <div className="bg-glass-subtle backdrop-blur-glass border-b border-glass-border p-4">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => window.history.back()}
            className="hover:bg-glass-subtle"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground">
              AI
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-foreground">AI Assistant</h1>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card
              className={`max-w-[80%] ${
                msg.type === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-gradient-glass backdrop-blur-glass border-glass-border"
              }`}
            >
              <CardContent className="p-3">
                <p className="text-sm">{msg.content}</p>
                <p className={`text-xs mt-1 ${msg.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {msg.timestamp}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Input Mode Selector */}
      <div className="p-4 bg-glass-subtle backdrop-blur-glass border-t border-glass-border">
        <div className="flex gap-2 mb-4">
          <Badge 
            variant={inputMode === "text" ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setInputMode("text")}
          >
            Text
          </Badge>
          <Badge 
            variant={inputMode === "voice" ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setInputMode("voice")}
          >
            Voice
          </Badge>
          <Badge 
            variant={inputMode === "image" ? "default" : "secondary"}
            className="cursor-pointer"
            onClick={() => setInputMode("image")}
          >
            Image
          </Badge>
        </div>

        {/* Input Area */}
        <div className="flex gap-2">
          {inputMode === "text" && (
            <>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 min-h-[44px] max-h-32 bg-background border-glass-border"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button onClick={handleSendMessage} size="icon" className="self-end">
                <Send className="h-4 w-4" />
              </Button>
            </>
          )}

          {inputMode === "voice" && (
            <div className="flex-1 flex items-center justify-center">
              <Button
                variant={isRecording ? "destructive" : "default"}
                size="lg"
                onClick={handleVoiceRecording}
                className="rounded-full"
              >
                {isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                <span className="ml-2">
                  {isRecording ? "Stop Recording" : "Start Recording"}
                </span>
              </Button>
            </div>
          )}

          {inputMode === "image" && (
            <div className="flex-1 flex gap-2">
              <Button
                variant="outline"
                onClick={handleImageUpload}
                className="flex-1"
              >
                <Image className="h-4 w-4 mr-2" />
                Upload Image
              </Button>
              <Button variant="outline" size="icon">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;