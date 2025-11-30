import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import plumberHeadshot from "@assets/generated_images/Plumber_testimonial_headshot_389b61ba.png";
import electricianHeadshot from "@assets/generated_images/Electrician_testimonial_headshot_77dcbb9e.png";
import carpenterHeadshot from "@assets/generated_images/Carpenter_testimonial_headshot_f2457933.png";

export function Testimonials() {
  const testimonials = [
    {
      name: "Mike Johnson",
      role: "Licensed Plumber",
      location: "Charlotte, NC",
      image: plumberHeadshot,
      quote:
        "Carolina Craft Sites built my website in less than a week. I'm now getting 3-4 new customer calls every day. Best investment I've made for my business.",
      rating: 5,
    },
    {
      name: "Sarah Martinez",
      role: "Master Electrician",
      location: "Raleigh, NC",
      image: electricianHeadshot,
      quote:
        "The team understood exactly what I needed. My website looks professional and my customers can easily find my services and contact me. Highly recommend!",
      rating: 5,
    },
    {
      name: "Tom Anderson",
      role: "Custom Carpenter",
      location: "Durham, NC",
      image: carpenterHeadshot,
      quote:
        "I can finally showcase my woodworking projects online. The photo gallery looks amazing and I've landed two major projects from my website already.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join trusted local businesses who've grown their business with a
            professional website
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                      data-testid={`star-${index}-${i}`}
                    />
                  ))}
                </div>
                <p className="text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
