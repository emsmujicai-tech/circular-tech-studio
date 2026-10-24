import type { ReactNode } from "react";
import { MotionSurface } from "@/components/motion-surface";
import { ServiceIcon, type ServiceIconName } from "@/components/service-icons";

export function IconCard({ icon, title, children, tag }: { icon: ServiceIconName; title: string; children: ReactNode; tag?: string }) {
  return <MotionSurface className="smart-tile flex h-full flex-col rounded-lg border bg-card p-6">
    {tag && <span className="text-xs font-medium uppercase tracking-widest text-accent">{tag}</span>}
    <ServiceIcon name={icon} />
    <h3 className="smart-title mt-3 text-xl font-semibold leading-snug">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
  </MotionSurface>;
}