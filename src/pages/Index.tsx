
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ApologyCard } from "@/components/ApologyCard";
import { HeartIcon, GiftIcon, HomeIcon, CalendarIcon } from "lucide-react";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const handleOpenMessage = () => {
    setShowMessage(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: "-5%",
                animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ["#FFD700", "#FF6347", "#9370DB", "#3CB371", "#FF69B4"][Math.floor(Math.random() * 5)],
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: "50%"
              }}
            />
          ))}
        </div>
      )}
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 opacity-50" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-purple-300 via-pink-300 to-purple-300 opacity-50" />
      
      <Card className="max-w-md w-full bg-white/90 backdrop-blur-sm shadow-xl rounded-xl p-8 text-center border-2 border-purple-200 relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-pink-100 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl opacity-40" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-100 rounded-full translate-x-1/2 translate-y-1/2 blur-xl opacity-40" />
        
        <h1 className="text-3xl font-bold text-purple-800 mb-6 relative">
          Папа, я хочу <span className="text-pink-600">извиниться</span>
        </h1>
        
        {!showMessage ? (
          <>
            <div className="text-center mb-6">
              <CalendarIcon className="mx-auto h-16 w-16 text-purple-600 mb-4 opacity-90" />
              <p className="text-gray-700 font-medium mb-3 text-lg">
                Я знаю, что совершил ошибку, пропустив учебу без уважительной причины.
              </p>
              <p className="text-gray-600 mb-6">
                Пожалуйста, открой моё искреннее извинение.
              </p>
            </div>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all px-6 py-6 rounded-xl shadow-md hover:shadow-lg text-lg"
              onClick={handleOpenMessage}
            >
              Открыть извинение ❤️
            </Button>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <p className="text-gray-700 mb-4 text-lg font-medium">
                Папа, я искренне сожалею о том, что прогулял учебу без твоего разрешения и подвёл тебя.
              </p>
              <p className="text-gray-700 mb-4">
                Я понимаю, что моё поведение было безответственным, и что образование — это важная часть моего будущего. Обещаю, что такое больше не повторится.
              </p>
              <p className="text-purple-700 font-medium">
                Ты самый лучший папа, и я очень тебя люблю! Спасибо за твою заботу и понимание.
              </p>
            </div>
            <div className="flex justify-center gap-4 mb-8">
              <div className="animate-bounce-slow">
                <HeartIcon className="text-red-500 h-10 w-10 drop-shadow-md" />
              </div>
              <div className="animate-pulse">
                <GiftIcon className="text-yellow-500 h-10 w-10 drop-shadow-md" />
              </div>
              <div className="animate-bounce-slow">
                <HomeIcon className="text-blue-500 h-10 w-10 drop-shadow-md" />
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 py-2"
              onClick={() => setShowMessage(false)}
            >
              Вернуться
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
        <ApologyCard 
          title="Я осознал свою ошибку" 
          icon="😔" 
          description="Прогул занятий был безответственным поступком. Я понимаю, почему ты расстроился и разочаровался."
          color="from-red-50 to-orange-50"
          borderColor="border-red-200"
        />
        <ApologyCard 
          title="Моё обещание" 
          icon="🤝" 
          description="Клянусь, что больше не буду пропускать занятия без уважительной причины и буду серьёзнее относиться к учёбе."
          color="from-blue-50 to-purple-50"
          borderColor="border-blue-200"
        />
        <ApologyCard 
          title="Благодарность" 
          icon="🙏" 
          description="Спасибо за твоё терпение и любовь. Я ценю твои уроки и заботу о моём будущем."
          color="from-green-50 to-teal-50"
          borderColor="border-green-200"
        />
      </div>
    </div>
  );
};

export default Index;
