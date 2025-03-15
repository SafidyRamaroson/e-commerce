"use client";

import { cn } from "@/utils/tailwind";
import { JSX } from "react";


type StatCardProps = {
    icon: JSX.Element;
    title: string;
    quantity: number;
    className?: string;
}

export default function StatCard({
    icon: Icon, title, quantity ,className = ""
}: StatCardProps ){
    return(
        <div className={cn("flex-1 border py-4 px-4 rounded-md", className)}>
          <div className="flex flex-row items-start gap-4">
            { Icon }
            <div>
              <h3 className="font-bold text-base">{ title }</h3>
              <span>{ quantity }</span>
            </div>
          </div>
        </div>
    )
}