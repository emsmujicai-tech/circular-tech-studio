import laptop from "@/assets/icon-laptop.png";
import desktop from "@/assets/icon-desktop.png";
import tablet from "@/assets/icon-tablet.png";
import phone from "@/assets/icon-phone.png";
import scooter from "@/assets/icon-scooter.png";
import ebike from "@/assets/icon-ebike.png";
import audio from "@/assets/icon-audio.png";
import drone from "@/assets/icon-drone.png";
import repair from "@/assets/icon-repair.png";
import network from "@/assets/icon-network.png";
import recycling from "@/assets/icon-recycling.png";
import motorcycle from "@/assets/icon-electric-motorcycle.png";
import retro from "@/assets/icon-retro.png";
import community from "@/assets/icon-community.png";
import chatbot from "@/assets/smart-chatbot.png";
import receptionist from "@/assets/smart-receptionist.png";
import automation from "@/assets/smart-automation.png";
import branding from "@/assets/smart-branding.png";
import modelling from "@/assets/smart-3d.png";
import visualisation from "@/assets/smart-visualisation.png";

export const serviceIcons = { laptop, desktop, tablet, phone, scooter, ebike, audio, drone, repair, network, recycling, motorcycle, retro, community, chatbot, receptionist, automation, branding, modelling, visualisation };
export type ServiceIconName = keyof typeof serviceIcons;

export function ServiceIcon({ name, compact = false }: { name: ServiceIconName; compact?: boolean }) {
  return <div className={`flex items-center justify-center py-3 ${compact ? "h-28" : "h-44"}`}><img src={serviceIcons[name]} alt="" loading="lazy" width={816} height={816} className="service-icon h-full w-auto max-w-full object-contain" /></div>;
}