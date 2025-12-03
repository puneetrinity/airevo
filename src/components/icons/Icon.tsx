import type { LucideIcon } from 'lucide-react';

type IconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
  title?: string;
};

export function Icon({ icon: IconComp, size = 24, className, title }: IconProps) {
  return (
    <IconComp
      size={size}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
      strokeWidth={2}
    />
  );
}
