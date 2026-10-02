import PageContent from "@/app/components/PageContent";
import { TagList } from "@/app/components/Entry";

export default function Home() {
  return (
    <PageContent
      sections={[
        {
          id: "about",
          title: "About me",
          content: (
            <div className="space-y-4 leading-relaxed text-black/80">
              <p data-reveal>
                I&apos;m a junior at <strong className="text-black">Vanderbilt University</strong>{" "}
                studying Computer Science with a minor in Innovation &amp; Design Strategy. I&apos;m
                interested in UI/UX design and software engineering, especially the space where
                technology and art overlap. On campus, I help bring AI tools into nursing education
                with CHAIN and lead design and marketing for VandyHacks.
              </p>
              <p data-reveal>
                Before transferring to Vanderbilt, I studied Computer Science at Vassar College,
                where I was Communications Director for the CS Majors Committee and co-treasurer for
                the Asian Student Alliance and Club Tennis.
              </p>
              <p data-reveal>
                I&apos;m drawn to innovation and love picking up new technologies, whether that&apos;s
                a new framework, a new design tool, or a new way of solving an old problem. Above
                all, I want what I build to feel intuitive: interfaces that are friendly, easy to
                use, and make sense the moment you see them.
              </p>
            </div>
          ),
        },
        {
          id: "skills",
          title: "Skills",
          content: (
            <div className="space-y-6">
              <SkillGroup label="Languages" tags={["Java", "Python", "OCaml", "C++", "HTML/CSS", "R"]} />
              <SkillGroup
                label="Tools & Platforms"
                tags={[
                  "Figma",
                  "Canva",
                  "Miro",
                  "Android Studio",
                  "Firestore",
                  "GitHub",
                  "GitLab",
                  "LaTeX",
                  "Excel",
                  "Amplify",
                  "Copilot",
                ]}
              />
              <SkillGroup
                label="Spoken"
                tags={["English (fluent)", "Mandarin (learning)", "Latin"]}
              />
            </div>
          ),
        },
      ]}
    />
  );
}

function SkillGroup({ label, tags }: { label: string; tags: string[] }) {
  return (
    <div data-reveal>
      <h3 className="mb-2 font-condensed text-xs tracking-[0.2em] text-black/60 uppercase">
        {label}
      </h3>
      <TagList tags={tags} />
    </div>
  );
}
