import type { PropsWithChildren } from 'react';
import { PillTag } from './PillTag';
import { PillLink } from './PillLink';

type ProjectOverviewProps = {
  client: string;
  title: string;
  period: string;
  ctaLink: string;
  subtitle: string;
  tags: string[];
  cardClasses?: string;
  ctaMsg?: string;
};

export const ProjectOverview = ({
  client,
  period,
  title,
  subtitle,
  tags,
  ctaLink,
  children,
  ctaMsg,
  cardClasses = '',
}: PropsWithChildren<ProjectOverviewProps>) => {
  const tagColors = ['bg-hn-pink', 'bg-hn-blue', 'bg-hn-green', 'bg-hn-yellow'];
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex justify-between text-lg">
        <p>{client}</p>
        <p>{period}</p>
      </div>
      <div
        className={`backdrop-blur-xl flex flex-col rounded-lg border ${cardClasses} group dark:from-black/25 dark:to-black/15 dark:bg-gradient-to-tr`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex gap-4">
            {tags.map((tag, index) => (
              <PillTag
                key={`pill-tag-${index}`}
                className={`${tagColors[index % tagColors.length]} text-black`}
              >
                {tag}
              </PillTag>
            ))}
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:fill-current fill-none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center p-4">
          <div className="flex flex-col gap-8 p-4 dark:text-white text-black">
            <h3 className="font-bold text-4xl">{title}</h3>
            <p>{subtitle}</p>
            <PillLink
              href={ctaLink}
              className="bg-white text-black flex items-center gap-1"
            >
              {ctaMsg ? (
                <span>{ctaMsg}</span>
              ) : (
                <>
                  Read More
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
                </>
              )}
            </PillLink>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
