
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { ApologyCard } from "@/components/ApologyCard";
import { HeartIcon, GiftIcon, HomeIcon } from "lucide-react";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 p-4">
      <Card className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-purple-800 mb-6">Папа, я хочу извиниться</h1>
        
        {!showMessage ? (
          <>
            <p className="text-gray-600 mb-8">
              Я знаю, что поступил неправильно. Нажми на кнопку, чтобы увидеть моё искреннее извинение.
            </p>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 transition-all"
              onClick={() => setShowMessage(true)}
            >
              Открыть извинение
            </Button>
          </>
        ) : (
          <div className="animate-fade-in">
            <p className="text-gray-700 mb-6">
              Папа, я очень сожалею о том, что произошло. Я понимаю, что подвёл тебя и это было неправильно. 
              Обещаю исправиться и больше так не поступать. Ты самый лучший папа, и я очень тебя люблю!
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <HeartIcon className="text-red-500 h-8 w-8" />
              <GiftIcon className="text-yellow-500 h-8 w-8" />
              <HomeIcon className="text-blue-500 h-8 w-8" />
            </div>
            <Button 
              variant="outline" 
              className="border-purple-300 text-purple-700 hover:bg-purple-50"
              onClick={() => setShowMessage(false)}
            >
              Вернуться
            </Button>
          </div>
        )}
      </Card>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
        <ApologyCard 
          title="Я был неправ" 
          icon="❤️" 
          description="Я признаю свою ошибку и понимаю, почему ты расстроился."
        />
        <ApologyCard 
          title="Исправлюсь" 
          icon="🤝" 
          description="Обещаю, что больше такого не повторится, и я буду лучше."
        />
        <ApologyCard 
          title="Благодарность" 
          icon="🙏" 
          description="Спасибо за твоё терпение и за то, что ты лучший папа."
        />
      </div>
    </div>
  );
};

export default Index;
