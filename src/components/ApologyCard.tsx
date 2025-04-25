
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApologyCardProps {
  title: string;
  icon: string;
  description: string;
  color?: string;
  borderColor?: string;
}

export const ApologyCard = ({ 
  title, 
  icon, 
  description, 
  color = "from-purple-50 to-pink-50", 
  borderColor = "border-purple-200" 
}: ApologyCardProps) => {
  return (
    <Card className={`hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${color} border-2 ${borderColor} hover:scale-105 transform`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl text-purple-800">
          <span className="text-3xl mr-3">{icon}</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
      </CardContent>
    </Card>
  );
};
