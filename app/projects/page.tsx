import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";
import Entry from "@/app/components/Entry";

export const metadata: Metadata = {
  title: "Projects | Olive Whitley",
};

export default function ProjectsPage() {
  return (
    <PageContent
      sections={[
        {
          id: "ecoscoop",
          title: "EcoScoop",
          content: (
            <Entry
              title="Sustainability news app for Android"
              date="May 2026"
              points={[
                "Built an Android app that parses RSS feeds into an accessible, card-based UI with Glide image caching.",
                "Designed an environmental impact dashboard alongside a scrollable news feed.",
                "Pair-programmed with a teammate using clean git workflows and demoed the app to 20+ students.",
                "Wrote 25+ JUnit unit tests and 15+ Espresso UI tests covering RSS parsing and API failure handling.",
              ]}
              tags={["Java", "Android Studio", "XML layouts", "Gradle", "JUnit", "Espresso"]}
            />
          ),
        },
        {
          id: "dungeon-crawler",
          title: "Dungeon Crawler",
          content: (
            <Entry
              title="ASCII roguelike in Java"
              date="May 2025"
              points={[
                "Built a dungeon crawler with 5+ levels, progressive difficulty, and a color-coded ASCII UI.",
                "Designed an object-oriented architecture with Player, Enemy, Board, and Dungeon classes.",
                "Randomized enemy placement and item spawning across difficulty tiers.",
                "Wrote 20+ JUnit tests for movement, collision detection, and scoring.",
              ]}
              tags={["Java", "JUnit", "OOP"]}
            />
          ),
        },
      ]}
    />
  );
}
