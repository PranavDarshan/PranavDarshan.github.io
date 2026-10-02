import { Award } from "lucide-react";
import { DATA } from "@/data/resume";

export default function AwardsSection() {
  return (
    <section id="awards" className="flex min-h-0 flex-col gap-y-5">
      <h2 className="text-xl font-bold">{DATA.sections.awards.heading}</h2>
      <ul className="flex flex-col gap-3">
        {DATA.awards.map((award) => (
          <li key={award} className="flex items-start gap-3 rounded-xl border border-violet-400/30 bg-violet-400/5 p-4 text-sm leading-relaxed">
            <Award className="mt-0.5 size-4 shrink-0 text-violet-700 dark:text-violet-400" aria-hidden />
            <span>{award}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
