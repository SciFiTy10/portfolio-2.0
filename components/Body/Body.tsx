import React from "react";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Team } from "./Team";
import { Contact } from "./Contact";

export const Body: React.FC = (): JSX.Element => {
  return (
    <main>
      <Hero />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Services />
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <Team />
      <Contact />
    </main>
  );
};
