import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils } from "lucide-react";

interface MenuItem {
  name: string;
  smallPrice: string;
  largePrice: string;
}

interface MenuCategory {
  title: string;
  icon: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Fried Rice",
    icon: "🍚",
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600" },
      { name: "Egg", smallPrice: "400", largePrice: "600" },
      { name: "Chicken", smallPrice: "450", largePrice: "700" },
      { name: "Seafood", smallPrice: "600", largePrice: "800" },
      { name: "Mixed", smallPrice: "650", largePrice: "900" },
    ],
  },
  {
    title: "Sri Lankan Spice Koththu",
    icon: "🌶️",
    items: [
      { name: "Vegetable", smallPrice: "350", largePrice: "450" },
      { name: "Egg", smallPrice: "350", largePrice: "450" },
      { name: "Chicken", smallPrice: "400", largePrice: "600" },
      { name: "Seafood", smallPrice: "450", largePrice: "750" },
      { name: "Mixed (Egg / Chicken / Seafood)", smallPrice: "500", largePrice: "900" },
    ],
  },
  {
    title: "Cheese Koththu",
    icon: "🧀",
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600" },
      { name: "Egg", smallPrice: "400", largePrice: "600" },
      { name: "Chicken", smallPrice: "500", largePrice: "750" },
      { name: "Seafood", smallPrice: "550", largePrice: "850" },
      { name: "Mixed (Egg / Chicken / Seafood)", smallPrice: "600", largePrice: "1000" },
    ],
  },
  {
    title: "String Hoppers Koththu",
    icon: "🍜",
    items: [
      { name: "Vegetable", smallPrice: "350", largePrice: "450" },
      { name: "Egg", smallPrice: "350", largePrice: "450" },
      { name: "Chicken", smallPrice: "400", largePrice: "600" },
      { name: "Seafood", smallPrice: "450", largePrice: "750" },
      { name: "Mixed (Egg / Chicken / Seafood)", smallPrice: "500", largePrice: "900" },
    ],
  },
  {
    title: "Noodles",
    icon: "🍝",
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600" },
      { name: "Egg", smallPrice: "400", largePrice: "600" },
      { name: "Chicken", smallPrice: "450", largePrice: "700" },
      { name: "Seafood", smallPrice: "600", largePrice: "800" },
      { name: "Mixed", smallPrice: "650", largePrice: "900" },
    ],
  },
  {
    title: "Side Dishes",
    icon: "🍗",
    items: [
      { name: "Fish Devilled", smallPrice: "900", largePrice: "-" },
      { name: "Chicken Devilled", smallPrice: "850", largePrice: "-" },
      { name: "Fried Fish", smallPrice: "900", largePrice: "-" },
      { name: "Fried Chicken", smallPrice: "850", largePrice: "-" },
    ],
  },
];

const MenuNew = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-gold mb-4">
            <Utensils className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Delicious Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic Sri Lankan flavors, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Category Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuData.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === idx
                    ? "gradient-gold text-primary shadow-gold scale-105"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items Display */}
          <Card className="shadow-elegant border-0 overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-r from-primary to-ocean-blue p-6">
              <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
                <span className="text-4xl">{menuData[selectedCategory].icon}</span>
                {menuData[selectedCategory].title}
              </h3>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {menuData[selectedCategory].items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-cream hover:bg-secondary transition-all duration-300 rounded-xl p-6 hover:shadow-card cursor-pointer border-2 border-transparent hover:border-gold/20"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-primary group-hover:text-gold-dark transition-smooth">
                        {item.name}
                      </h4>
                      {item.name.includes("Mixed") && (
                        <Badge className="gradient-gold text-primary border-0">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">Small</p>
                        <p className="text-2xl font-bold text-gold-dark">
                          Rs. {item.smallPrice}
                        </p>
                      </div>
                      {item.largePrice !== "-" && (
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">Large</p>
                          <p className="text-2xl font-bold text-gold-dark">
                            Rs. {item.largePrice}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All prices note */}
          <p className="text-center text-muted-foreground mt-8 text-sm">
            All prices are in Sri Lankan Rupees (LKR). Prices may vary on special occasions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuNew;
