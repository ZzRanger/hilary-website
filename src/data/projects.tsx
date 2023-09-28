import type { ReactNode } from 'react';
import Image from 'next/image';
import { ProjectOverview } from '@/components/ProjectOverview';
import Decension from '@public/zine.png';
import { PillLink } from '@/components/PillLink';
import Planner from '@public/planner.png';
import Lezhin from '@public/lezhin.png';
import TaipeiMetro from '@public/metro-app.png';
import Somasawa from '@public/somasawa.png';

import SystemDlc from '../../public/SYSTE.png';
import Nebula from '../../public/NEBULA LAB.png';

const projects: ReactNode[][] = [
  [
    <ProjectOverview
      client="@nebula-labs"
      title="Nebula Planner"
      tags={['Case Study', 'UX Research', 'UI Design', 'Website']}
      subtitle="Designing a website tool to aid UT Dallas students in planning their four-year degree."
      period="Jan 2023 - March 2023"
      ctaLink="/planner"
    >
      <Image src={Planner} alt="" width="450" className="left right-0" />
    </ProjectOverview>,
    <ProjectOverview
      client="@lezhin-webtoon"
      title="Lezhin Comic App Redesign"
      tags={['Case Study', 'UX Research', 'UI Design', 'Mobile']}
      subtitle="Redesign of Lezhin, a webtoon mobile app to enhance user reading experience."
      period="June 2022 - July 2022"
      ctaLink="/lezhin"
    >
      <Image src={Lezhin} alt="" width="450" className="left right-0" />
    </ProjectOverview>,
    // <ProjectOverview
    //   client="@taipei-mrt"
    //   title="Taipei Metro App"
    //   tags={['Case Study', 'UX Research', 'UI Design', 'Mobile']}
    //   subtitle="Redesign of Taipei Metro App to provide users with an online reloading feature and a modern interface."
    //   period="Dec 2023 - Jan 2023"
    //   ctaLink="#"
    //   ctaMsg="Coming Soon"
    // >
    //   <Image src={TaipeiMetro} alt="" width="450" className="left right-0" />
    // </ProjectOverview>,
    <ProjectOverview
      client="@rafiki-africa"
      title="Somasawa"
      tags={['Case Study', 'UX Research', 'B2C', 'UI Design', 'Mobile']}
      subtitle="Development of an app for Kenyan teachers in Rafiki Africa to help streamline their workflows for students"
      period="June 2023 - August 2023"
      ctaLink="https://www.notion.so/developforgood/Case-Study-Rafiki-Africa-666b829b2a724943903d0269dca36fcc?pvs=4"
    >
      <Image src={Somasawa} alt="" width="450" className="left right-0" />
    </ProjectOverview>,
  ],
  [
    <ProjectOverview
      client="@nebula-labs"
      title="Nebula Labs"
      tags={['Brand Identity', 'Graphic Design', 'Illustrator', 'InDesign']}
      subtitle="Developing a branding for Nebula Labs, a student organization utilizing technology to assist students."
      period="Jan 2023 - March 2023"
      ctaLink="https://www.hilary-nguyen.com/nebula-labs"
    >
      <Image src={Nebula} alt="" width="350" className="left right-0" />
    </ProjectOverview>,
    <ProjectOverview
      client="@genshinxianxia"
      title="Descension"
      tags={['Branding', 'Printing', 'Packaging', 'Adobe Creative Suite']}
      subtitle="A for-profit magazine project inspired by Genshin Impact and the xianxia genre of Chinese literature."
      period="Dec 2021 - May 2023"
      ctaLink="https://www.hilary-nguyen.com/descension-1"
    >
      <Image src={Decension} alt="" width="375" className="left right-0" />
    </ProjectOverview>,
    // <ProjectOverview
    //   client="@taipei-mrt"
    //   title="System DLC"
    //   tags={['Branding', 'Social Media', 'Printing', 'Adobe Creative Suite']}
    //   subtitle="Creating cyber-punk theme branding and social media for System DLC, a fantasy zine. "
    //   period="Dec 2021 - May 2023"
    //   ctaLink="#"
    //   ctaMsg="Coming Soon"
    // >
    //   <Image src={SystemDlc} alt="" width="375" />
    // </ProjectOverview>,
    <PillLink
      href="https://www.hilary-nguyen.com/playground"
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
