import { Body, Eyebrow } from "@/components/ui/Typography";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  className?: string;
  id?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <SectionHeading id={id} className={eyebrow ? "mt-4" : undefined}>
        {title}
      </SectionHeading>
      {intro ? <Body className="mt-4">{intro}</Body> : null}
    </header>
  );
}
