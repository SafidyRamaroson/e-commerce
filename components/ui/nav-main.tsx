"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible, CollapsibleTrigger, CollapsibleContent
} from "@/components/ui/collapsible";


import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import Link from "next/link";


export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const currentPath = usePathname();
  const { state } = useSidebar();

  const isCollapsed = () => state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isSubItemActive = item.items?.some((subItem) => subItem.url === currentPath);

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                {
                  item.items?.length != 0 ? (
                    <>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className={`${isCollapsed() && isSubItemActive ? "bg-violet-300 rounded-md" : ""}`}
                        >
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem
                              key={subItem.title}
                              className={`${subItem.url === currentPath ? "bg-violet-300 rounded-md" : ""}`}
                            >
                              <SidebarMenuSubButton
                                asChild>
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : (
                    <Link href={item.url} >
                      <SidebarMenuButton
                        tooltip={item.title}
                        className={`${item.url === currentPath ? "bg-violet-300 rounded-md" : ""}`}
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </Link>
                  )
                }

              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
