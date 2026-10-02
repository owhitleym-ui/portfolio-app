import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";

export const metadata: Metadata = {
  title: "Design | Olive Whitley",
};

// Placeholder frames reserve space for upcoming art and logo work
const FRAME_COLORS = ["var(--lagoon)", "var(--plum)", "var(--sage)", "var(--cocoa)"];

export default function DesignPage() {
  return (
    <PageContent
      sections={[
        {
          id: "design",
          title: "Art & Design",
          content: (
            <>
              <p data-reveal className="leading-relaxed text-black/80">
                UI/UX work, art, and logos, where design and code meet. New pieces coming soon.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {FRAME_COLORS.map((color) => (
                  <div
                    key={color}
                    aria-hidden="true"
                    data-reveal
                    className="aspect-[4/5] rounded-md opacity-20"
                    style={{ background: color }}
                  />
                ))}
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
