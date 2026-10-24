import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export function MotionSurface({ children, className }: { children: ReactNode; className?: string }) {
  const frame = useRef<number | null>(null);
  const surface = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const resetMotion = () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
      frame.current = null;
      surface.current?.style.setProperty("--tilt-x", "0deg");
      surface.current?.style.setProperty("--tilt-y", "0deg");
    };
    preference.addEventListener("change", resetMotion);
    return () => {
      preference.removeEventListener("change", resetMotion);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--tilt-x", `${(0.5 - y) * 9}deg`);
      element.style.setProperty("--tilt-y", `${(x - 0.5) * 9}deg`);
      element.style.setProperty("--pointer-x", `${x * 100}%`);
      element.style.setProperty("--pointer-y", `${y * 100}%`);
      frame.current = null;
    });
  }
  function reset(event: PointerEvent<HTMLDivElement>) {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = null;
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }
  return <div ref={surface} className={cn("motion-surface", className)} onPointerMove={move} onPointerLeave={reset}>{children}</div>;
}