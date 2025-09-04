import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ro' ? 'en' : 'ro';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: t("nav.about") },
    { path: "/services", label: t("nav.services") },
    { path: "/written-work", label: t("nav.writtenWork") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${
            location.pathname === item.path
              ? "text-primary font-medium"
              : "text-foreground hover:text-primary"
          } transition-colors ${mobile ? "block py-2" : ""}`}
          onClick={() => mobile && setIsOpen(false)}
        >
          {item.label}
        </Link>
      ))}
      <Button
        variant="outline"
        onClick={toggleLanguage}
        className="text-sm flex items-center gap-2"
      >
        <span className="inline-block w-5 h-5" style={{ transform: "translateY(2px)" }}>
          {i18n.language !== "ro" ? (
            // Romania flag SVG
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="20" height="18">
              <rect width="20" height="40" x="0" y="0" fill="#002B7F"/>
              <rect width="20" height="40" x="20" y="0" fill="#FCD116"/>
              <rect width="20" height="40" x="40" y="0" fill="#CE1126"/>
            </svg>
          ) : (
            // UK flag SVG
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 40" width="20" height="18">
              <rect width="60" height="40" fill="#012169"/>
              <polygon points="0,0 60,40 60,40 60,36 8,0" fill="#FFF"/>
              <polygon points="60,0 0,40 0,40 0,36 52,0" fill="#FFF"/>
              <polygon points="0,0 60,40 54,40 0,6" fill="#C8102E"/>
              <polygon points="60,0 0,40 6,40 60,6" fill="#C8102E"/>
              <rect x="25" width="10" height="40" fill="#FFF"/>
              <rect y="15" width="60" height="10" fill="#FFF"/>
              <rect x="27" width="6" height="40" fill="#C8102E"/>
              <rect y="17" width="60" height="6" fill="#C8102E"/>
            </svg>
          )}
        </span>
        {t("nav.languageToggle")}
      </Button>
    </>
  );

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-semibold text-primary flex items-center space-x-2">
            <img src={logo} alt="Ana Mihaela Popisteanu" className="h-10 w-10" />
            <span className="bg-font-logo-gradient">Ana M. Popisteanu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-4 mt-8">
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};