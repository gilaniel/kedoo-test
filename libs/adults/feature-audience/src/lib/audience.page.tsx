import { HeroSection, ImageSection } from '@kedoo/adults/ui-components';

import AudienceSection from './components/audience-section/audience-section';

export function AudiencePage() {
  return (
    <>
      <ImageSection
        title="Audience Management"
        subtitle="Know your audience. Grow your engagement."
        bgImage="/adults/audience/banner.png"
      />

      <div className="container mx-auto">
        <div className="flex flex-col gap-10 text-center py-20">
          <HeroSection title="Big data analytics and consulting" />
          <p>
            Go beyond traditional basic analytics, our advanced big data dashboard offers a holistic
            view of your content across all distribution channels and unparalleled insights into the
            entire digital entertainment landscape. Reveal key trends by country, uncover audience
            preferences and benchmark against competitors, so you can optimise your strategy for
            maximum global impact.
          </p>
        </div>
      </div>

      <AudienceSection />
    </>
  );
}

export default AudiencePage;
