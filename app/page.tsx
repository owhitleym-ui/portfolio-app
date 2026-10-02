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
                technology and art overlap.
              </p>
              <p data-reveal>
                Before transferring to Vanderbilt, I studied Computer Science at Vassar College,
                where I was Communications Director for the CS Majors Committee and co-treasurer for
                the Asian Student Alliance and Club Tennis.
              </p>
              <p data-reveal>
                I like building things that work well and feel good to use: clean architecture under
                the hood, with interfaces that feel considered and expressive.
              </p>
            </div>
          ),
        },
        {
          id: "skills",
          title: "Skills",
          content: (
            <div className="space-y-6">
              <SkillGroup label="Languages" tags={["Java", "Python", "OCaml", "C++", "HTML/CSS"]} />
              <SkillGroup
                label="Tools & Platforms"
                tags={["Figma", "Android Studio", "Firestore", "GitHub", "GitLab", "LaTeX", "Excel"]}
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
