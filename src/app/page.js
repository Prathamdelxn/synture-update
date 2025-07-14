import About from "@/components/AboutUs";
import Contact from "@/components/ContactUs";
import Footer from "@/components/Footer";
import JobBoardPage from "@/components/HeroSection";

import Header from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonial";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <JobBoardPage />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}