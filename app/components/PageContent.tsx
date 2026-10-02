import { ViewTransition } from "react";
import ScrollReveal from "@/app/components/ScrollReveal";
import Section from "@/app/components/Section";

type PageContentProps = {
  sections: { id: string; title: string; content?: React.ReactNode }[];
};

// Each section gets the next Figma palette color as its accent
const ACCENTS = ["var(--lagoon)", "var(--plum)", "var(--sage)", "var(--cocoa)"];

// Shared scrollable content column used by every page.
// On navigation, the old page turns away to reveal the new one (see globals.css).
export default function PageContent({ sections }: PageContentProps) {
  return (
    <ViewTransition exit="page-turn-out" enter="page-turn-in" default="none">
      <ScrollReveal className="flex flex-col">
        {sections.map((section, i) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            accent={ACCENTS[i % ACCENTS.length]}
            prevAccent={i > 0 ? ACCENTS[(i - 1) % ACCENTS.length] : undefined}
          >
            {section.content}
          </Section>
        ))}
      </ScrollReveal>
    </ViewTransition>
  );
}
