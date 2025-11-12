import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$499",
      description: "Perfect for getting started",
      features: [
        "5-page custom website",
        "Mobile responsive design",
        "Contact form integration",
        "Google Maps integration",
        "Basic SEO setup",
        "1 month of support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      description: "Most popular for tradespeople",
      features: [
        "10-page custom website",
        "Mobile responsive design",
        "Contact & quote request forms",
        "Photo gallery (up to 50 images)",
        "Google Maps & business hours",
        "Advanced SEO optimization",
        "Social media integration",
        "3 months of support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$1,499",
      description: "Complete digital presence",
      features: [
        "Unlimited pages",
        "Mobile responsive design",
        "Advanced forms & automation",
        "Unlimited photo galleries",
        "Booking/scheduling system",
        "Customer testimonials section",
        "Blog setup & training",
        "Premium SEO package",
        "6 months of support",
        "Monthly analytics reports"
      ],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            One-time payment. No hidden fees. No monthly subscriptions. You own your website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={plan.popular ? "border-primary" : ""}
              data-testid={`card-pricing-${index}`}
            >
              <CardHeader className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  {plan.popular && (
                    <Badge variant="default" data-testid="badge-popular">
                      Most Popular
                    </Badge>
                  )}
                </div>
                <div>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plan.description}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2"
                      data-testid={`feature-${index}-${featureIndex}`}
                    >
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  onClick={scrollToContact}
                  data-testid={`button-pricing-${index}`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include hosting setup assistance. Domain registration separate ($15-20/year).
        </p>
      </div>
    </section>
  );
}
