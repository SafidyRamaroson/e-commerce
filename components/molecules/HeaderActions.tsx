"use client";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

function HeaderActions (){
  return (
    <div className="flex gap-4">
      <Heart />
      <ShoppingCart />
    </div>
  );
};

export { HeaderActions }