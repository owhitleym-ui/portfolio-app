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
            <Entry
              title="Accounts Payable Intern"
              subtitle="Vassar College"
              date="Sep 2024 – May 2026"
              points={[
                "Queried and reconciled 200+ financial records across Banner and Workday, identifying discrepancies in transactional data.",
                "Validated financial datasets with Excel pivot tables and VLOOKUP to keep reporting tools accurate.",
                "Organized and archived fiscal documentation to improve retrieval and recordkeeping workflows.",
              ]}
            />
          ),
        },
        {
          id: "organizations",
          title: "Organizations",
          content: (
            <>
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
