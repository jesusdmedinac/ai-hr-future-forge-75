
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  const navLinks = [
    { text: "Inicio", href: "#hero" },
    { text: "¿Qué es?", href: "#what-is-iathon" },
    { text: "Beneficios", href: "#benefits" },
    { text: "Retos", href: "#challenges" },
    { text: "Mentores", href: "#mentors" },
    { text: "Inversión", href: "#pricing" },
    { text: "FAQ", href: "#faq" },
  ];

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
      <Link to="/" className="flex items-center justify-center">
        <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          skilt.
        </span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        {navLinks.map((link) => (
          <a
            key={link.text}
            href={link.href}
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            {link.text}
          </a>
        ))}
      </nav>
      <div className="ml-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-lg font-medium hover:underline underline-offset-4"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
