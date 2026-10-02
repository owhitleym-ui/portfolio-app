import type { Metadata } from "next";
import PageContent from "@/app/components/PageContent";
import Entry from "@/app/components/Entry";

export const metadata: Metadata = {
  title: "Experience | Olive Whitley",
};

export default function ExperiencePage() {
  return (
    <PageContent
      sections={[
        {
          id: "education",
          title: "Education",
          content: (
            <>
              <Entry
                title="Vanderbilt University"
                subtitle="B.A. Computer Science, Minor in Innovation & Design Strategy"
                date="Aug 2026 – May 2028"
                points={[
                  "Coursework: Design Discovery, Intermediate Software Design, Probability & Statistics, Intermediate Chinese",
                ]}
              />
              <Entry
                title="Vassar College"
                subtitle="B.A. Computer Science · GPA 3.73"
                date="Aug 2024 – May 2026"
                points={[
                  "Coursework: Analysis of Algorithms, Theory of Computation, Linear Algebra, Differential Equations, Linguistic Anthropology",
                ]}
              />
            </>
          ),
        },
        {
          id: "work",
          title: "Work",
          content: (
            <>
              <Entry
                title="Student Assistant"
                subtitle="Collectively Harnessing AI for Nurses (CHAIN) · Vanderbilt University"
                date="Sep 2026 – Present"
                points={[
                  "Consult with nursing faculty and students to scope AI-driven projects and research AI applications in nursing education.",
                  "Support data-secure project development using Amplify, Vanderbilt's internal generative AI platform.",
                  "Help integrate AI tools like Microsoft Copilot and ChatGPT Edu into School of Nursing workflows.",
                  "Script and edit short-form educational videos on AI in nursing for the Vanderbilt Brightspace page.",
                ]}
              />
              <Entry
                title="Accounts Payable Intern"
                subtitle="Vassar College"
                date="Sep 2024 – May 2026"
                points={[
                  "Reconciled 200+ financial records across Banner and Workday using Excel, identifying discrepancies in transactional data.",
                  "Validated financial datasets with Excel pivot tables and VLOOKUP to keep reporting tools accurate.",
                  "Organized and archived fiscal documentation to improve retrieval and recordkeeping workflows.",
                ]}
              />
            </>
          ),
        },
        {
          id: "organizations",
          title: "Organizations",
          content: (
            <>
              <Entry
                title="VandyHacks"
                subtitle="Design/Marketing Lead · Vanderbilt University"
                date="Sep 2026 – Present"
                points={[
                  "Design the hackathon's visual identity, including logos, posters, and social graphics, in Figma and Canva.",
                  "Manage organizer emails with participants, sponsors, and partners including Oracle and Y Combinator.",
                  "Plan and coordinate logistics for large-scale hackathons alongside the organizing team.",
                ]}
              />
              <Entry
                title="Computer Science Majors Committee"
                subtitle="Communications Director · Vassar College"
                date="Sep 2025 – May 2026"
                points={[
                  "Drafted and sent monthly department-wide announcements using HTML email formatting.",
                  "Coordinated communication between 50+ students and faculty for academic engagement and events.",
                  "Helped run study breaks, department socials, and student programming.",
                ]}
              />
              <Entry
                title="Asian Student Alliance"
                subtitle="Co-Treasurer · Vassar College"
                date="Jan 2026 – May 2026"
                points={[
                  "Tracked expenses and maintained budget spreadsheets for semester programming.",
                  "Helped plan large cultural events including Night Market and Celebrasian, bringing in $2,000+ in ticket sales.",
                ]}
              />
              <Entry
                title="Club Tennis"
                subtitle="Co-Treasurer · Vassar College"
                date="Sep 2025 – May 2026"
                points={[
                  "Wrote a $2,000 budget proposal approved by the school finance association, up from an original $250.",
                  "Logged 25+ travel, equipment, and team meal expenses in detailed spreadsheets.",
                ]}
              />
            </>
          ),
        },
      ]}
    />
  );
}
