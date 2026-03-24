import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Founder from "@/components/Founder";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CoreValues />
        <About />
        <Timeline />
        <Founder />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
