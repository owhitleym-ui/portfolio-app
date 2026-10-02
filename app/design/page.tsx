import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import PageContent from "@/app/components/PageContent";
import hackTN from "@/public/design/hacktn-poster.jpg";
import vhLogoGradient from "@/public/design/vandyhacks-logo-gradient.png";
import vhLogoPixel from "@/public/design/vandyhacks-logo-pixel.png";
import princessBride from "@/public/design/princess-bride.jpg";
import poetryNight from "@/public/design/edgar-allan-poetry-night.jpg";
import bloodOnClocktower from "@/public/design/blood-on-clock-tower.jpg";
import clue from "@/public/design/clue.jpg";
import hungerGames from "@/public/design/hunger-games.jpg";
import monsoonWedding from "@/public/design/monsoon-wedding.jpg";
import nightOfScenes from "@/public/design/night-of-scenes.jpg";
import masqueradeBall from "@/public/design/masquerade-ball.jpg";

export const metadata: Metadata = {
  title: "Design | Olive Whitley",
};

type Piece = { src: StaticImageData; alt: string };

// Work grouped by the organization it was made for
const GROUPS: { org: string; role: string; date: string; pieces: Piece[] }[] = [
  {
    org: "VandyHacks",
    role: "Design/Marketing Lead · Vanderbilt University",
    date: "2026",
    pieces: [
      { src: hackTN, alt: "HackTN 2026 hackathon poster" },
      { src: vhLogoGradient, alt: "VandyHacks logo concept with layered gold gradient letters" },
      { src: vhLogoPixel, alt: "VandyHacks logo concept in pixel-art style" },
    ],
  },
  {
    org: "Merely Players",
    role: "Event posters · Vassar College",
    date: "2025 – 2026",
    pieces: [
      { src: princessBride, alt: "Princess Bride movie night poster" },
      { src: poetryNight, alt: "Edgar Allan Poetry Night poster" },
      { src: bloodOnClocktower, alt: "Blood on the Clocktower game night poster" },
      { src: clue, alt: "Clue movie night poster" },
      { src: hungerGames, alt: "Hunger Games Mafia event poster" },
      { src: monsoonWedding, alt: "Monsoon Wedding movie night poster" },
      { src: nightOfScenes, alt: "Night of Scenes theater event poster" },
      { src: masqueradeBall, alt: "Masquerade Ball poster" },
    ],
  },
];

export default function DesignPage() {
  return (
    <PageContent
      sections={[
        {
          id: "design",
          title: "Art & Design",
          content: (
            <>
              <div className="space-y-4 leading-relaxed text-black/80">
                <p data-reveal>
                  I approach design the way I learned to approach art: starting from the
                  fundamentals. Composition, color, contrast, hierarchy, and balance guide where the
                  eye lands first and how it moves across the page, so every layout, poster, and
                  logo reads clearly before it tries to impress.
                </p>
                <p data-reveal>
                  From there, I look for the detail that makes a piece interesting, like a
                  palette pulled from the event&apos;s theme, a playful type treatment, or an
                  illustration that sets the mood. The goal is always work that&apos;s clean and
                  easy to take in, but still has personality. Below are logos and posters
                  I&apos;ve made for the organizations I&apos;ve been part of.
                </p>
              </div>
              <div className="mt-8 space-y-10">
                {GROUPS.map((group) => (
                  <div key={group.org}>
                    <div data-reveal className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-semibold">{group.org}</h3>
                      <p className="font-condensed text-xs tracking-[0.15em] text-black/60 uppercase">
                        {group.date}
                      </p>
                    </div>
                    <p data-reveal className="text-sm text-black/70 italic">
                      {group.role}
                    </p>
                    <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
                      {group.pieces.map((piece) => (
                        <li key={piece.src.src} data-reveal>
                          <a
                            href={piece.src.src}
                            target="_blank"
                            rel="noreferrer"
                            className="block overflow-hidden rounded-md border border-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                          >
                            <Image
                              src={piece.src}
                              alt={piece.alt}
                              placeholder="blur"
                              sizes="(min-width: 1024px) 12vw, (min-width: 640px) 22vw, 30vw"
                              className="aspect-[3/4] w-full object-cover"
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </>
          ),
        },
      ]}
    />
  );
}
