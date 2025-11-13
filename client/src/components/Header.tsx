import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Carolina Craft Sites</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-services"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-portfolio"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            className="hidden md:flex"
            onClick={() => scrollToSection("contact")}
            data-testid="button-get-started"
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-testid="button-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
