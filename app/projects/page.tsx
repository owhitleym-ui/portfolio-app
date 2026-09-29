import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";

export const metadata: Metadata = {
  title: "Projects | Olive Whitley",
};

// TODO: replace with this page's real section headings
export default function ProjectsPage() {
  return (
    <PageContent
      sections={[
        { id: "projects", title: "Projects" },
      ]}
    />
  );
}
