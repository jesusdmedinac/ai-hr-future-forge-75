import { Hero } from "@/components/Hero";
import { WhatIsIAthon } from "@/components/WhatIsIAthon";
import { TargetAudience } from "@/components/TargetAudience";
import { Benefits } from "@/components/Benefits";
import { Challenges } from "@/components/Challenges";
import { Mentors } from "@/components/Mentors";
import { SocialProof } from "@/components/SocialProof";
import { Pricing } from "@/components/Pricing";
import { Certification } from "@/components/Certification";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhatIsIAthon />
      <TargetAudience />
      <Benefits />
      <Challenges />
      <Mentors />
      <SocialProof />
      <Pricing />
      <Certification />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
