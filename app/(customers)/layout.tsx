"use client"

import { CustomerLayoutTemplate } from "@/components/templates/CustomerLayoutTemplate";
import type { LayoutProps } from "@/types/layoutTypes";

export default function LayoutCustomer({ children }: LayoutProps ){
    return (
        <CustomerLayoutTemplate>{children}</CustomerLayoutTemplate>
    )
}