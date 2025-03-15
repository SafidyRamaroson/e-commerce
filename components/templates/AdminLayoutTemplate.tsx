import { adminNavMainData } from "@/data";
import { Bell } from "lucide-react";
import { InputSearch } from "@/components/molecules/shared/InputSearch";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { LayoutProps } from "@/types/layoutTypes";


function AdminLayoutTemplate({ children }: LayoutProps ){
    const [keyword, setKeyword] = useState<string| undefined>(undefined);
    
    return(
        <SidebarProvider>
        <AppSidebar navMain={adminNavMainData} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 justify-between transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 mb-2">
            <div className="flex flex-row items-center gap-2 px-4 h-12">
              <SidebarTrigger className="-ml-1" label="" />
              <InputSearch
                placeholder="Rechercher un produit, client, commande..."
                value={keyword}
                setValue={setKeyword}
              />
            </div>
            <div className="flex flex-row items-center gap-2 mr-2">
              <Bell className="text-primary cursor-pointer" />
              <Avatar>
                <AvatarImage src="https://github.com/shadcn" />
                <AvatarFallback>SR</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="min-h-[100vh] flex-1 rounded-xl  md:min-h-min" >
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
}

export { AdminLayoutTemplate }