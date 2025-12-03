import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';
import { PoweredBy } from '@/components/sections/PoweredBy';
import { Capabilities } from '@/components/sections/Capabilities';
import { Work } from '@/components/sections/Work';
import { TechStack } from '@/components/sections/TechStack';
import { Faq } from '@/components/sections/Faq';
import { Cta } from '@/components/sections/Cta';
import { Contact } from '@/components/sections/Contact';

export default function Page() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <PoweredBy />
        <Capabilities />
        <Work />
        <TechStack />
        <Faq />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
