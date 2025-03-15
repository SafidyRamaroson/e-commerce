"use client";

import * as React from "react";
import { LogOut,LucideIcon } from "lucide-react";

import { NavMain } from "@/components/ui/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

type Item = {
  title: string;
  url: string;
}

export function AppSidebar({ navMain, ...props }: React.ComponentProps<typeof Sidebar> & { navMain :{
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: Item[]
}[] }) {
  const { state } = useSidebar();
  const [isCollapsed, setIsCollapsed] = React.useState<boolean>(true);

  React.useEffect(() => {
    setIsCollapsed(state == "collapsed");
  }, [state]);
  return (
    <Sidebar collapsible="icon" {...props} className="bg-slate-100">
      <SidebarHeader className="mt-4">
        <div className="flex flex-row gap-2 items-center">

          {!isCollapsed && <p className="text-wrap text-violet-600 text-2xl w-full text-center my-4">InnoShop</p>}
        </div>
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild>
          <div className="flex flex-row gap-2" onClick={() =>{
            window.location.href = '/'
            document.cookie = "authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }}>
            <LogOut />
              <span>Déconnexion</span>
          </div>
        </SidebarMenuButton>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
