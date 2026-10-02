import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

const accents = {
  blue: "border-sky-400/40 bg-sky-400/5",
  teal: "border-teal-400/40 bg-teal-400/5",
};

export default function ResearchSection() {
  return (
    <section id="research" className="flex min-h-0 flex-col gap-y-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{DATA.sections.research.heading}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Current work on how generative models fail, and how those failures can be detected.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {DATA.research.map((project) => (
          <article
            key={project.title}
            className={`flex flex-col gap-3 rounded-xl border p-4 ${accents[project.accent]}`}
          >
            <div>
              <p className="text-xs font-medium text-muted-foreground">{project.venue}</p>
              <h3 className="mt-1 font-semibold leading-snug">{project.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
          </article>
        ))}
      </div>
      <div className="flex flex-wrap gap-2" aria-label="Research interests">
        {DATA.researchInterests.map((interest, index) => {
          const colors = [
            "border-sky-400/30 text-sky-700 dark:text-sky-300",
            "border-violet-400/30 text-violet-700 dark:text-violet-300",
            "border-teal-400/30 text-teal-700 dark:text-teal-300",
          ];
          return (
            <Badge key={interest} variant="outline" className={colors[index % colors.length]}>
              {interest}
            </Badge>
          );
        })}
      </div>
      <a
        href="/publications"
        className="inline-flex w-fit items-center gap-1 text-sm font-medium text-sky-700 transition-colors hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200"
      >
        Explore publication details
        <ArrowUpRight className="size-4" aria-hidden />
      </a>
    </section>
  );
}
