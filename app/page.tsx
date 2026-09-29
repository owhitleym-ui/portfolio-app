import PageContent from "@/app/components/PageContent";

export default function Home() {
  return (
    <PageContent
      sections={[
        { id: "about", title: "About me" },
        { id: "skills", title: "Skills" },
        { id: "resume", title: "Resume" },
      ]}
    />
  );
}
