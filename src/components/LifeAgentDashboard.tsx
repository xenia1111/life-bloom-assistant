import { useState } from "react";
import { Bot, Calendar, Heart, Target, Gamepad2, Moon, Droplet, User, Activity, Coffee, BookOpen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LifeAgentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // AI问候语模块
  const AIGreeting = () => (
    <Card className="relative overflow-hidden bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 ring-2 ring-primary/20">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  <Bot className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-accent-success rounded-full border-2 border-card animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                今天看起来不错！
              </h2>
              <p className="text-muted-foreground">
                起床比平时早了5分钟，精神状态很棒～
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-accent-warm/10 text-accent-warm border-accent-warm/20">
            AI助手
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  // 打卡模块
  const CheckInModule = () => {
    const checkInItems = [
      {
        icon: Heart,
        title: "今日心情",
        subtitle: "记录一下今天的感受",
        status: "pending",
        color: "text-red-400"
      },
      {
        icon: Coffee,
        title: "晨间咖啡",
        subtitle: "第一杯咖啡时间",
        status: "completed",
        color: "text-accent-warm"
      },
      {
        icon: Target,
        title: "今日目标",
        subtitle: "设定3个重要任务",
        status: "pending",
        color: "text-primary"
      }
    ];

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {checkInItems.map((item, index) => (
          <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-glass-subtle ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-card-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Badge 
                  variant={item.status === "completed" ? "default" : "secondary"}
                  className={item.status === "completed" ? "bg-accent-success/20 text-accent-success" : ""}
                >
                  {item.status === "completed" ? "已完成" : "待打卡"}
                </Badge>
                <Button 
                  size="sm" 
                  variant={item.status === "completed" ? "ghost" : "default"}
                  className="h-8 px-3 transition-smooth group-hover:shadow-glow"
                >
                  {item.status === "completed" ? "查看" : "打卡"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  // 应用分类模块
  const AppCategories = () => {
    const categories = [
      {
        title: "即点即用娱乐",
        icon: Gamepad2,
        color: "text-accent-warm",
        bgColor: "bg-accent-warm/10",
        apps: ["音乐", "视频", "游戏"]
      },
      {
        title: "减重专区",
        icon: Activity,
        color: "text-accent-success",
        bgColor: "bg-accent-success/10",
        apps: ["运动", "饮食", "体重"]
      },
      {
        title: "睡眠专区",
        icon: Moon,
        color: "text-primary",
        bgColor: "bg-primary/10",
        apps: ["睡眠", "冥想", "放松"]
      },
      {
        title: "控糖专区",
        icon: Droplet,
        color: "text-accent-warning",
        bgColor: "bg-accent-warning/10",
        apps: ["血糖", "饮食", "运动"]
      },
      {
        title: "学习成长",
        icon: BookOpen,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        apps: ["阅读", "课程", "笔记"]
      },
      {
        title: "健康监测",
        icon: Heart,
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        apps: ["心率", "血压", "体温"]
      },
      {
        title: "时间管理",
        icon: Calendar,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        apps: ["日程", "提醒", "计时"]
      },
      {
        title: "情绪管理",
        icon: Bot,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        apps: ["日记", "情绪", "分析"]
      },
      {
        title: "个人主页",
        icon: User,
        color: "text-muted-foreground",
        bgColor: "bg-muted/10",
        apps: ["设置", "权限", "个人信息"]
      }
    ];

    return (
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                <category.icon className={`h-6 w-6 ${category.color}`} />
              </div>
              <h3 className="font-medium text-card-foreground mb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-1 justify-center">
                {category.apps.map((app, appIndex) => (
                  <Badge key={appIndex} variant="secondary" className="text-xs">
                    {app}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  // 个人主页内容
  const ProfilePage = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-20 w-20 ring-4 ring-primary/20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                U
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">用户名</h2>
              <p className="text-muted-foreground">Life Agent 用户</p>
              <Badge className="mt-2 bg-accent-warm/20 text-accent-warm">高级会员</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-card-foreground">账户设置</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                个人信息
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                隐私设置
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                通知设置
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-card-foreground">权限管理</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                数据权限
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                应用权限
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                分享设置
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto p-6 space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-glass-subtle backdrop-blur-glass border border-glass-border">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              主页
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              娱乐
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              健康
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              我的
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8 mt-8">
            {/* AI问候语模块 */}
            <AIGreeting />
            
            {/* 打卡模块 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">今日待办</h2>
              <CheckInModule />
            </div>

            {/* 应用分类模块 */}
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">应用中心</h2>
              <AppCategories />
            </div>
          </TabsContent>

          <TabsContent value="entertainment" className="mt-8">
            <div className="text-center py-12">
              <Gamepad2 className="h-16 w-16 mx-auto mb-4 text-accent-warm" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">娱乐中心</h2>
              <p className="text-muted-foreground">即点即用的娱乐应用正在开发中</p>
            </div>
          </TabsContent>

          <TabsContent value="health" className="mt-8">
            <div className="text-center py-12">
              <Heart className="h-16 w-16 mx-auto mb-4 text-accent-success" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">健康中心</h2>
              <p className="text-muted-foreground">健康管理功能正在开发中</p>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-8">
            <ProfilePage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LifeAgentDashboard;