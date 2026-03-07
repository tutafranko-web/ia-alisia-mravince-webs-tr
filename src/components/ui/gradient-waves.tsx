import { cn } from "@/lib/utils";

export function GradientWaves({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none animate-gradient-wave mix-blend-soft-light",
        className
      )}
      aria-hidden="true"
    />
  );
}
