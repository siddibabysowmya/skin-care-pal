import { Card } from "@/components/ui/card";
import { Droplets, Sun, Moon, Sparkles } from "lucide-react";

export const Education = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skin-Care Essentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn the basics to make informed decisions about your skin-care routine
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card 
            className="p-8 rounded-3xl border-0"
            style={{ 
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Understanding Skin Types
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Oily Skin</h4>
                <p className="text-sm">Characterized by excess sebum production. Appears shiny and may have enlarged pores.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dry Skin</h4>
                <p className="text-sm">Lacks moisture and natural oils. May feel tight and show flaky patches.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Combination Skin</h4>
                <p className="text-sm">Oily in T-zone (forehead, nose, chin) but normal to dry on cheeks.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Sensitive Skin</h4>
                <p className="text-sm">Easily irritated by products or environmental factors. Prone to redness and reactions.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Normal Skin</h4>
                <p className="text-sm">Well-balanced with minimal concerns. Neither too oily nor too dry.</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-8 rounded-3xl border-0"
            style={{ 
              background: 'var(--gradient-card)',
              boxShadow: 'var(--shadow-card)'
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Common Skin Concerns
              </h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Acne & Breakouts</h4>
                <p className="text-sm">Look for salicylic acid, benzoyl peroxide, or niacinamide to manage breakouts.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Pigmentation</h4>
                <p className="text-sm">Vitamin C, retinol, and kojic acid can help fade dark spots and even skin tone.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Fine Lines & Wrinkles</h4>
                <p className="text-sm">Retinol and peptides stimulate collagen production for firmer, younger-looking skin.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dullness</h4>
                <p className="text-sm">Exfoliants like AHAs and vitamin C brighten and renew skin's appearance.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dehydration</h4>
                <p className="text-sm">Hyaluronic acid and ceramides help skin retain moisture for a plump, healthy glow.</p>
              </div>
            </div>
          </Card>
        </div>

        <Card 
          className="p-8 rounded-3xl border-0"
          style={{ 
            background: 'var(--gradient-card)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Basic Skin-Care Routine
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Sun className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Morning Routine</h4>
              </div>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">1.</span>
                  <span><strong className="text-foreground">Cleanser:</strong> Remove overnight buildup</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2.</span>
                  <span><strong className="text-foreground">Toner:</strong> Balance pH (optional)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">3.</span>
                  <span><strong className="text-foreground">Serum:</strong> Target specific concerns (Vitamin C)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">4.</span>
                  <span><strong className="text-foreground">Moisturizer:</strong> Hydrate and protect</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">5.</span>
                  <span><strong className="text-foreground">SPF:</strong> Always finish with sunscreen!</span>
                </li>
              </ol>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Moon className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Evening Routine</h4>
              </div>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">1.</span>
                  <span><strong className="text-foreground">Cleanser:</strong> Remove makeup, sunscreen, and dirt</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2.</span>
                  <span><strong className="text-foreground">Toner:</strong> Prep skin for treatments (optional)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">3.</span>
                  <span><strong className="text-foreground">Treatment Serum:</strong> Retinol or targeted actives</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">4.</span>
                  <span><strong className="text-foreground">Eye Cream:</strong> Treat delicate under-eye area</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">5.</span>
                  <span><strong className="text-foreground">Night Cream:</strong> Rich moisturizer for overnight repair</span>
                </li>
              </ol>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
