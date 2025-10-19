import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const hoursData = [
  { day: "Sunday", hours: "6 AM – 11 PM" },
  { day: "Monday (Diwali)", hours: "7 AM – 11 PM", note: "Hours might differ" },
  { day: "Tuesday", hours: "6 AM – 11 PM" },
  { day: "Wednesday", hours: "6 AM – 11 PM" },
  { day: "Thursday", hours: "6 AM – 11 PM" },
  { day: "Friday", hours: "6 AM – 11 PM" },
  { day: "Saturday", hours: "6 AM – 11 PM" },
];

const Hours = () => {
  const isOpenNow = () => {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= 6 && currentHour < 23;
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Opening Hours
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg">
            <Clock className={`w-5 h-5 ${isOpenNow() ? 'text-green-600' : 'text-red-600'}`} />
            <span className={`font-semibold ${isOpenNow() ? 'text-green-600' : 'text-red-600'}`}>
              {isOpenNow() ? 'Open Now' : 'Closed'}
            </span>
          </div>
        </div>

        <Card className="max-w-3xl mx-auto shadow-elegant border-0 animate-fade-in">
          <CardHeader className="bg-secondary">
            <CardTitle className="text-2xl text-primary">Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {hoursData.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-smooth px-4 py-2 rounded-lg"
                >
                  <div>
                    <span className="text-lg font-semibold text-primary">{item.day}</span>
                    {item.note && (
                      <span className="block text-sm text-muted-foreground italic">{item.note}</span>
                    )}
                  </div>
                  <span className="text-gold-dark font-semibold text-lg">{item.hours}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Hours;