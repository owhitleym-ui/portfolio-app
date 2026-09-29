import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";

export const metadata: Metadata = {
  title: "Writing | Olive Whitley",
};

// TODO: replace with this page's real section headings
export default function WritingPage() {
  return (
    <PageContent
      sections={[
        { id: "writing", title: "Writing" },
      ]}
    />
  );
}
