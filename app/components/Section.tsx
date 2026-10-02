type SectionProps = {
  id: string;
  title: string;
  accent: string;
  // When set, a divider fading from the previous section's color is drawn above
  prevAccent?: string;
  children?: React.ReactNode;
};

export default function Section({ id, title, accent, prevAccent, children }: SectionProps) {
  return (
    <section id={id} className="mb-16 min-h-[30vh] scroll-mt-16 md:mb-24 lg:scroll-mt-24">
      {prevAccent && (
        <div
          aria-hidden="true"
          className="section-divider mb-16 md:mb-24"
          style={{ "--from": prevAccent, "--to": accent } as React.CSSProperties}
        />
      )}
      <h2 data-reveal className="flex items-center gap-3 text-xl font-semibold">
        <span aria-hidden="true" className="size-3 rounded-sm" style={{ background: accent }} />
        {title}
      </h2>
      {children && <div className="mt-6">{children}</div>}
    </section>
  );
}
