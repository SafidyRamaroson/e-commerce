"use client";
import { cn } from "@/utils/tailwind";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLinkProps = {
  href: string;
  label: string;
  ariaLabel: string;
  className?: string;
}

function NavLink({ href, label, ariaLabel, className = "" }: NavLinkProps){
  const [activedLink, setActivedLink] = useState<string | null>(null);
  const path = usePathname();

  useEffect(() => {
    setActivedLink(path)
  }, [path]);
  
  return (
    <Link 
    href={href}
    aria-label={ariaLabel} 
    onClick={() => setActivedLink(href)}
    className={cn(`${path === href ? "text-primary":""}`, className)}
    >
      {label}
    </Link>
  );
};

export { NavLink }