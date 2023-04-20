import type { ReactNode } from 'react';
import { ProjectOverview } from '../components/ProjectOverview';
import { PillLink } from '../components/PillLink';

const projects: ReactNode[][] = [
  [
    <ProjectOverview
      client="@nebula-labs"
      title="Nebula Planner"
      tags={['Case Study', 'UX Research', 'UI Design', 'Website']}
      subtitle="Designing a website tool to aid UT Dallas students in planning their four-year degree."
      period="Jan 2023 - March 2023"
      ctaLink="#"
    />,
    <ProjectOverview
      client="@lezhin-webtoon"
      title="Lezhin Comic App Redesign"
      tags={['Case Study', 'UX Research', 'UI Design', 'Mobile']}
      subtitle="Redesign of Lezhin, a webtoon mobile app to enhance user reading experience."
      period="June 2022 - July 2022"
      ctaLink="#"
    />,
    <ProjectOverview
      client="@taipei-mrt"
      title="Taipei Metro App"
      tags={['Case Study', 'UX Research', 'UI Design', 'Mobile']}
      subtitle="Redesign of Lezhin, a webtoon mobile app to enhance user reading experience."
      period="Dec 2023 - Jan 2023"
      ctaLink="#"
    />,
  ],
  [
    <ProjectOverview
      client="@nebula-labs"
      title="Nebula Labs"
      tags={['Brand Identity', 'Graphic Design', 'Illustrator', 'InDesign']}
      subtitle="Developing a branding for Nebula Labs, a student organization utilizing technology to assist students."
      period="Jan 2023 - March 2023"
      ctaLink="#"
    />,
    <ProjectOverview
      client="@genshinxianxia"
      title="Descension"
      tags={['Branding', 'Printing', 'Packaging', 'Adobe Creative Suite']}
      subtitle="A for-profit magazine project inspired by Genshin Impact and the xianxia genre of Chinese literature."
      period="Dec 2021 - May 2023"
      ctaLink="#"
    />,
    <ProjectOverview
      client="@taipei-mrt"
      title="System DLC"
      tags={['Branding', 'Social Media', 'Printing', 'Adobe Creative Suite']}
      subtitle="Creating cyber-punk theme branding and social media for System DLC, a fantasy zine. "
      period="Dec 2021 - May 2023"
      ctaLink="#"
    />,
    <PillLink
      href="/play"
      className="bg-white text-black flex items-center gap-1"
    >
      Proceed to Playground{' '}
      <svg
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.09638 8.29497C3.82302 8.02161 3.82302 7.57839 4.09638 7.30503L6.40141 5L4.09638 2.69497C3.82302 2.42161 3.82302 1.97839 4.09638 1.70503C4.36975 1.43166 4.81297 1.43166 5.08633 1.70503L7.88633 4.50502C8.1597 4.77839 8.1597 5.22161 7.88633 5.49497L5.08633 8.29497C4.81297 8.56834 4.36975 8.56834 4.09638 8.29497Z"
          fill="currentColor"
        />
      </svg>
    </PillLink>,
  ],
];

export default projects;
