import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Questionnaire, SkinProfile } from "@/components/Questionnaire";
import { Results } from "@/components/Results";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [skinProfile, setSkinProfile] = useState<SkinProfile | null>(null);

  const handleGetStarted = () => {
    setShowQuestionnaire(true);
    setTimeout(() => {
      document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSubmit = (profile: SkinProfile) => {
    setSkinProfile(profile);
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setSkinProfile(null);
    setShowQuestionnaire(true);
    setTimeout(() => {
      document.getElementById('questionnaire')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      
      {showQuestionnaire && !skinProfile && (
        <div id="questionnaire">
          <Questionnaire onSubmit={handleSubmit} />
        </div>
      )}
      
      {skinProfile && (
        <div id="results">
          <Results profile={skinProfile} onReset={handleReset} />
        </div>
      )}
      
      <Education />
      <Footer />
    </div>
  );
};

export default Index;
