import { affiliateLink } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  query?: string;
  variant?: "solid" | "outline";
  className?: string;
};

export function AffiliateButton({
  children,
  query,
  variant = "solid",
  className,
}: Props) {
  return (
    <a
      href={affiliateLink(query)}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "solid"
          ? "bg-ocean text-ocean-foreground shadow-soft hover:bg-ocean/90 hover:shadow-elevated"
          : "border border-ocean/30 bg-transparent text-ocean hover:bg-ocean/10",
        className,
      )}
    >
      {children}
    </a>
  );
}
