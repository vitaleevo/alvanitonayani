import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      <div className="h-px w-16 bg-gold" />
      <h2
        className={cn(
          "font-serif text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl",
          invert ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base leading-8 sm:text-lg",
            invert ? "text-navy-muted" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
