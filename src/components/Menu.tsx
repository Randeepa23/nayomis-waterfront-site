import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MenuItem {
  name: string;
  smallPrice: string;
  largePrice: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Fried Rice",
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
    items: [
      { name: "Vegetable", smallPrice: "400", largePrice: "600" },
      { name: "Egg", smallPrice: "400", largePrice: "600" },
      { name: "Chicken", smallPrice: "450", largePrice: "700" },
      { name: "Seafood", smallPrice: "600", largePrice: "800" },
      { name: "Mixed", smallPrice: "650", largePrice: "900" },
    ],
  },
];

const sideDishes = [
  { name: "Fish Devilled", price: "900" },
  { name: "Chicken Devilled", price: "850" },
  { name: "Fried Fish", price: "900" },
  { name: "Fried Chicken", price: "850" },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground">
            Authentic Sri Lankan flavors crafted with passion
          </p>
        </div>

        <Tabs defaultValue="fried-rice" className="max-w-6xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto mb-8 bg-secondary p-2">
            <TabsTrigger value="fried-rice" className="data-[state=active]:gradient-gold data-[state=active]:text-primary">
              Fried Rice
            </TabsTrigger>
            <TabsTrigger value="spice-koththu" className="data-[state=active]:gradient-gold data-[state=active]:text-primary">
              Spice Koththu
            </TabsTrigger>
            <TabsTrigger value="cheese-koththu" className="data-[state=active]:gradient-gold data-[state=active]:text-primary">
              Cheese Koththu
            </TabsTrigger>
            <TabsTrigger value="string-hoppers" className="data-[state=active]:gradient-gold data-[state=active]:text-primary">
              String Hoppers
            </TabsTrigger>
            <TabsTrigger value="noodles" className="data-[state=active]:gradient-gold data-[state=active]:text-primary">
              Noodles
            </TabsTrigger>
            <TabsTrigger value="sides" className="data-[state=active]:gradient-gold data-[state=active]:text-primary">
              Side Dishes
            </TabsTrigger>
          </TabsList>

          {menuData.map((category, idx) => (
            <TabsContent 
              key={category.title} 
              value={category.title.toLowerCase().replace(/ /g, '-')}
              className="animate-fade-in"
            >
              <Card className="shadow-card border-0">
                <CardHeader className="bg-secondary">
                  <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx}
                        className="flex justify-between items-center pb-4 border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-smooth px-4 py-2 rounded-lg"
                      >
                        <span className="text-lg font-medium">{item.name}</span>
                        <div className="flex gap-6 text-gold-dark font-semibold">
                          <span>Small: Rs. {item.smallPrice}</span>
                          <span>Large: Rs. {item.largePrice}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}

          <TabsContent value="sides" className="animate-fade-in">
            <Card className="shadow-card border-0">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-2xl text-primary">Side Dishes</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {sideDishes.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-center p-4 bg-cream rounded-lg hover:shadow-card transition-smooth"
                    >
                      <span className="text-lg font-medium">{item.name}</span>
                      <span className="text-gold-dark font-semibold text-xl">Rs. {item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;