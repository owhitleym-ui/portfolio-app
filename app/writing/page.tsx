import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";

export const metadata: Metadata = {
  title: "Writing | Olive Whitley",
};

export default function WritingPage() {
  return (
    <PageContent
      sections={[
        {
          id: "writing",
          title: "Writing",
          content: (
            <p data-reveal className="leading-relaxed text-black/80">
              Notes on design, code, and the space between them. Coming soon.
            </p>
          ),
        },
      ]}
    />
  );
}
