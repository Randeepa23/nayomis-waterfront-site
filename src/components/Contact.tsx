import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-primary">Address</h3>
                  <p className="text-muted-foreground">42 Colombo Rd, Katunayake 11500</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-primary">Phone</h3>
                  <p className="text-muted-foreground">0317 934 447</p>
                  <p className="text-muted-foreground">+94 76 799 3874</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0 hover:shadow-elegant transition-smooth">
              <CardContent className="pt-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-primary">Email</h3>
                  <p className="text-muted-foreground">waterfront@nayomis.com</p>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-elegant h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3676742726856!2d79.88447931477497!3d7.178899394844593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6b3b6b6b%3A0x1b6b6b6b6b6b6b6b!2s42%20Colombo%20Rd%2C%20Katunayake!5e0!3m2!1sen!2slk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nayomi's Waterfront Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card border-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="border-border focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-primary">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Your phone number"
                    className="border-border focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message"
                    rows={5}
                    className="border-border focus:border-gold resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full gradient-gold text-primary font-semibold hover:shadow-gold transition-smooth"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;