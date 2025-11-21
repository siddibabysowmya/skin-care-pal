import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

export interface SkinProfile {
  skinType: string;
  concerns: string[];
}

interface QuestionnaireProps {
  onSubmit: (profile: SkinProfile) => void;
}

const skinTypes = [
  { value: "oily", label: "Oily", description: "Shiny appearance, enlarged pores" },
  { value: "dry", label: "Dry", description: "Tight feeling, flaky patches" },
  { value: "combination", label: "Combination", description: "Oily T-zone, dry cheeks" },
  { value: "sensitive", label: "Sensitive", description: "Easily irritated, prone to redness" },
  { value: "normal", label: "Normal", description: "Well-balanced, minimal concerns" },
];

const concerns = [
  { value: "acne", label: "Acne & Breakouts" },
  { value: "pigmentation", label: "Pigmentation & Dark Spots" },
  { value: "wrinkles", label: "Fine Lines & Wrinkles" },
  { value: "dullness", label: "Dullness & Uneven Tone" },
  { value: "dryness", label: "Excessive Dryness" },
  { value: "redness", label: "Redness & Irritation" },
];

export const Questionnaire = ({ onSubmit }: QuestionnaireProps) => {
  const [skinType, setSkinType] = useState<string>("");
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);

  const handleConcernToggle = (concern: string) => {
    setSelectedConcerns(prev =>
      prev.includes(concern)
        ? prev.filter(c => c !== concern)
        : [...prev, concern]
    );
  };

  const handleSubmit = () => {
    if (skinType && selectedConcerns.length > 0) {
      onSubmit({ skinType, concerns: selectedConcerns });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Tell Us About Your Skin
          </h2>
          <p className="text-lg text-muted-foreground">
            Help us understand your unique skin needs
          </p>
        </div>

        <Card 
          className="p-8 rounded-3xl border-0"
          style={{ 
            background: 'var(--gradient-card)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <div className="space-y-10">
            {/* Skin Type Selection */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What's your skin type?
              </h3>
              <RadioGroup value={skinType} onValueChange={setSkinType}>
                <div className="space-y-3">
                  {skinTypes.map((type) => (
                    <div 
                      key={type.value}
                      className="flex items-start space-x-3 p-4 rounded-2xl bg-background/50 hover:bg-background/80 transition-colors cursor-pointer"
                      onClick={() => setSkinType(type.value)}
                    >
                      <RadioGroupItem value={type.value} id={type.value} className="mt-1" />
                      <Label 
                        htmlFor={type.value}
                        className="flex-1 cursor-pointer"
                      >
                        <div className="font-medium text-foreground">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Skin Concerns Selection */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What are your main skin concerns? (Select all that apply)
              </h3>
              <div className="space-y-3">
                {concerns.map((concern) => (
                  <div 
                    key={concern.value}
                    className="flex items-center space-x-3 p-4 rounded-2xl bg-background/50 hover:bg-background/80 transition-colors cursor-pointer"
                    onClick={() => handleConcernToggle(concern.value)}
                  >
                    <Checkbox
                      id={concern.value}
                      checked={selectedConcerns.includes(concern.value)}
                      onCheckedChange={() => handleConcernToggle(concern.value)}
                    />
                    <Label 
                      htmlFor={concern.value}
                      className="flex-1 cursor-pointer font-medium text-foreground"
                    >
                      {concern.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!skinType || selectedConcerns.length === 0}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              size="lg"
            >
              Get My Recommendations
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
