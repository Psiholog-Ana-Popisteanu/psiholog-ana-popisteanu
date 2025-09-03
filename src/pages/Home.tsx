import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { Heart, Shield, Users } from "lucide-react";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Heart,
      title: "Abordare Empatică",
      description: "Un mediu sigur și de încredere pentru explorarea emoțiilor și gândurilor."
    },
    {
      icon: Shield,
      title: "Confidențialitate Totală",
      description: "Respectarea strictă a confidențialității și a intimității clientului."
    },
    {
      icon: Users,
      title: "Experiență Vastă",
      description: "Ani de experiență în lucrul cu diverse provocări psihologice."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-therapy-calm via-background to-therapy-warmth py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-therapy-professional leading-tight">
              {t("home.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-therapy-professional/80 mb-4">
              {t("home.subtitle")}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
              {t("home.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-therapy-trust hover:bg-therapy-trust/90">
                <Link to="/contact">{t("home.cta")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">{t("nav.services")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 border-therapy-calm/20 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-therapy-calm rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-therapy-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-therapy-professional">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-therapy-calm/30 py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-therapy-professional">
              Începeți călătoria către bunăstare
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Faceți primul pas către o viață mai echilibrată și împlinită. Sunt aici pentru a vă sprijini în această călătorie.
            </p>
            <Button asChild size="lg" className="bg-therapy-trust hover:bg-therapy-trust/90">
              <Link to="/contact">{t("contactUs")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}