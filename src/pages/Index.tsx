import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: "1win",
    name: "1WIN",
    logo: "https://cdn.poehali.dev/files/8f1f5619-65c6-401b-b9d7-a97c5ea0d1d9.png",
    description: "Ставки на спорт и казино с лучшими коэффициентами!",
    color: "from-blue-400 to-cyan-600"
  },
  {
    id: "catcasino",
    name: "CatCasino",
    logo: "https://cdn.poehali.dev/files/1bec4938-fcc6-42e4-8009-033e8d408290.jpg",
    description: "Онлайн казино с яркими слотами и большими выигрышами!",
    color: "from-purple-400 to-pink-600"
  },
  {
    id: "arkada",
    name: "Arcada",
    logo: "https://cdn.poehali.dev/files/2d434b68-add2-4147-972c-d47d76f83bf1.png",
    description: "Аркадные игры и слоты с классической атмосферой!",
    color: "from-cyan-400 to-blue-600"
  },
  {
    id: "daddy",
    name: "Daddy",
    logo: "https://cdn.poehali.dev/files/69490964-7943-4b6e-bac6-d56e19906d8f.png",
    description: "Казино с уникальными бонусами и турнирами!",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: "kometa",
    name: "Kometa",
    logo: "https://cdn.poehali.dev/files/d4ca76cf-69d8-49b0-d97a-ccf96de73c0b.png",
    description: "Космическое казино с невероятными призами!",
    color: "from-indigo-400 to-sky-500"
  },
  {
    id: "gama",
    name: "Gama",
    logo: "https://cdn.poehali.dev/files/dfa09972-aa26-494e-b0e2-4cb38031c9ed.png",
    description: "Разнообразие игр с яркими эмоциями и призами!",
    color: "from-orange-400 to-red-500"
  },
  {
    id: "kent",
    name: "Kent",
    logo: "https://cdn.poehali.dev/files/e9af4599-e7af-46cb-b2d5-d51619c23c9e.png",
    description: "Казино с королевскими бонусами и акциями!",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: "r7",
    name: "R7",
    logo: "https://cdn.poehali.dev/files/8b63957a-747a-4053-82bf-2ed0b59b7245.png",
    description: "Современное казино с быстрыми выплатами!",
    color: "from-yellow-400 to-amber-500"
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
            Игровые проекты
          </h1>
          <p className="text-lg md:text-xl text-amber-200/80 px-4">
            Постоянный доступ ко всем платформам!
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className={`bg-gradient-to-br ${project.color} p-1 shadow-2xl border-none hover:scale-[1.02] transition-transform duration-300`}>
                <div className="bg-[#221F26] rounded-[calc(1rem-4px)] p-4 md:p-8">
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl md:rounded-3xl overflow-hidden border-4 border-amber-400/50 shadow-2xl animate-glow flex-shrink-0 bg-white flex items-center justify-center p-4">
                        <img 
                          src={project.logo} 
                          alt={project.name}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 space-y-4 md:space-y-6 w-full flex flex-col justify-between">
                        <div className="text-center md:text-left">
                          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{project.name}</h2>
                          <p className="text-base md:text-lg text-amber-200/80">{project.description}</p>
                        </div>
                        
                        <button className="w-full md:w-auto bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-[#1A1F2C] font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 flex items-center justify-center gap-2">
                          <Icon name="Play" size={20} />
                          Играть
                        </button>
                      </div>
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