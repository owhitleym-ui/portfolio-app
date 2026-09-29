type SectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-16 min-h-[30vh] scroll-mt-16 md:mb-24 lg:scroll-mt-24">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children && <div className="mt-4">{children}</div>}
    </section>
  );
}
