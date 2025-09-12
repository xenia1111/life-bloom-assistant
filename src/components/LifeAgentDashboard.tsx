import { useState } from "react";
import { Bot, Calendar, Heart, Target, Gamepad2, Moon, Droplet, User, Activity, Coffee, BookOpen, Grid3X3, Palette, Hash, Puzzle, Zap, FlaskConical, Baby, Star, Sparkles, Pin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LifeAgentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
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
        title: "1 hour strength training",
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
          <TabsList className="grid w-full grid-cols-4 bg-glass-subtle backdrop-blur-glass border border-glass-border h-12">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              Home
            </TabsTrigger>
            <TabsTrigger value="entertainment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              Games
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              Ranks
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs px-2">
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 mt-6">
            {/* AI问候语模块 */}
            <Card className="relative overflow-hidden bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src="/lovable-uploads/df6a1543-d8f4-49ae-8e81-a4ecb8be5836.png" />
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        <Bot className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-accent-success rounded-full border-2 border-card animate-pulse" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-semibold text-foreground mb-1">
                      <span className="text-accent-success">Winnie</span>, looking great today!
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Accidentally woke up 5 mins early, but ngl I feel unstoppable rn 😎☀️
                    </p>
                  </div>
                  <Badge variant="secondary" className="bg-accent-warm/10 text-accent-warm border-accent-warm/20 text-xs">
                    Your Monster
                  </Badge>
                </div>
              </CardContent>
            </Card>
            
            {/* 打卡模块 */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Today's Tasks</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-medium text-foreground mb-3">TODO</h3>
                  <div className="space-y-2">
                    {todoTasks.map((item, index) => (
                      <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-glass-subtle ${item.color} flex items-center justify-center flex-shrink-0`}>
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-card-foreground text-sm truncate">{item.title}</h3>
                          </div>
                          <Badge 
                            variant={item.status === "completed" ? "default" : "secondary"}
                            className={`text-xs cursor-pointer transition-colors hover:opacity-80 ${item.status === "completed" ? "bg-accent-success/20 text-accent-success" : "hover:bg-primary/20 hover:text-primary"}`}
                            onClick={() => toggleTaskStatus(index, false)}
                          >
                            {item.status === "completed" ? "Done" : "TBD"}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-base font-medium text-foreground mb-3">Health</h3>
                  <div className="space-y-2">
                    {healthTasks.map((item, index) => (
                      <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass">
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-glass-subtle ${item.color} flex items-center justify-center flex-shrink-0`}>
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-card-foreground text-sm truncate">{item.title}</h3>
                          </div>
                          <Badge 
                            variant={item.status === "completed" ? "default" : "secondary"}
                            className={`text-xs cursor-pointer transition-colors hover:opacity-80 ${item.status === "completed" ? "bg-accent-success/20 text-accent-success" : "hover:bg-primary/20 hover:text-primary"}`}
                            onClick={() => toggleTaskStatus(index, true)}
                          >
                            {item.status === "completed" ? "Done" : "TBD"}
                          </Badge>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 应用分类模块 */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">App Center</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: "Calorie Manager",
                    icon: Zap,
                    color: "text-accent-warm",
                    bgColor: "bg-accent-warm/10",
                    apps: ["Calories", "Nutrition"]
                  },
                  {
                    title: "Weight Stabilizer",
                    icon: Activity,
                    color: "text-accent-success",
                    bgColor: "bg-accent-success/10",
                    apps: ["Weight", "Goals"]
                  },
                  {
                    title: "Sleep Tracker",
                    icon: Moon,
                    color: "text-primary",
                    bgColor: "bg-primary/10",
                    apps: ["Sleep", "Quality"]
                  },
                  {
                    title: "Glucose Master",
                    icon: Droplet,
                    color: "text-accent-warning",
                    bgColor: "bg-accent-warning/10",
                    apps: ["Blood Sugar", "Monitor"]
                  },
                  {
                    title: "Time Management",
                    icon: Calendar,
                    color: "text-blue-400",
                    bgColor: "bg-blue-400/10",
                    apps: ["Planning", "Focus"]
                  },
                  {
                    title: "Fortune Teller",
                    icon: Star,
                    color: "text-purple-400",
                    bgColor: "bg-purple-400/10",
                    apps: ["Fortune", "Tarot"]
                  }
                ].map((category, index) => (
                  <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-3 text-center">
                      <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                        <category.icon className={`h-5 w-5 ${category.color}`} />
                      </div>
                      <h3 className="font-medium text-card-foreground mb-2 text-xs leading-tight">{category.title}</h3>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {category.apps.map((app, appIndex) => (
                          <Badge key={appIndex} variant="secondary" className="text-xs px-1 py-0.5">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="entertainment" className="mt-6">
            <div className="space-y-4">
              <div className="text-center mb-6">
                <Gamepad2 className="h-10 w-10 mx-auto mb-3 text-accent-warm" />
                <h2 className="text-xl font-semibold text-foreground mb-2">Entertainment Center</h2>
                <p className="text-sm text-muted-foreground">Curated casual games to relax anytime</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Sudoku",
                    icon: Grid3X3,
                    description: "Classic number logic puzzle game",
                    players: "2.3k",
                    color: "text-blue-400",
                    bgColor: "bg-blue-400/10"
                  },
                  {
                    name: "Color Switch",
                    icon: Palette,
                    description: "Color reaction challenge game",
                    players: "1.8k",
                    color: "text-purple-400",
                    bgColor: "bg-purple-400/10"
                  },
                  {
                    name: "Wordle",
                    icon: Hash,
                    description: "Daily word guessing game",
                    players: "5.2k",
                    color: "text-green-400",
                    bgColor: "bg-green-400/10"
                  },
                  {
                    name: "Crossword",
                    icon: BookOpen,
                    description: "Classic crossword puzzle challenge",
                    players: "1.5k",
                    color: "text-yellow-400",
                    bgColor: "bg-yellow-400/10"
                  },
                  {
                    name: "Block Puzzle",
                    icon: Puzzle,
                    description: "Block puzzle elimination game",
                    players: "3.1k",
                    color: "text-red-400",
                    bgColor: "bg-red-400/10"
                  },
                  {
                    name: "Water Sort",
                    icon: FlaskConical,
                    description: "Color water sorting puzzle",
                    players: "2.7k",
                    color: "text-cyan-400",
                    bgColor: "bg-cyan-400/10"
                  },
                  {
                    name: "Daycare Tycoon",
                    icon: Baby,
                    description: "Daycare business simulation game",
                    players: "956",
                    color: "text-pink-400",
                    bgColor: "bg-pink-400/10"
                  },
                  {
                    name: "Sheep a Sheep",
                    icon: Star,
                    description: "Cute three-layer elimination challenge",
                    players: "4.5k",
                    color: "text-orange-400",
                    bgColor: "bg-orange-400/10"
                  },
                  {
                    name: "Match 3",
                    icon: Sparkles,
                    description: "Classic match-3 puzzle game",
                    players: "2.9k",
                    color: "text-indigo-400",
                    bgColor: "bg-indigo-400/10"
                  },
                  {
                    name: "Pull the Pin",
                    icon: Pin,
                    description: "Pin-pulling puzzle adventure",
                    players: "1.4k",
                    color: "text-teal-400",
                    bgColor: "bg-teal-400/10"
                  }
                ].map((game, index) => (
                  <Card key={index} className="bg-gradient-glass backdrop-blur-glass border-glass-border shadow-glass hover:shadow-glow transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-3 text-center">
                      <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${game.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <game.icon className={`h-5 w-5 ${game.color}`} />
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-1 text-xs leading-tight">{game.name}</h3>
                      <p className="text-xs text-muted-foreground mb-2 leading-relaxed line-clamp-2">{game.description}</p>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <div className="w-1.5 h-1.5 bg-accent-success rounded-full animate-pulse"></div>
                        <span className="text-xs text-accent-success font-medium">{game.players} online</span>
                      </div>
                      <Button size="sm" className="w-full h-7 text-xs transition-smooth group-hover:shadow-glow">
                        Start Game
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
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