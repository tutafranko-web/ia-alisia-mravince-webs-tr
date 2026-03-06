import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-3.5 h-3.5",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  showNumber = false,
  className,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: maxStars }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeMap[size],
            i < Math.floor(rating)
              ? "fill-villa-gold text-villa-gold"
              : i < rating
                ? "fill-villa-gold/50 text-villa-gold"
                : "fill-transparent text-villa-gold/30"
          )}
        />
      ))}
      {showNumber && (
        <span className="ml-1.5 font-medium text-foreground">
          {rating}
        </span>
      )}
    </div>
  );
}
