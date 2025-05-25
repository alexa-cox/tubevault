import { PRIMARY_CTA } from '../../utils/appConstants';
import { HERO } from './data/homeConstants';
import CtaSection from './sections/cta/CtaSection';
import FaqSection from './sections/faq/FaqSection';
import FeaturesSection from './sections/features/FeaturesSection';
import HeroSection from './sections/hero/HeroSection';
import PricingSection from './sections/pricing/PricingSection';
import ShowcaseSection from './sections/showcase/ShowcaseSection';
import TestimonialSection from './sections/testimonial/TestimonialSection';

const Home = () => {
  return (
    <main>
      <HeroSection
        heading={HERO.heading}
        description={HERO.description}
        CTA={PRIMARY_CTA}
        imgSource={HERO.imageSrc}
        imgAlt={HERO.imgAlt}
      />
      <FeaturesSection CTA={PRIMARY_CTA} />
      <ShowcaseSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <CtaSection CTA={PRIMARY_CTA} />
    </main>
  );
};

export default Home;
