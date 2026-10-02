import { Award, BadgeCheck } from "lucide-react";
import { DATA } from "@/data/resume";

export default function AwardsSection() {
  return (
    <section id="awards" className="flex min-h-0 flex-col gap-y-5">
      <h2 className="text-xl font-bold">{DATA.sections.awards.heading}</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Award className="size-4 text-violet-400" aria-hidden />
            Awards
          </h3>
          <ul className="flex flex-col gap-3">
            {DATA.awards.map((award) => (
              <li key={award} className="border-l-2 border-violet-400/40 pl-3 text-sm leading-relaxed">
                {award}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <BadgeCheck className="size-4 text-teal-400" aria-hidden />
            Certifications
          </h3>
          <ul className="flex flex-col gap-3">
            {DATA.certifications.map((certification) => (
              <li key={certification.href} className="border-l-2 border-teal-400/40 pl-3 text-sm leading-relaxed">
                <a
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-border underline-offset-2 transition-colors hover:text-teal-300"
                >
                  {certification.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
