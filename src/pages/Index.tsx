import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: "crypto-rush",
    name: "Crypto Rush",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/a12d8425-60f7-4992-9def-114ce0739a2d.jpg",
    description: "Собирай криптомонеты и становись богаче с каждым уровнем!",
    fullDescription: "Захватывающая игра, где ты управляешь персонажем, собирающим криптомонеты. Каждый уровень становится сложнее, но и награды больше! Прокачивай своего героя, открывай новые возможности и становись криптомагнатом.",
    stats: {
      downloads: "2.5M",
      rating: 4.8,
      revenue: "$450K"
    },
    features: ["Более 50 уровней", "Система прокачки", "Мультиплеер режим"],
    color: "from-amber-400 to-yellow-600"
  },
  {
    id: "treasure-quest",
    name: "Treasure Quest",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/5de42b16-db68-4828-a08b-1c51b3b55ea7.jpg",
    description: "Открывай сундуки с сокровищами и накапливай богатства!",
    fullDescription: "Исследуй таинственные подземелья, находи легендарные сундуки и собирай невероятные сокровища. Каждый сундук — это новый сюрприз!",
    stats: {
      downloads: "1.8M",
      rating: 4.6,
      revenue: "$320K"
    },
    features: ["100+ типов сундуков", "Редкие артефакты", "Режим приключений"],
    color: "from-orange-400 to-red-600"
  },
  {
    id: "rocket-fortune",
    name: "Rocket Fortune",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/baa03557-d978-4f65-b40b-43c1298e5b9b.jpg",
    description: "Запускай ракету к финансовым высотам!",
    fullDescription: "Управляй космической ракетой, собирай бонусы и взлетай к новым финансовым вершинам. Чем выше летишь, тем больше зарабатываешь!",
    stats: {
      downloads: "3.2M",
      rating: 4.9,
      revenue: "$680K"
    },
    features: ["Физика полета", "Улучшения ракеты", "Ежедневные турниры"],
    color: "from-green-400 to-emerald-600"
  },
  {
    id: "diamond-empire",
    name: "Diamond Empire",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/a12d8425-60f7-4992-9def-114ce0739a2d.jpg",
    description: "Строй империю из алмазов и драгоценностей!",
    fullDescription: "Создай свою бизнес-империю, торгуй редкими алмазами, расширяй производство и становись самым богатым магнатом в мире драгоценностей.",
    stats: {
      downloads: "2.1M",
      rating: 4.7,
      revenue: "$520K"
    },
    features: ["Стратегия развития", "Торговая система", "Кланы и альянсы"],
    color: "from-purple-400 to-pink-600"
  },
  {
    id: "gold-miner",
    name: "Gold Miner",
    logo: "https://cdn.poehali.dev/projects/a5109423-fbb4-42a0-b973-502a6e1cbd79/files/5de42b16-db68-4828-a08b-1c51b3b55ea7.jpg",
    description: "Добывай золото и становись магнатом!",
    fullDescription: "Классическая игра в новом обличии! Управляй краном, добывай золото, алмазы и другие ценности. Проходи уровни и становись легендарным золотоискателем.",
    stats: {
      downloads: "4.1M",
      rating: 4.8,
      revenue: "$890K"
    },
    features: ["Классический геймплей", "Бонусные уровни", "Система достижений"],
    color: "from-yellow-400 to-amber-600"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
      
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-amber-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-24 h-24 md:w-40 md:h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-green-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container mx-auto px-4 py-6 md:py-12">
        <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4 sticky top-0 bg-gradient-to-b from-[#1A1F2C] to-transparent pb-6 z-20">
          <div className="inline-flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center animate-glow">
              <Icon name="Trophy" className="text-[#1A1F2C]" size={24} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-[length:200%_auto] animate-shine px-4">
            Мои Игровые Проекты
          </h1>
          
          <p className="text-base md:text-xl text-amber-200/80 max-w-2xl mx-auto px-4">
            Портфолио успешных игр о богатстве и криптовалютах
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-8 pt-4 md:pt-6 flex-wrap px-4">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">13.7M+</div>
              <div className="text-xs md:text-sm text-amber-200/60">Скачиваний</div>
            </div>
            <div className="w-px h-10 md:h-12 bg-amber-400/30" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">$2.86M</div>
              <div className="text-xs md:text-sm text-amber-200/60">Выручка</div>
            </div>
            <div className="w-px h-10 md:h-12 bg-amber-400/30" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">4.76</div>
              <div className="text-xs md:text-sm text-amber-200/60">Рейтинг</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className={`bg-gradient-to-br ${project.color} p-1 shadow-2xl border-none hover:scale-[1.02] transition-transform duration-300`}>
                <div className="bg-[#221F26] rounded-[calc(1rem-4px)] p-4 md:p-8">
                  <div className="flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-amber-400/50 shadow-2xl animate-glow flex-shrink-0">
                        <img 
                          src={project.logo} 
                          alt={project.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 space-y-4 md:space-y-6 w-full">
                        <div className="text-center md:text-left">
                          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{project.name}</h2>
                          <p className="text-base md:text-lg text-amber-200/80">{project.description}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                          <Card className="bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30 p-2 md:p-4">
                            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                              <Icon name="Download" className="text-amber-400" size={20} />
                              <div className="text-center md:text-left">
                                <div className="text-lg md:text-2xl font-bold text-amber-400">{project.stats.downloads}</div>
                                <div className="text-[10px] md:text-xs text-amber-200/60">Скачиваний</div>
                              </div>
                            </div>
                          </Card>

                          <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30 p-2 md:p-4">
                            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                              <Icon name="Star" className="text-yellow-400" size={20} />
                              <div className="text-center md:text-left">
                                <div className="text-lg md:text-2xl font-bold text-yellow-400">{project.stats.rating}</div>
                                <div className="text-[10px] md:text-xs text-amber-200/60">Рейтинг</div>
                              </div>
                            </div>
                          </Card>

                          <Card className="bg-gradient-to-br from-green-500/10 to-transparent border-green-500/30 p-2 md:p-4">
                            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
                              <Icon name="DollarSign" className="text-green-400" size={20} />
                              <div className="text-center md:text-left">
                                <div className="text-lg md:text-2xl font-bold text-green-400">{project.stats.revenue}</div>
                                <div className="text-[10px] md:text-xs text-amber-200/60">Выручка</div>
                              </div>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-[#1A1F2C]/50 rounded-xl p-4 md:p-6 border border-amber-500/20">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">Описание</h3>
                        <p className="text-sm md:text-base text-amber-200/80 leading-relaxed">{project.fullDescription}</p>
                      </div>

                      <div className="bg-[#1A1F2C]/50 rounded-xl p-4 md:p-6 border border-amber-500/20">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-3">Ключевые особенности</h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-sm md:text-base text-amber-200/80">
                              <Icon name="CheckCircle2" className="text-green-400 flex-shrink-0" size={18} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 pt-2">
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
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12 flex items-center justify-center gap-2 text-amber-200/60 px-4">
          <Icon name="Sparkles" size={18} className="text-amber-400 animate-pulse" />
          <p className="text-xs md:text-sm">Создано с помощью poehali.dev</p>
          <Icon name="Sparkles" size={18} className="text-amber-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
