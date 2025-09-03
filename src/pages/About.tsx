import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Heart } from "lucide-react";
import anaImage from "@/assets/ana-mihaela-popisteanu.jpg";

export default function About() {
  const { t } = useTranslation();

  const qualifications = [
    "Licență în Psihologie",
    "Master în Psihoterapie",
    "Certificare în Coaching",
    "Specializare în Terapia de Cuplu"
  ];

  const approaches = [
    "Terapie Cognitiv-Comportamentală",
    "Terapie Sistemică",
    "Mindfulness și Relaxare",
    "Abordare Integrativă"
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-therapy-professional">
            {t("about.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Photo and Bio */}
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-shrink-0">
                <img
                  src={anaImage}
                  alt="Ana Mihaela Popisteanu"
                  className="w-64 h-64 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                />
              </div>
              <div className="flex-1">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {t("about.bio").split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-therapy-accent" />
                  <h3 className="text-lg font-semibold">{t("about.education")}</h3>
                </div>
                <div className="space-y-2">
                  {qualifications.map((qual, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2 bg-therapy-calm/50">
                      {qual}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-therapy-accent" />
                  <h3 className="text-lg font-semibold">{t("about.experience")}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Peste 10 ani de experiență în domeniul psihologiei clinice și terapiei de cuplu, 
                  cu sute de clienți ajutați să-și depășească provocările emoționale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Approach Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-therapy-accent" />
              <h2 className="text-2xl font-semibold text-therapy-professional">
                {t("about.approach")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.approachText")}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {approaches.map((approach, index) => (
                <Badge key={index} variant="outline" className="justify-center p-2 text-xs">
                  {approach}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-therapy-calm/20 border-therapy-calm/30">
            <h3 className="text-xl font-semibold mb-4 text-therapy-professional">
              Valorile mele profesionale
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-therapy-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Respectul pentru unicitatea fiecărui client</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-therapy-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Confidențialitatea și intimitatea absolută</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-therapy-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Abordare empatică și non-judecătoare</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-therapy-accent rounded-full mt-2 flex-shrink-0"></div>
                <span>Dezvoltare continuă și formare profesională</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}