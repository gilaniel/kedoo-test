import { TeamPerson } from '@kedoo/shared/utils-interfaces';

import HeroSection from '../hero-section/hero-section';
import TeamCard from '../team-card/team-card';

//

type TeamSectionProps = {
  title: string;
  subtitle: string;
  persons: TeamPerson[];
};

export function TeamSection({ title, subtitle, persons }: TeamSectionProps) {
  return (
    <section className="py-10">
      <HeroSection className="text-center py-10" title={title} subtitle={subtitle} />

      <div className="flex flex-col md:flex-row md:flex-wrap gap-y-5 justify-center">
        {persons.map((person, i) => (
          <TeamCard key={i} person={person} className="sm:basis-1/2 lg:basis-1/3" />
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
