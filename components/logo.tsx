import { Aperture } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Aperture className="size-6" strokeWidth={1.5} />
      <span className="font-heading text-lg">
        Sahar Amjad
      </span>
    </span>
  );
}
