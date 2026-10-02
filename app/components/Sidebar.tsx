"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedName from "@/app/components/AnimatedName";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/app/components/icons";

const SOCIAL_LINKS = {
  github: "https://github.com/owhitleym-ui",
  linkedin: "https://www.linkedin.com/in/olive-whitley-87319033a",
  email: "mailto:owhitleym@gmail.com",
};

const NAV_ITEMS = [
  { label: "about me", href: "/" },
  { label: "experience", href: "/experience" },
  { label: "projects", href: "/projects" },
  { label: "design", href: "/design" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:shrink-0 lg:flex-col lg:py-24">
      <h1 className="text-4xl leading-tight font-semibold sm:text-5xl">
        <Link href="/">
          <AnimatedName />
        </Link>
      </h1>

      <div className="mt-5 flex items-center gap-5">
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon className="size-5" />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon className="size-5" />
        </a>
        <a href={SOCIAL_LINKS.email} aria-label="Email">
          <MailIcon className="size-5" />
        </a>
      </div>

      <nav className="mt-10 lg:mt-12">
        <ul className="font-condensed text-sm leading-[2.4] tracking-[0.25em]">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Reserved for art / logos — fills the remaining sidebar height */}
      <div className="mt-12 hidden flex-1 lg:block" />
    </aside>
  );
}
