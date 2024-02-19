import { SidebarLink } from "@/components/SidebarItems";
import { Cog, HomeIcon, User } from "lucide-react";

type AdditionalLinks = {
  title: string;
  links: SidebarLink[];
};

export const defaultLinks: SidebarLink[] = [
  { href: "/dashboard", title: "Dashboard", icon: HomeIcon },
  { href: "/account", title: "Perfil", icon: User },
  { href: "/settings", title: "Configurações", icon: Cog },
];

export const additionalLinks: AdditionalLinks[] = [];
