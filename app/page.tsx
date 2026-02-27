// app/page.tsx

import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { WelcomeOverlay } from "@/components/welcomeOverlay";

const HeroSlider = dynamic(
  () => import("@/components/hero-slider").then((mod) => ({ default: mod.HeroSlider })),
  {
    // Remove ssr:true (not needed in client components)
    loading: () => <div className="h-screen bg-background" />,
  }
);

const ServicesSection = dynamic(
  () => import("@/components/services-section").then((mod) => ({ default: mod.ServicesSection })),
  {
    loading: () => <div className="min-h-screen bg-background" />,
  }
);

const MilestonesSection = dynamic(
  () => import("@/components/milestones-section").then((mod) => ({ default: mod.MilestonesSection })),
  {
    loading: () => <div className="min-h-[400px] bg-background" />,
  }
);

const BlogSection = dynamic(
  () => import("@/components/blog-section").then((mod) => ({ default: mod.BlogSection })),
  {
    loading: () => <div className="min-h-screen bg-background" />,
  }
);

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="min-h-[600px] bg-background" />,
  }
);

const LocationSection = dynamic(
  () => import("@/components/location-section").then((mod) => ({ default: mod.LocationSection })),
  {
    loading: () => <div className="min-h-[600px] bg-background" />,
  }
);
const WhyBelaSection = dynamic(
  () => import("@/components/why-bela").then((mod) => ({ default: mod.WhyUsSection })),
  {
    loading: () => <div className="min-h-[500px] bg-background" />,
  }
);


const Footer = dynamic(
  () => import("@/components/footer").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => <div className="min-h-[400px] bg-background" />,
  }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomeOverlay duration={1500} />
      <Header />
      <HeroSlider />
      <ServicesSection />
      <WhyBelaSection />
      <MilestonesSection />
      <BlogSection />
      <TestimonialsSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
