import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">Carolina Craft Sites</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="/#services"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-services"
          >
            Services
          </a>
          <a
            href="/#portfolio"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-portfolio"
          >
            Portfolio
          </a>
          <a
            href="/#pricing"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-pricing"
          >
            Pricing
          </a>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            data-testid="link-contact"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button
              className="hidden md:flex"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </Link>
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
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-services"
            >
              Services
            </a>
            <a
              href="/#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-portfolio"
            >
              Portfolio
            </a>
            <a
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-pricing"
            >
              Pricing
            </a>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-contact"
            >
              Contact
            </Link>
            <Link href="/contact">
              <Button
                className="w-full"
                data-testid="mobile-button-get-started"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
