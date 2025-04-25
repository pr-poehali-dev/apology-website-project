
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApologyCardProps {
  title: string;
  icon: string;
  description: string;
}

export const ApologyCard = ({ title, icon, description }: ApologyCardProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300 bg-white border border-purple-100">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg text-purple-700">
          <span className="text-2xl mr-2">{icon}</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};
