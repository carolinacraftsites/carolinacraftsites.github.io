import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Close mobile menu if open
    setMobileMenuOpen(false);

    // Allow default behavior for Cmd+Click (Mac) or Ctrl+Click (Windows) to open in new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // Otherwise, smooth scroll to section
    e.preventDefault();
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
          <a
            href="#services"
            onClick={(e) => handleLinkClick(e, "services")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-services"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleLinkClick(e, "portfolio")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-portfolio"
          >
            Portfolio
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, "pricing")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden md:flex"
            asChild
            data-testid="button-get-started"
          >
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Get Started
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, "services")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-services"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleLinkClick(e, "portfolio")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-portfolio"
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              onClick={(e) => handleLinkClick(e, "pricing")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-pricing"
            >
              Pricing
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-contact"
            >
              Contact
            </a>
            <Button
              className="w-full"
              asChild
              data-testid="mobile-button-get-started"
            >
              <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
