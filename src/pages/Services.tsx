import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Users, 
  Brain, 
  MessageCircle, 
  Heart, 
  UserCheck, 
  Lightbulb 
} from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Lightbulb,
      title: t("services.coaching.title"),
      description: t("services.coaching.description"),
      features: [
        "Stabilirea și atingerea obiectivelor",
        "Dezvoltarea încrederii în sine",
        "Îmbunătățirea performanței",
        "Gestionarea timpului și stresului"
      ],
      duration: "60 min",
      type: "Individual/Grup"
    },
    {
      icon: Brain,
      title: t("services.counseling.title"), 
      description: t("services.counseling.description"),
      features: [
        "Gestionarea anxietății și stresului",
        "Sprijin pentru depresie",
        "Dezvoltarea resilienței emoționale",
        "Tehnici de relaxare și mindfulness"
      ],
      duration: "50 min",
      type: "Individual"
    },
    {
      icon: MessageCircle,
      title: t("services.speechTherapy.title"),
      description: t("services.speechTherapy.description"),
      features: [
        "Terapia tulburărilor de articulare",
        "Dezvoltarea vocabularului",
        "Îmbunătățirea fluenței",
        "Exerciții de pronunție"
      ],
      duration: "45 min",
      type: "Individual"
    },
    {
      icon: Heart,
      title: t("services.psychotherapy.title"),
      description: t("services.psychotherapy.description"),
      features: [
        "Terapie cognitiv-comportamentală",
        "Procesarea traumelor",
        "Vindecarea emoțională",
        "Tehnici evidence-based"
      ],
      duration: "50 min",
      type: "Individual"
    },
    {
      icon: Users,
      title: t("services.coupleTherapy.title"),
      description: t("services.coupleTherapy.description"),
      features: [
        "Îmbunătățirea comunicării",
        "Rezolvarea conflictelor",
        "Consolidarea legăturii",
        "Terapia sistemică de familie"
      ],
      duration: "60 min",
      type: "Cuplu"
    },
    {
      icon: UserCheck,
      title: t("services.individualTherapy.title"),
      description: t("services.individualTherapy.description"),
      features: [
        "Spațiu confidențial și sigur",
        "Plan personalizat de tratament",
        "Suport emoțional continu",
        "Monitorizarea progresului"
      ],
      duration: "50 min",
      type: "Individual"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-therapy-professional">
            {t("services.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-therapy-calm/20 hover:border-therapy-accent/30">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-therapy-calm rounded-lg flex items-center justify-center group-hover:bg-therapy-accent transition-colors">
                    <service.icon className="w-6 h-6 text-therapy-professional" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-therapy-professional group-hover:text-therapy-trust transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                      <span>⏱️ {service.duration}</span>
                      <span>👥 {service.type}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-therapy-professional">Ce include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-therapy-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  asChild 
                  className="w-full bg-therapy-trust hover:bg-therapy-trust/90"
                >
                  <Link to="/contact">Programează o ședință</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-therapy-calm/30 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-therapy-professional">
            Nu știi ce serviciu să alegi?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Fiecare persoană este unică, iar nevoile tale specifice vor fi evaluate în timpul unei consultații inițiale gratuite.
          </p>
          <Button asChild size="lg" className="bg-therapy-trust hover:bg-therapy-trust/90">
            <Link to="/contact">Consultație gratuită</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}