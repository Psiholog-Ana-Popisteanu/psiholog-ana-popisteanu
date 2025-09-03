import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send 
} from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Mesaj trimis!",
        description: "Vă voi contacta în cel mai scurt timp posibil.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Eroare",
        description: "A apărut o eroare. Vă rugăm să încercați din nou.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "(0755) 033 444",
      href: "tel:+40755033444"
    },
    {
      icon: Mail,
      title: "Email",
      content: "ana.popisteanu@gmail.com",
      href: "mailto:ana.popisteanu@gmail.com"
    },
    {
      icon: MapPin,
      title: t("contact.location"),
      content: t("contact.locationText"),
      href: "#"
    }
  ];

  const workingHours = [
    { day: t("contact.hours.monday"), time: t("contact.hours.time") },
    { day: t("contact.hours.tuesday"), time: t("contact.hours.time") },
    { day: t("contact.hours.wednesday"), time: t("contact.hours.time") },
    { day: t("contact.hours.thursday"), time: t("contact.hours.time") },
    { day: t("contact.hours.friday"), time: t("contact.hours.time") },
    { day: t("contact.hours.saturday"), time: t("contact.hours.closed") },
    { day: t("contact.hours.sunday"), time: t("contact.hours.closed") }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-therapy-professional">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl text-therapy-professional">
                  {t("contact.getInTouch")}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t("contact.form.name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="Numele dumneavoastră complet"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="+40 xxx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">{t("contact.form.email")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="email@exemplu.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-2"
                      placeholder="Subiectul mesajului"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2"
                      placeholder="Descrieți motivul pentru care doriți să mă contactați..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-therapy-trust hover:bg-therapy-trust/90"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Se trimite..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.send")}
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Toate informațiile sunt tratate confidențial conform GDPR.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-therapy-professional">
                {t("contact.contactInfo")}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-therapy-calm rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-therapy-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-therapy-professional">
                        {info.title}
                      </div>
                      {info.href.startsWith('#') ? (
                        <div className="text-muted-foreground text-sm whitespace-pre-line">
                          {info.content}
                        </div>
                      ) : (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-therapy-trust transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-therapy-accent" />
                <h3 className="text-lg font-semibold text-therapy-professional">
                  {t("contact.workingHours")}
                </h3>
              </div>
              <div className="space-y-2">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-1 text-sm">
                    <span className="text-therapy-professional">{schedule.day}</span>
                    <span className={`${
                      schedule.time === t("contact.hours.closed") 
                        ? "text-muted-foreground" 
                        : "text-therapy-accent font-medium"
                    }`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Emergency Note */}
            <Card className="p-6 bg-therapy-warmth/20 border-therapy-warmth/30">
              <h4 className="font-semibold mb-3 text-therapy-professional">
                Urgențe
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                În caz de urgență psihiatrică, vă rugăm să contactați serviciile de urgență la 
                <strong> 112</strong> sau să vă prezentați la cea mai apropiată unitate medicală.
              </p>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="p-8 bg-therapy-calm/20 border-therapy-calm/30 text-center">
            <h3 className="text-xl font-semibold mb-4 text-therapy-professional">
              Locația cabinetului
            </h3>
            <p className="text-muted-foreground mb-6">
              Cabinetul se află într-o zonă liniștită și accesibilă din București, 
              cu parcare disponibilă și acces facil cu transportul în comun.
            </p>
            <Button asChild variant="outline">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Vezi pe hartă
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}