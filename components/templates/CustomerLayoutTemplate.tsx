import { AuthButtonGroup } from "@/components/molecules/shared/AuthButtonGroup";
import { Header } from "@/components/organisms/Header";
import { LayoutProps } from "@/types/layoutTypes";
import { useState } from "react";
import { useSession } from "next-auth/react";


function CustomerLayoutTemplate({ children }: LayoutProps) {
   
    return (
        <div className="bg-white">
            {
                (
                    <div className="flex items-center justify-end py-2 pr-8 gap-2 bg-violet-50">
                        <AuthButtonGroup />
                    </div>
                )
            }
            <Header />
            <main className="mt-4">{children}</main>
        </div>
    )
}

export { CustomerLayoutTemplate }