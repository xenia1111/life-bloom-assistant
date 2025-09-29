import { useState, useRef } from "react";
import { ArrowLeft, Send, Mic, MicOff, Camera, Image, MoreHorizontal, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Chat = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "记录饮食时多说些细节，让推荐更准确哦！",
      timestamp: new Date().toLocaleTimeString()
    },
    {
      id: 2,
      type: "user", 
      content: "我吃了一碗豆腐汤面",
      timestamp: "13:41"
    },
    {
      id: 3,
      type: "ai",
      content: "主人今天的第一餐是暖暖的豆腐汤面呀！(◐∀◐) 面条提供碳水能量，豆腐补充优质蛋白，特别适合减脂期呢～不过要注意汤底盐分控制哦，咸香口味可以加点木耳或青菜平衡营养！需要帮您估算这碗面的具体热量吗 □",
      timestamp: "13:41"
    },
    {
      id: 4,
      type: "user",
      content: "这碗豆腐汤面大概多少卡路里",
      timestamp: "13:41"
    },
    {
      id: 5,
      type: "ai", 
      content: "根据常见做法，一碗豆腐汤面大约400-500大卡呢！你之前记录的500卡很准确呢～减脂期可以搭配更多蔬菜增加饱腹感(ó﹏ò)↑♢",
      timestamp: "13:41"
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
        content: "我明白了你的消息。还有什么其他需要帮助的吗？",
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
            <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
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
            <div className={`max-w-[80%] ${msg.type === "user" ? "" : "flex gap-3"}`}>
              {msg.type === "ai" && (
                <Avatar className="h-8 w-8 mt-2">
                  <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
                  <AvatarFallback className="bg-muted text-xs">AI</AvatarFallback>
                </Avatar>
              )}
              <div className="flex flex-col">
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    msg.type === "user"
                      ? "bg-foreground text-background rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-1 px-2">
                  {msg.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="p-4 bg-background border-t border-border">
        <div className="flex gap-2 mb-4 overflow-x-auto">
          <Button variant="outline" className="flex-shrink-0 rounded-full">
            📷 图片识别
          </Button>
          <Button variant="outline" className="flex-shrink-0 rounded-full">
            📊 营养报告
          </Button>
          <Button variant="outline" className="flex-shrink-0 rounded-full">
            📋 推荐食谱
          </Button>
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
              placeholder="输入消息..."
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