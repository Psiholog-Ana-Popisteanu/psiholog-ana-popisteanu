import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { Book, ExternalLink, Quote, Star } from "lucide-react";

export default function WrittenWork() {
  const { t } = useTranslation();

  const bookFeatures = [
    "Abordare științifică și practică",
    "Studii de caz reale", 
    "Exerciții practice",
    "Tehnici de autovindecare"
  ];

  const reviews = [
    {
      text: "O carte esențială pentru înțelegerea conexiunii dintre minte și corp. Recomand cu căldură!",
      author: "Dr. Maria Ionescu",
      role: "Medic specialist"
    },
    {
      text: "Informații valoroase prezentate într-un mod accesibil. M-a ajutat să înțeleg mai bine propriile simptome.",
      author: "Alexandra P.",
      role: "Cititor verificat"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-therapy-professional">
            {t("writtenWork.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("writtenWork.subtitle")}
          </p>
        </div>

        {/* Main Book Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Book Cover and Details */}
          <div className="space-y-6">
            <Card className="p-8 bg-therapy-calm/20 border-therapy-calm/30">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-32 h-48 bg-therapy-trust rounded-lg shadow-lg flex items-center justify-center">
                    <Book className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 text-therapy-professional">
                    {t("writtenWork.bookTitle")}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    de Ana Mihaela Popisteanu
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">(4.8/5)</span>
                  </div>
                  <Badge className="bg-therapy-accent/20 text-therapy-professional">
                    Bestseller
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Book Features */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-therapy-professional">
                Ce veți descoperi în această carte:
              </h3>
              <ul className="space-y-3">
                {bookFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-therapy-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Description and Purchase */}
          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Quote className="w-6 h-6 text-therapy-accent" />
                <h3 className="text-xl font-semibold text-therapy-professional">
                  Despre carte
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("writtenWork.bookDescription")}
              </p>
              
              <blockquote className="border-l-4 border-therapy-accent pl-4 py-2 mb-6 italic text-therapy-professional bg-therapy-calm/20 rounded-r-lg">
                "{t("writtenWork.bookQuote")}"
              </blockquote>

              <div className="space-y-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="w-full bg-therapy-trust hover:bg-therapy-trust/90"
                >
                  <a 
                    href="https://carturesti.ro/carte/psihosomatica-1395591857?p=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <span>{t("writtenWork.buyBook")}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  Disponibilă în format fizic și digital
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <Card className="p-6 bg-therapy-warmth/20">
              <h4 className="font-semibold mb-3 text-therapy-professional">
                Detalii tehnice
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Numărul de pagini:</span>
                  <span>248</span>
                </div>
                <div className="flex justify-between">
                  <span>Editura:</span>
                  <span>Editura Psihologia</span>
                </div>
                <div className="flex justify-between">
                  <span>Anul publicării:</span>
                  <span>2023</span>
                </div>
                <div className="flex justify-between">
                  <span>ISBN:</span>
                  <span>978-123-456-789-0</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-therapy-professional">
            Ce spun cititorii
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </blockquote>
                <div>
                  <div className="font-medium text-therapy-professional">
                    {review.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {review.role}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Works */}
        <Card className="p-8 bg-therapy-calm/20 border-therapy-calm/30 text-center">
          <h3 className="text-xl font-semibold mb-4 text-therapy-professional">
            Lucrări viitoare
          </h3>
          <p className="text-muted-foreground mb-6">
            Sunt în proces de lucru la o nouă carte despre tehnicile de gestionare a anxietății în era modernă. 
            Abonați-vă la newsletter pentru a fi anunțați când va fi disponibilă.
          </p>
          <Button asChild variant="outline">
            <a href="/contact">Abonare newsletter</a>
          </Button>
        </Card>
      </div>
    </div>
  );
}