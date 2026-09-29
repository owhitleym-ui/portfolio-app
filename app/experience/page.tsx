import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";

export const metadata: Metadata = {
  title: "Experience | Olive Whitley",
};

// TODO: replace with this page's real section headings
export default function ExperiencePage() {
  return (
    <PageContent
      sections={[
        { id: "experience", title: "Experience" },
      ]}
    />
  );
}
