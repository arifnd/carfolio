import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Contact from "@/components/Contact";
import TermsOfService from "@/components/TermsOfService";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Catalog />
        <Contact />
        <TermsOfService />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
