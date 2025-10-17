import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: "crypto-rush",
    name: "Crypto Rush",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/a12d8425-60f7-4992-9def-114ce0739a2d.jpg",
    description: "Собирай криптомонеты и становись богаче с каждым уровнем!",
    stats: {
      downloads: "2.5M",
      rating: 4.8,
      revenue: "$450K"
    },
    color: "from-amber-400 to-yellow-600"
  },
  {
    id: "treasure-quest",
    name: "Treasure Quest",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/5de42b16-db68-4828-a08b-1c51b3b55ea7.jpg",
    description: "Открывай сундуки с сокровищами и накапливай богатства!",
    stats: {
      downloads: "1.8M",
      rating: 4.6,
      revenue: "$320K"
    },
    color: "from-orange-400 to-red-600"
  },
  {
    id: "rocket-fortune",
    name: "Rocket Fortune",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/baa03557-d978-4f65-b40b-43c1298e5b9b.jpg",
    description: "Запускай ракету к финансовым высотам!",
    stats: {
      downloads: "3.2M",
      rating: 4.9,
      revenue: "$680K"
    },
    color: "from-green-400 to-emerald-600"
  },
  {
    id: "diamond-empire",
    name: "Diamond Empire",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/a12d8425-60f7-4992-9def-114ce0739a2d.jpg",
    description: "Строй империю из алмазов и драгоценностей!",
    stats: {
      downloads: "2.1M",
      rating: 4.7,
      revenue: "$520K"
    },
    color: "from-purple-400 to-pink-600"
  },
  {
    id: "gold-miner",
    name: "Gold Miner",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/5de42b16-db68-4828-a08b-1c51b3b55ea7.jpg",
    description: "Добывай золото и становись магнатом!",
    stats: {
      downloads: "4.1M",
      rating: 4.8,
      revenue: "$890K"
    },
    color: "from-yellow-400 to-amber-600"
  }
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0].id);

  const currentProject = projects.find(p => p.id === selectedProject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center animate-glow">
              <Icon name="Trophy" className="text-[#1A1F2C]" size={28} />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-[length:200%_auto] animate-shine">
            Мои Игровые Проекты
          </h1>
          
          <p className="text-xl text-amber-200/80 max-w-2xl mx-auto">
            Портфолио успешных игр о богатстве и криптовалютах
          </p>

          <div className="flex items-center justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400">13.7M+</div>
              <div className="text-sm text-amber-200/60">Скачиваний</div>
            </div>
            <div className="w-px h-12 bg-amber-400/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">$2.86M</div>
              <div className="text-sm text-amber-200/60">Выручка</div>
            </div>
            <div className="w-px h-12 bg-amber-400/30" />
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">4.76</div>
              <div className="text-sm text-amber-200/60">Рейтинг</div>
            </div>
          </div>
        </div>

        <Tabs value={selectedProject} onValueChange={setSelectedProject} className="w-full max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-5 gap-2 bg-[#221F26]/50 backdrop-blur-sm p-2 mb-8 border border-amber-500/20">
            {projects.map((project) => (
              <TabsTrigger
                key={project.id}
                value={project.id}
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-gradient-to-br data-[state=active]:from-amber-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-lg">
                  <img 
                    src={project.logo} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-center">{project.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="mt-0">
              <Card className={`bg-gradient-to-br ${project.color} p-1 shadow-2xl border-none`}>
                <div className="bg-[#221F26] rounded-[calc(1rem-4px)] p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="w-48 h-48 rounded-3xl overflow-hidden border-4 border-amber-400/50 shadow-2xl animate-glow">
                      <img 
                        src={project.logo} 
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-6">
                      <div>
                        <h2 className="text-4xl font-bold text-amber-400 mb-2">{project.name}</h2>
                        <p className="text-lg text-amber-200/80">{project.description}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <Card className="bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30 p-4">
                          <div className="flex items-center gap-3">
                            <Icon name="Download" className="text-amber-400" size={24} />
                            <div>
                              <div className="text-2xl font-bold text-amber-400">{project.stats.downloads}</div>
                              <div className="text-xs text-amber-200/60">Скачиваний</div>
                            </div>
                          </div>
                        </Card>

                        <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30 p-4">
                          <div className="flex items-center gap-3">
                            <Icon name="Star" className="text-yellow-400" size={24} />
                            <div>
                              <div className="text-2xl font-bold text-yellow-400">{project.stats.rating}</div>
                              <div className="text-xs text-amber-200/60">Рейтинг</div>
                            </div>
                          </div>
                        </Card>

                        <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/30 p-4">
                          <div className="flex items-center gap-3">
                            <Icon name="DollarSign" className="text-green-400" size={24} />
                            <div>
                              <div className="text-2xl font-bold text-green-400">{project.stats.revenue}</div>
                              <div className="text-xs text-amber-200/60">Выручка</div>
                            </div>
                          </div>
                        </Card>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <button className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-[#1A1F2C] font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2">
                          <Icon name="Play" size={20} />
                          Играть
                        </button>
                        <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">
                          <Icon name="Info" size={20} />
                          Подробнее
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12 flex items-center justify-center gap-2 text-amber-200/60">
          <Icon name="Sparkles" size={20} className="text-amber-400 animate-pulse" />
          <p className="text-sm">Создано с помощью poehali.dev</p>
          <Icon name="Sparkles" size={20} className="text-amber-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
