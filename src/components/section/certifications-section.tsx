import { BadgeCheck, ExternalLink } from "lucide-react";
import { DATA } from "@/data/resume";

const providerLogos = {
  AWS: {
    logo: "/logos/aws.svg",
    logoClass: "h-8 w-14 rounded bg-white p-1",
  },
  Udacity: {
    logo: "/logos/udacity.svg",
    logoClass: "size-7",
  },
  Coursera: {
    logo: "/logos/coursera.svg",
    logoClass: "size-7",
  },
};

export default function CertificationsSection() {
  return (
    <section id="certifications" className="flex min-h-0 flex-col gap-y-5">
      <h2 className="text-xl font-bold">{DATA.sections.certifications.heading}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {DATA.certifications.map((certification) => {
          const provider = providerLogos[certification.provider];
          return (
            <li key={certification.href}>
              <a
                href={certification.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-16 items-center gap-3 rounded-xl border border-teal-400/30 bg-teal-400/5 p-3 transition-colors hover:border-teal-500/50 hover:bg-teal-400/10"
              >
                <span className="flex w-16 shrink-0 items-center justify-center">
                  <img
                    src={provider.logo}
                    alt={`${certification.provider} logo`}
                    className={provider.logoClass}
                  />
                </span>
                <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-foreground">
                  {certification.title}
                </span>
                <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-teal-800 dark:group-hover:text-teal-200">
                  <BadgeCheck className="size-4 text-teal-700 dark:text-teal-400" aria-hidden />
                  <ExternalLink className="size-3" aria-hidden />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
