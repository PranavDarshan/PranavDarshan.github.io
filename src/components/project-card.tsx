/* eslint-disable @next/next/no-img-element */

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  accent?: "blue" | "teal" | "violet";
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  accent = "blue",
  image,
  video,
  links,
  className,
}: Props) {
  const accents = {
    blue: "border-sky-400/40 bg-sky-400/5",
    teal: "border-teal-400/40 bg-teal-400/5",
    violet: "border-violet-400/40 bg-violet-400/5",
  };

  return (
    <div
      className={cn(
        "flex flex-col h-full border rounded-xl overflow-hidden transition-all duration-200",
        accents[accent],
        href && "cursor-pointer hover:ring-2 hover:ring-muted",
        className
      )}
    >
      {(video || image) && <div className="relative shrink-0">
        <a
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </a>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <a
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </a>
            ))}
          </div>
        )}
      </div>}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-sky-700 dark:hover:text-sky-300"
                >
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            {dates && <time className="text-xs text-muted-foreground">{dates}</time>}
          </div>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
