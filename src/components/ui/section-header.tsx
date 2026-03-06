import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  overline,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {overline && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-villa-gold mb-4">
          {overline}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
