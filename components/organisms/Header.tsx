"use client";

import { useEffect, useState } from "react";
import { InputSearch } from "@/components/molecules/shared/InputSearch";
import { NavMenu } from "@/components/molecules/NavMenu";
import { Brand } from "@/components/molecules/shared/Brand";
import { Heart, ListOrdered, LogOut, ShoppingCart, UserCircleIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { signOut , useSession } from "next-auth/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [keyword, setKeyword] = useState<string | undefined>(undefined);
  //const { data: session } = useSession();

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Brand />
        <NavMenu />
        <InputSearch
          placeholder="Rechercher un produit"
          value={keyword}
          setValue={setKeyword}
        />
        <div className="flex flex-row items-center gap-4">
          <Heart className="hover:text-violet-50 hover:cursor-pointer" />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <ShoppingCart className="hover:text-violet-50 hover:cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Articles</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>O article</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {
          (<div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn" />
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-xs">
                  <DropdownMenuItem>
                    <UserCircleIcon className="border w-40 h-12"/>
                    <div className="px-1 py-2">
                      <h4 className="font-semibold">Safidy RAMAROSON</h4>
                      <h6 className="text-base mb-1 text-wrap">safidyramaroson.patrick@gmail.com</h6>
                      <Link href="/change-password" className="text-blue-600 font-semibold text-base mt-1">changer le mot de passe</Link>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="py-2">
                    <ListOrdered />
                    Mes commandes
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut />Déconnexion
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};