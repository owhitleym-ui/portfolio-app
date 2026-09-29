import Section from "@/app/components/Section";

type PageContentProps = {
  sections: { id: string; title: string; content?: React.ReactNode }[];
};

// Shared scrollable content column used by every page
export default function PageContent({ sections }: PageContentProps) {
  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {section.content}
        </Section>
      ))}
    </div>
  );
}
