import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import initials from "@/assets/amp.png";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary flex flex-col items-start">
              <span className="inline-block h-10 w-10 mb-2">
                <img
                  src={initials}
                  alt="Ana Mihaela Popisteanu"
                  className="h-full w-full object-contain"
                />
              </span>
              <span>Ana Mihaela Popisteanu</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("home.subtitle")}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("contact.contactInfo")}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(0755) 033 444</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>ana.popisteanu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>București, România</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t("contact.workingHours")}</h4>
            <div className="space-y-1 text-sm text-muted-foreground">
              <div className="flex justify-between">
                <span>{t("contact.hours.monday")} - {t("contact.hours.friday")}</span>
                <span>{t("contact.hours.time")}</span>
              </div>
              <div className="flex justify-between">
                <span>{t("contact.hours.saturday")} - {t("contact.hours.sunday")}</span>
                <span>{t("contact.hours.closed")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ana Mihaela Popisteanu. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};