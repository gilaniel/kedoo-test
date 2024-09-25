import Audience1 from '../../assets/audience-1.png';
import Audience2 from '../../assets/audience-2.png';
import Audience3 from '../../assets/audience-3.png';

import AudienceItem from './audience-item';

//

export function AudienceSection() {
  return (
    <>
      <AudienceItem title="Full content management" bgImage={Audience1}>
        Don’t get lost in analytics. Turn numbers into winning content strategy! Our data-powered
        content management service takes care of your content across all distribution channels. With
        localisation specialists that ensure your story resonates globally and content experts that
        develop, monitor and refine plans based on real-time insights from algorithms and big data,
        you can rest assured that your content is always ahead of the curve.
      </AudienceItem>

      <AudienceItem title="Content Monetisation" isRight bgImage={Audience2}>
        Not only do we manage your content, we can also unlock its full earning potential. By
        leveraging our network of established advertising agencies and brand partners, our ad sales
        team Kedoo Media sources and secures highly targeted ads that suits your viewers perfectly
        and fits within your content naturally. Let us create a powerful revenue generator for you!
      </AudienceItem>

      <AudienceItem title="Smart ad campaigns" bgImage={Audience3}>
        There’s more! Kedoo Media offers comprehensive support throughout the entire ad campaign.
        We’ll collaborate with you from brief analysis to final production. We’ll brainstorm ideas,
        refine scripts, film and edit the video with you, to ensure sponsored ads and product
        placements seamlessly integrate into your content the way you envision it. Trust us to keep
        your audience engaged and brand partnerships successful.{' '}
      </AudienceItem>
    </>
  );
}

export default AudienceSection;
