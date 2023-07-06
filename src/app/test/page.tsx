import ScrollLink from '@/components/ScrollLink';
import { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => (
  <>
    <div
      className="grid place-content-center min-h-screen bg-gray-900 text-gray-50"
      id="section-0"
    >
      <section className="flex flex-col items-center gap-4">
        {/* add href with hash to an elementId */}
        <ScrollLink className="btn" href="#section-1">
          Scroll to Section 1
        </ScrollLink>
      </section>
    </div>
    {/* add id to section */}
    <section
      className="grid place-content-center min-h-screen bg-gray-100"
      id="section-1"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl my-2">Section 1</h2>
        <ScrollLink className="btn" href="#section-0">
          Back to Top
        </ScrollLink>
      </div>
    </section>
  </>
);
export default HomePage;
