import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const accents = {
  blue: "border-sky-400/50",
  purple: "border-violet-400/50",
  teal: "border-teal-400/40",
};

export default function PublicationsSection() {
  return (
    <section id="publications" className="flex min-h-0 flex-col gap-y-5">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold">{DATA.sections.publications.heading}</h2>
        <div className="h-px flex-1 bg-border" />
        <a href="/publications" className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground">
          More details
        </a>
      </div>
      <div className="grid gap-3">
        {DATA.publications.map((publication) => (
          <article
            key={publication.title}
            className={`flex flex-col gap-3 rounded-xl border bg-card/50 p-4 sm:flex-row sm:items-start sm:justify-between ${accents[publication.accent]} ${publication.featured ? "ring-1 ring-border/50" : ""}`}
          >
            <div className="flex flex-col gap-1.5">
              <h3 className={`font-semibold leading-snug ${publication.featured ? "sm:text-base" : "text-sm"}`}>
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sky-300"
                >
                  {publication.title}
                </a>
              </h3>
              <p className="text-sm text-muted-foreground">{publication.venue}</p>
            </div>
            <Badge variant="outline" className="w-fit shrink-0 border-border text-muted-foreground">
              {publication.status}
            </Badge>
          </article>
        ))}
      </div>
    </section>
  );
}
