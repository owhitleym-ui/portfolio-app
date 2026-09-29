import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";

export const metadata: Metadata = {
  title: "Design | Olive Whitley",
};

// TODO: replace with this page's real section headings
export default function DesignPage() {
  return (
    <PageContent
      sections={[
        { id: "design", title: "Design" },
      ]}
    />
  );
}
