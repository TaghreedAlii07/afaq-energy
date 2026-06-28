import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main dir="ltr">
      <SplashScreen />
      <Navbar lang="en" />
      <Hero lang="en" />
      <About lang="en" />
      <Services lang="en" />
      <Projects lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
      <WhatsAppButton />
    </main>
  );
}