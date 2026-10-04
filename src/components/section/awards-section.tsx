import { Award, Trophy } from "lucide-react";
import { DATA } from "@/data/resume";

export default function AwardsSection() {
  return (
    <section id="awards" className="flex min-h-0 flex-col gap-y-5">
      <h2 className="text-xl font-bold">{DATA.sections.awards.heading}</h2>
      <ul className="grid gap-3 sm:grid-cols-2">
        {DATA.awards.map((award) => (
          <li
            key={`${award.event}-${award.year}`}
            className="flex min-h-28 items-start gap-4 rounded-xl border border-violet-400/30 bg-card/70 p-4 shadow-sm transition-colors hover:border-violet-500/50 hover:bg-violet-400/5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-violet-400/30 bg-violet-400/10">
              <Award className="size-5 text-violet-700 dark:text-violet-300" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-semibold text-foreground">{award.title}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-violet-400/10 px-2 py-0.5 text-xs font-medium text-violet-800 dark:text-violet-200">
                  <Trophy className="size-3" aria-hidden />
                  {award.year}
                </span>
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                {award.event}
              </span>
              <span className="mt-1 block text-xs font-medium text-muted-foreground/80">
                {award.organization}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
