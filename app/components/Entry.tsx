type EntryProps = {
  title: string;
  subtitle?: string;
  date: string;
  points?: string[];
  tags?: string[];
};

// A single resume-style item: job, organization, or project
export default function Entry({ title, subtitle, date, points, tags }: EntryProps) {
  return (
    <article data-reveal className="mb-10 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-condensed text-xs tracking-[0.15em] text-black/60 uppercase">{date}</p>
      </div>
      {subtitle && <p className="text-sm text-black/70 italic">{subtitle}</p>}
      {points && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-black/80">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
      {tags && <TagList tags={tags} className="mt-3" />}
    </article>
  );
}

export function TagList({ tags, className = "" }: { tags: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-full border border-black/15 px-3 py-0.5 font-condensed text-xs tracking-wider"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
