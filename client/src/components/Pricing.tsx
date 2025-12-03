import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "wouter";

export function Pricing() {
  const coreFeatures = [
    "AI-built 3–5 page website",
    "Uses whatever info you already have",
    "AI copy, photos, and layout",
    "Mobile optimized",
    "Delivered in 3 days",
    "One light revision pass",
    "Continuing service avilable, or take over the site maintenence yourself",
  ];

  const addOns = [
    { name: "Extra Pages", price: "$75/page" },
    { name: "AI Logo Refresh", price: "$75" },
    { name: "Premium Domain Setup", price: "$50" }
  ];


  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your professional website up and running in just 3 days
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Core Website */}
          <Card className="lg:col-span-2" data-testid="card-core-website">
            <CardHeader className="p-6">
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="text-2xl font-semibold">Core Website</h3>
                <span className="text-3xl font-bold">— $500</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <ul className="space-y-3 mb-6">
                {coreFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                    data-testid={`core-feature-${index}`}
                  >
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button
                  className="w-full"
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Add-ons and Recurring */}
          <div className="space-y-6">
            <Card data-testid="card-addons">
              <CardHeader className="p-6">
                <h3 className="text-xl font-semibold">Add-Ons</h3>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {addOns.map((addon, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-between gap-2"
                      data-testid={`addon-${index}`}
                    >
                      <span className="text-sm">{addon.name}</span>
                      <span className="text-sm font-semibold whitespace-nowrap">
                        {addon.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-recurring">
              <CardHeader className="p-6">
                <h3 className="text-xl font-semibold">Recurring</h3>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-2 mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-medium">Hosting + Uptime Support</span>
                    <span className="text-base font-semibold">— $35/mo</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Monthly service available, or follow our guide to host the site yourself.
                    <br/>
                    <br/>
                    (monthly fee includes hosting, SSL, backups, and uptime monitoring)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
