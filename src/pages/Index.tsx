
import { Hero } from "@/components/Hero";
import { WhatIsIAthon } from "@/components/WhatIsIAthon";
import { TargetAudience } from "@/components/TargetAudience";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Challenges } from "@/components/Challenges";
import { Mentors } from "@/components/Mentors";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { Certification } from "@/components/Certification";
import { FAQ } from "@/components/FAQ";
import { Partners } from "@/components/Partners";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero id="hero" />
      <WhatIsIAthon id="what-is-iathon" />
      <TargetAudience id="target-audience" />
      <Benefits id="benefits" />
      <HowItWorks id="how-it-works" />
      <Challenges id="challenges" />
      <Mentors id="mentors" />
      <SocialProof id="social-proof" />
      <Pricing id="pricing" />
      <Certification id="certification" />
      <FAQ id="faq" />
      <Partners id="partners" />
      <Footer />
    </div>
  );
};

export default Index;

