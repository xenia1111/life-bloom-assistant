import { useState } from "react";
import { Bot, Calendar, Heart, Target, Gamepad2, Moon, Droplet, User, Activity, Coffee, BookOpen, Grid3X3, Palette, Hash, Puzzle, Zap, FlaskConical, Baby, Star, Sparkles, Pin, Shield, Camera, CreditCard, MapPin, Scale, Users, Settings, Smile, Book, Repeat, Brain, TrendingUp, MessageCircle, Brain as BrainIcon, GraduationCap, Clock, Bell, CheckSquare, Timer, PenTool, Thermometer, Dumbbell, Apple, Search, ChefHat, Utensils, CloudRain, AlertTriangle, Wallet, RotateCcw, CalendarCheck, HelpCircle, Navigation, Car, Gift, Home, MapIcon, Key, Mail, Leaf } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LifeAgentDashboard = () => {
  const [activeTab, setActiveTab] = useState("balanced");
  const [todoTasks, setTodoTasks] = useState([
    {
      icon: Target,
      title: "11 AM to Trader Joe's",
      status: "completed",
      color: "text-primary"
    },
    {
      icon: Coffee,
      title: "3 PM Group meeting at Devoción",
      status: "completed", 
      color: "text-accent-warm"
    },
    {
      icon: Heart,
      title: "8 PM Jessica's breakup party",
      status: "pending",
      color: "text-red-400"
    }
  ]);
  
  const [healthTasks, setHealthTasks] = useState([
    {
      icon: Droplet,
      title: "Swim 2000 meters",
      status: "completed",
      color: "text-blue-400"
    },
    {
      icon: Coffee,
      title: "Drink 8 cups of water",
      status: "pending",
      color: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "1 hour Crossfit",
      status: "pending",
      color: "text-purple-400"
    }
  ]);

  const toggleTaskStatus = (taskIndex: number, isHealthTask: boolean) => {
    if (isHealthTask) {
      setHealthTasks(prev => prev.map((task, index) => 
        index === taskIndex 
          ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
          : task
      ));
    } else {
      setTodoTasks(prev => prev.map((task, index) => 
        index === taskIndex 
          ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
          : task
      ));
    }
  };

  // AI问候语模块
  const AIGreeting = () => (
    <Card className="relative overflow-hidden bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-16 w-16 ring-2 ring-primary/20">
                <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  <Bot className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-accent-success rounded-full border-2 border-card animate-pulse" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                <span className="text-accent-success">Winnie</span>, looking great today!
              </h2>
              <p className="text-muted-foreground">
                Woke up 5 minutes earlier than usual, starting another energetic day!
              </p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-accent-warm/10 text-accent-warm border-accent-warm/20">
            Your Monster
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  // 打卡模块
  const CheckInModule = () => {
    const todoItems = [
      {
        icon: Target,
        title: "11 AM to Trader Joe's",
        subtitle: "Shopping list ready",
        status: "completed",
        color: "text-primary"
      },
      {
        icon: Coffee,
        title: "3 PM Group meeting at Devoción",
        subtitle: "Project discussion",
        status: "completed", 
        color: "text-accent-warm"
      },
      {
        icon: Activity,
        title: "5 PM CrossFit",
        subtitle: "Fitness training",
        status: "pending",
        color: "text-accent-success"
      },
      {
        icon: Heart,
        title: "8 PM Jessica's breakup party",
        subtitle: "Support friend",
        status: "pending",
        color: "text-red-400"
      }
    ];

    const healthItems = [
      {
        icon: Droplet,
        title: "Swim 2000 meters",
        subtitle: "Cardio exercise",
        status: "completed",
        color: "text-blue-400"
      },
      {
        icon: Coffee,
        title: "Drink 8 cups of water",
        subtitle: "Stay hydrated",
        status: "pending",
        color: "text-cyan-400"
      },
      {
        icon: Zap,
        title: "1 hour Crossfit",
        subtitle: "Weight lifting",
        status: "pending",
        color: "text-purple-400"
      }
    ];

    const renderItems = (items) => (
      <div className="space-y-3">
        {items.map((item, index) => (
          <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
            <CardContent className="p-3 flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg bg-glass-subtle ${item.color} flex items-center justify-center flex-shrink-0`}>
                <item.icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-card-foreground text-sm leading-tight">{item.title}</h3>
              </div>
              <Badge 
                variant={item.status === "completed" ? "default" : "secondary"}
                className={`text-xs ${item.status === "completed" ? "bg-accent-success/20 text-accent-success" : ""}`}
              >
                {item.status === "completed" ? "Done" : "TBD"}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Today's TODO</h3>
          {renderItems(todoItems)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Today's Health</h3>
          {renderItems(healthItems)}
        </div>
      </div>
    );
  };

  // 应用分类模块
  const AppCategories = () => {
    const categories = [
      {
        title: "Calorie Manager",
        icon: Zap,
        color: "text-accent-warm",
        bgColor: "bg-accent-warm/10",
        apps: ["Calories", "Nutrition", "Tracking"]
      },
      {
        title: "Weight Stabilizer",
        icon: Activity,
        color: "text-accent-success",
        bgColor: "bg-accent-success/10",
        apps: ["Weight", "Goals", "Trends"]
      },
      {
        title: "Sleep Tracker",
        icon: Moon,
        color: "text-primary",
        bgColor: "bg-primary/10",
        apps: ["Sleep", "Quality", "Analysis"]
      },
      {
        title: "Glucose Master",
        icon: Droplet,
        color: "text-accent-warning",
        bgColor: "bg-accent-warning/10",
        apps: ["Blood Sugar", "Monitor", "Alerts"]
      },
      {
        title: "Time Management",
        icon: Calendar,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        apps: ["Planning", "Focus", "Efficiency"]
      },
      {
        title: "Fortune Teller",
        icon: Star,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        apps: ["Fortune", "Tarot", "Astrology"]
      },
      {
        title: "Widget Expert",
        icon: Grid3X3,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        apps: ["Widgets", "Desktop", "Custom"]
      },
      {
        title: "File Converter",
        icon: Target,
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        apps: ["Format", "Convert", "Tools"]
      },
      {
        title: "Study Buddy",
        icon: BookOpen,
        color: "text-red-400",
        bgColor: "bg-red-400/10",
        apps: ["Learning", "Memory", "Methods"]
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
              <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
              <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                U
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Winnie</h2>
              <p className="text-muted-foreground">Monster AI has been with you for 125 days</p>
              <Badge className="mt-2 bg-accent-warm/20 text-accent-warm">Premium Member</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-card-foreground">Account Settings</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Personal Info
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Privacy Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Notification Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-card-foreground">Permission Management</h3>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Data Permissions
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                App Permissions
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Sharing Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-background">
      <div className="container mx-auto px-4 py-4 max-w-md space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-glass-subtle backdrop-blur-glass border border-glass-border h-12">
            <TabsTrigger value="balanced" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              <div className="flex flex-col items-center">
                <Shield className="h-4 w-4 mb-1" />
                <span>Balanced</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              <div className="flex flex-col items-center">
                <Heart className="h-4 w-4 mb-1" />
                <span>Health</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="learning" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              <div className="flex flex-col items-center">
                <Brain className="h-4 w-4 mb-1" />
                <span>Learning</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="finance" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              <div className="flex flex-col items-center">
                <Star className="h-4 w-4 mb-1" />
                <span>Finance</span>
              </div>
            </TabsTrigger>
            <TabsTrigger value="emotion" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              <div className="flex flex-col items-center">
                <Smile className="h-4 w-4 mb-1" />
                <span>Emotion</span>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="balanced" className="space-y-6 mt-6">
            {/* 综合平衡模块 */}
            <div className="text-center mb-6">
              <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h2 className="text-xl font-semibold text-foreground mb-2">生活平衡中心</h2>
              <p className="text-sm text-muted-foreground">日常平衡，高效生活</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "待办清单",
                  icon: CheckSquare,
                  color: "text-primary",
                  bgColor: "bg-primary/10",
                  description: "任务管理",
                  features: ["智能排序", "优先级"]
                },
                {
                  title: "番茄钟",
                  icon: Timer,
                  color: "text-accent-warm",
                  bgColor: "bg-accent-warm/10",
                  description: "专注工作",
                  features: ["25分钟", "休息提醒"]
                },
                {
                  title: "情绪日记",
                  icon: PenTool,
                  color: "text-purple-400",
                  bgColor: "bg-purple-400/10",
                  description: "情绪记录",
                  features: ["心情追踪", "分析报告"]
                },
                {
                  title: "路线导航",
                  icon: Navigation,
                  color: "text-blue-400",
                  bgColor: "bg-blue-400/10",
                  description: "智能导航",
                  features: ["实时路况", "最优路线"]
                },
                {
                  title: "出行助手",
                  icon: Car,
                  color: "text-green-400",
                  bgColor: "bg-green-400/10",
                  description: "出行规划",
                  features: ["交通方式", "时间估算"]
                },
                {
                  title: "朋友生日",
                  icon: Gift,
                  color: "text-pink-400",
                  bgColor: "bg-pink-400/10",
                  description: "生日提醒",
                  features: ["重要日期", "礼物建议"]
                },
                {
                  title: "纪念日提醒",
                  icon: CalendarCheck,
                  color: "text-red-400",
                  bgColor: "bg-red-400/10",
                  description: "重要纪念",
                  features: ["节日提醒", "倒计时"]
                },
                {
                  title: "家庭定位",
                  icon: Home,
                  color: "text-cyan-400",
                  bgColor: "bg-cyan-400/10",
                  description: "位置共享",
                  features: ["实时位置", "安全区域"]
                },
                {
                  title: "密码管理",
                  icon: Key,
                  color: "text-indigo-400",
                  bgColor: "bg-indigo-400/10",
                  description: "安全存储",
                  features: ["加密保护", "自动填充"]
                },
                {
                  title: "邀请函",
                  icon: Mail,
                  color: "text-teal-400",
                  bgColor: "bg-teal-400/10",
                  description: "活动邀请",
                  features: ["精美模板", "一键发送"]
                },
                {
                  title: "植物识别",
                  icon: Leaf,
                  color: "text-green-500",
                  bgColor: "bg-green-500/10",
                  description: "AI识别",
                  features: ["拍照识别", "植物百科"]
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs px-1 py-0.5">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="health" className="space-y-6 mt-6">
            {/* 健康管理模块 */}
            <div className="text-center mb-6">
              <Heart className="h-10 w-10 mx-auto mb-3 text-red-400" />
              <h2 className="text-xl font-semibold text-foreground mb-2">健康管理中心</h2>
              <p className="text-sm text-muted-foreground">全方位健康守护</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "睡眠检测",
                  icon: Moon,
                  color: "text-purple-400",
                  bgColor: "bg-purple-400/10",
                  description: "睡眠质量",
                  features: ["深度分析", "改善建议"]
                },
                {
                  title: "运动追踪",
                  icon: Activity,
                  color: "text-green-400",
                  bgColor: "bg-green-400/10",
                  description: "运动记录",
                  features: ["步数统计", "卡路里"]
                },
                {
                  title: "健身建议",
                  icon: Dumbbell,
                  color: "text-blue-400",
                  bgColor: "bg-blue-400/10",
                  description: "个性化训练",
                  features: ["定制计划", "动作指导"]
                },
                {
                  title: "饮食记录",
                  icon: Apple,
                  color: "text-red-400",
                  bgColor: "bg-red-400/10",
                  description: "营养管理",
                  features: ["卡路里", "营养分析"]
                },
                {
                  title: "食物识别",
                  icon: Search,
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-400/10",
                  description: "AI识别",
                  features: ["拍照识别", "营养成分"]
                },
                {
                  title: "菜谱推荐",
                  icon: ChefHat,
                  color: "text-orange-400",
                  bgColor: "bg-orange-400/10",
                  description: "健康菜谱",
                  features: ["个性推荐", "营养搭配"]
                },
                {
                  title: "智能饮食计划",
                  icon: Utensils,
                  color: "text-green-500",
                  bgColor: "bg-green-500/10",
                  description: "饮食规划",
                  features: ["目标导向", "科学搭配"]
                },
                {
                  title: "饮水提醒",
                  icon: Droplet,
                  color: "text-cyan-400",
                  bgColor: "bg-cyan-400/10",
                  description: "水分补充",
                  features: ["定时提醒", "记录统计"]
                },
                {
                  title: "健康预警",
                  icon: AlertTriangle,
                  color: "text-red-500",
                  bgColor: "bg-red-500/10",
                  description: "风险监测",
                  features: ["异常提醒", "专业建议"]
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs px-1 py-0.5">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6 mt-6">
            {/* 学习助手模块 */}
            <div className="text-center mb-6">
              <Brain className="h-10 w-10 mx-auto mb-3 text-blue-400" />
              <h2 className="text-xl font-semibold text-foreground mb-2">智能学习中心</h2>
              <p className="text-sm text-muted-foreground">AI驱动的个性化学习</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "翻译助手",
                  icon: MessageCircle,
                  color: "text-blue-400",
                  bgColor: "bg-blue-400/10",
                  description: "多语言翻译",
                  features: ["实时翻译", "语音识别"]
                },
                {
                  title: "知识关联",
                  icon: BrainIcon,
                  color: "text-purple-400",
                  bgColor: "bg-purple-400/10",
                  description: "知识图谱",
                  features: ["关联分析", "概念图"]
                },
                {
                  title: "学习打卡",
                  icon: Target,
                  color: "text-green-400",
                  bgColor: "bg-green-400/10",
                  description: "学习记录",
                  features: ["进度跟踪", "成就系统"]
                },
                {
                  title: "AI家教",
                  icon: GraduationCap,
                  color: "text-red-400",
                  bgColor: "bg-red-400/10",
                  description: "个性化辅导",
                  features: ["答疑解惑", "学习指导"]
                },
                {
                  title: "学习规划",
                  icon: Calendar,
                  color: "text-orange-400",
                  bgColor: "bg-orange-400/10",
                  description: "计划制定",
                  features: ["目标设定", "时间安排"]
                },
                {
                  title: "便捷提醒",
                  icon: Bell,
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-400/10",
                  description: "学习提醒",
                  features: ["定时提醒", "任务通知"]
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs px-1 py-0.5">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="finance" className="space-y-6 mt-6">
            {/* 财务管理模块 */}
            <div className="text-center mb-6">
              <Star className="h-10 w-10 mx-auto mb-3 text-accent-warm" />
              <h2 className="text-xl font-semibold text-foreground mb-2">财务管理中心</h2>
              <p className="text-sm text-muted-foreground">智能理财，财富增长</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "预算管理",
                  icon: Wallet,
                  color: "text-green-400",
                  bgColor: "bg-green-400/10",
                  description: "收支管理",
                  features: ["预算规划", "支出分析"]
                },
                {
                  title: "订阅追踪",
                  icon: RotateCcw,
                  color: "text-blue-400",
                  bgColor: "bg-blue-400/10",
                  description: "订阅管理",
                  features: ["自动追踪", "续费提醒"]
                },
                {
                  title: "消费提醒",
                  icon: Bell,
                  color: "text-yellow-400",
                  bgColor: "bg-yellow-400/10",
                  description: "支出提醒",
                  features: ["智能提醒", "消费分析"]
                },
                {
                  title: "代办执行",
                  icon: HelpCircle,
                  color: "text-purple-400",
                  bgColor: "bg-purple-400/10",
                  description: "任务代办",
                  features: ["自动执行", "进度跟踪"]
                },
                {
                  title: "执行助手",
                  icon: Target,
                  color: "text-red-400",
                  bgColor: "bg-red-400/10",
                  description: "目标执行",
                  features: ["计划执行", "结果反馈"]
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs px-1 py-0.5">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="emotion" className="space-y-6 mt-6">
            {/* 情绪管理模块 */}
            <div className="text-center mb-6">
              <Smile className="h-10 w-10 mx-auto mb-3 text-pink-400" />
              <h2 className="text-xl font-semibold text-foreground mb-2">情绪健康中心</h2>
              <p className="text-sm text-muted-foreground">情绪管理，心理健康</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "情绪检测",
                  icon: Thermometer,
                  color: "text-red-400",
                  bgColor: "bg-red-400/10",
                  description: "情绪识别",
                  features: ["AI分析", "情绪追踪"]
                },
                {
                  title: "心理陪伴",
                  icon: Heart,
                  color: "text-pink-400",
                  bgColor: "bg-pink-400/10",
                  description: "情感支持",
                  features: ["倾听陪伴", "情感疏导"]
                },
                {
                  title: "冥想",
                  icon: Brain,
                  color: "text-purple-400",
                  bgColor: "bg-purple-400/10",
                  description: "正念冥想",
                  features: ["引导冥想", "放松训练"]
                },
                {
                  title: "呼吸训练",
                  icon: CloudRain,
                  color: "text-blue-400",
                  bgColor: "bg-blue-400/10",
                  description: "呼吸调节",
                  features: ["呼吸指导", "压力缓解"]
                }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg ${item.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-card-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs px-1 py-0.5">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="health" className="mt-6">
            <div className="space-y-4">
              {/* Global Game Ranking */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Global Game Ranking</h3>
                <div className="space-y-2">
                  {[
                    {
                      name: "Sudoku",
                      icon: Grid3X3,
                      highScore: "2,450",
                      globalRank: "#1,234",
                      color: "text-blue-400",
                      bgColor: "bg-blue-400/10"
                    },
                    {
                      name: "Wordle",
                      icon: Hash,
                      highScore: "48 Streak",
                      globalRank: "#567",
                      color: "text-green-400",
                      bgColor: "bg-green-400/10"
                    },
                    {
                      name: "Block Puzzle",
                      icon: Puzzle,
                      highScore: "18,920",
                      globalRank: "#2,891",
                      color: "text-red-400",
                      bgColor: "bg-red-400/10"
                    }
                  ].map((game, index) => (
                    <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${game.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <game.icon className={`h-5 w-5 ${game.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-card-foreground text-sm">{game.name}</h4>
                            <p className="text-xs text-muted-foreground">Best: {game.highScore}</p>
                          </div>
                          <Badge className="bg-accent-warm/20 text-accent-warm text-xs">
                            {game.globalRank}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Global Health Ranking */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Global Health Ranking</h3>
                <div className="space-y-2">
                  {[
                    {
                      title: "Daily Steps",
                      value: "12,450",
                      unit: "steps",
                      icon: Activity,
                      rank: "#2,567",
                      color: "text-accent-success",
                      bgColor: "bg-accent-success/10"
                    },
                    {
                      title: "Calories Burned",
                      value: "2,840",
                      unit: "kcal",
                      icon: Zap,
                      rank: "#1,890",
                      color: "text-accent-warm",
                      bgColor: "bg-accent-warm/10"
                    },
                    {
                      title: "Sleep Duration",
                      value: "7.5",
                      unit: "hours",
                      icon: Moon,
                      rank: "#3,445",
                      color: "text-primary",
                      bgColor: "bg-primary/10"
                    }
                  ].map((metric, index) => (
                    <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                      <CardContent className="p-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <metric.icon className={`h-5 w-5 ${metric.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-card-foreground text-sm">{metric.title}</h4>
                            <p className="text-xs text-muted-foreground">{metric.value} {metric.unit}</p>
                          </div>
                          <Badge className="bg-accent-success/20 text-accent-success text-xs">
                            {metric.rank}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Global Focus Ranking */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Global Focus Ranking</h3>
                <div className="space-y-3">
                  <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Target className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-card-foreground text-sm">Total Focus Time</h4>
                          <p className="text-xs text-muted-foreground">245.5 hours</p>
                        </div>
                        <Badge className="bg-primary/20 text-primary text-xs">
                          #856
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent-warm/10 flex items-center justify-center flex-shrink-0">
                          <Calendar className="h-5 w-5 text-accent-warm" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-card-foreground text-sm">Current Session</h4>
                          <p className="text-xs text-muted-foreground">2.3 hours</p>
                        </div>
                        <Badge className="bg-accent-warm/20 text-accent-warm text-xs">
                          #1,234
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-2">
                        <Star className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold text-card-foreground text-sm">Focus Master</h4>
                      <p className="text-xs text-muted-foreground mb-2">Achievement Unlocked</p>
                      <Badge className="bg-gradient-primary text-primary-foreground text-xs">
                        Top 5% Globally
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-6">
            <div className="space-y-4">
              <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16 ring-4 ring-primary/20 flex-shrink-0">
                      <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl">
                        W
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold text-foreground">Winnie</h2>
                      <p className="text-sm text-muted-foreground">Monster AI has been with you for 125 days</p>
                      <Badge className="mt-2 bg-accent-warm/20 text-accent-warm text-xs">Premium Member</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-card-foreground">Account Settings</h3>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start h-10 text-sm">
                      Personal Info
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10 text-sm">
                      Privacy Settings
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10 text-sm">
                      Notification Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-card-foreground">Permission Management</h3>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start h-10 text-sm">
                      Data Permissions
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10 text-sm">
                      App Permissions
                    </Button>
                    <Button variant="ghost" className="w-full justify-start h-10 text-sm">
                      Sharing Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LifeAgentDashboard;