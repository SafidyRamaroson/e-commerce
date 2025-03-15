"use client";

import { AdminLayoutTemplate } from "@/components/templates/AdminLayoutTemplate";
import { LayoutProps } from "@/types/layoutTypes";


export default function LayoutAdmin({
  children
}: LayoutProps) {
  return (
    <AdminLayoutTemplate>{children}</AdminLayoutTemplate>
  )
}
