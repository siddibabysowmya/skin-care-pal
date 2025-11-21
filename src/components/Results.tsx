import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, CheckCircle2 } from "lucide-react";
import { SkinProfile } from "./Questionnaire";

interface ResultsProps {
  profile: SkinProfile;
  onReset: () => void;
}

interface Product {
  name: string;
  category: string;
  priceRange: string;
  rating: number;
  whyItWorks: string;
  howToUse: string;
}

const getRecommendations = (profile: SkinProfile): Product[] => {
  const recommendations: Product[] = [];
  
  // Cleanser recommendation based on skin type
  const cleansers: Record<string, Product> = {
    oily: {
      name: "Gentle Foaming Cleanser",
      category: "Cleanser",
      priceRange: "$15-25",
      rating: 4.5,
      whyItWorks: "Controls excess oil without stripping your skin, keeping your complexion balanced and fresh.",
      howToUse: "Use morning and evening. Massage onto damp skin, rinse thoroughly with lukewarm water.",
    },
    dry: {
      name: "Hydrating Cream Cleanser",
      category: "Cleanser",
      priceRange: "$18-28",
      rating: 4.7,
      whyItWorks: "Rich, creamy formula that cleanses while maintaining your skin's natural moisture barrier.",
      howToUse: "Apply to dry or damp skin, massage gently, remove with a warm washcloth.",
    },
    combination: {
      name: "Balancing Gel Cleanser",
      category: "Cleanser",
      priceRange: "$16-26",
      rating: 4.6,
      whyItWorks: "Perfectly balanced to address both oily and dry areas without disrupting your skin.",
      howToUse: "Use twice daily. Lather with water, massage in circular motions, rinse well.",
    },
    sensitive: {
      name: "Soothing Micellar Cleanser",
      category: "Cleanser",
      priceRange: "$14-24",
      rating: 4.8,
      whyItWorks: "Ultra-gentle formula that removes impurities without causing irritation or inflammation.",
      howToUse: "No rinsing needed. Apply with cotton pad or massage onto face and remove with damp cloth.",
    },
    normal: {
      name: "Daily Fresh Cleanser",
      category: "Cleanser",
      priceRange: "$15-25",
      rating: 4.5,
      whyItWorks: "Maintains your skin's natural balance while keeping it clean and refreshed.",
      howToUse: "Use morning and evening. Apply to wet skin, lather, and rinse thoroughly.",
    },
  };
  
  recommendations.push(cleansers[profile.skinType]);
  
  // Treatment products based on concerns
  if (profile.concerns.includes("acne")) {
    recommendations.push({
      name: "Clarifying Serum with Salicylic Acid",
      category: "Treatment",
      priceRange: "$25-40",
      rating: 4.6,
      whyItWorks: "Penetrates pores to clear existing breakouts and prevent new ones from forming.",
      howToUse: "Apply 2-3 drops to clean skin in the evening. Start 2-3 times per week, increase gradually.",
    });
  }
  
  if (profile.concerns.includes("wrinkles") || profile.concerns.includes("pigmentation")) {
    recommendations.push({
      name: "Vitamin C + Retinol Night Serum",
      category: "Treatment",
      priceRange: "$35-55",
      rating: 4.8,
      whyItWorks: "Powerful combination that reduces fine lines and fades dark spots while you sleep.",
      howToUse: "Apply 3-4 drops to face and neck at night. Always use SPF in the morning.",
    });
  }
  
  if (profile.concerns.includes("dryness") || profile.skinType === "dry") {
    recommendations.push({
      name: "Intensive Hydration Cream",
      category: "Moisturizer",
      priceRange: "$28-45",
      rating: 4.7,
      whyItWorks: "Deep hydration with hyaluronic acid and ceramides locks in moisture for 24 hours.",
      howToUse: "Apply to face and neck morning and evening after serums. Use more in dry weather.",
    });
  } else {
    recommendations.push({
      name: "Lightweight Daily Moisturizer",
      category: "Moisturizer",
      priceRange: "$22-35",
      rating: 4.6,
      whyItWorks: "Provides essential hydration without heaviness, perfect for daily use.",
      howToUse: "Apply morning and evening as the last step of your routine, before SPF in the morning.",
    });
  }
  
  // SPF is essential for everyone
  recommendations.push({
    name: "Broad Spectrum SPF 50 Sunscreen",
    category: "Sun Protection",
    priceRange: "$18-32",
    rating: 4.9,
    whyItWorks: "Protects against UV damage, prevents premature aging and dark spots. Non-negotiable!",
    howToUse: "Apply generously every morning as the final step. Reapply every 2 hours if outdoors.",
  });
  
  return recommendations;
};

export const Results = ({ profile, onReset }: ResultsProps) => {
  const recommendations = getRecommendations(profile);
  
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-accent/20 text-accent-foreground px-4 py-2 text-sm">
            Your Personalized Routine
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Perfect Products for Your Skin
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Based on your {profile.skinType} skin type and selected concerns
          </p>
          <Button 
            onClick={onReset}
            variant="outline"
            className="rounded-full"
          >
            Start Over
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map((product, index) => (
            <Card 
              key={index}
              className="p-6 rounded-3xl border-0 hover:scale-[1.02] transition-transform duration-300"
              style={{ 
                background: 'var(--gradient-card)',
                boxShadow: 'var(--shadow-card)'
              }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2 bg-secondary/20 text-secondary-foreground">
                      {product.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{product.rating}</span>
                  </div>
                </div>

                <div className="text-lg font-semibold text-primary">
                  {product.priceRange}
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">Why It Works</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.whyItWorks}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">How to Use</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {product.howToUse}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card 
          className="mt-8 p-6 rounded-3xl border-0 bg-accent/10"
          style={{ boxShadow: 'var(--shadow-soft)' }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Pro Tips for Best Results
          </h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Introduce new products one at a time to monitor how your skin responds</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Be consistent - most products take 4-6 weeks to show results</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Always patch test new products on a small area first</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Never skip SPF, even on cloudy days!</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};
