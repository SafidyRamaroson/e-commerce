"use client"; // Ajouté si nécessaire pour Next.js avec des composants clients

import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { ProductImage } from "@/components/atoms/shared/ProductImage";
import { HeroStats } from "@/components/molecules/HeroStats";
import { HeroTitle } from "@/components/atoms/shared/HeroTitle";
import { Subtitle } from "@/components/atoms/shared/Subtitle";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0">
      <div className="min-h-[50vh] md:min-h-screen pt-16 md:pt-24 pl-4 md:pl-16 pr-4 md:pr-16 flex flex-col justify-center">
        <HeroTitle text="Bienvenue chez VestiGo" />
        <Subtitle
          text="Découvrez nos collections printemps-été, conçues pour allier élégance et confort."
          className="mt-4"
        />
        <Button
          label="Consulter nos produits"
          icon={<Package />}
          iconPosition="left"
          size="lg"
          className="mt-6 w-full md:w-auto"
        />
        <div className="mt-10">
          <HeroStats />
        </div>
      </div>

      <div className="h-[50vh] md:h-screen w-full md:mt-0 mt-6">
        <ProductImage
          alt="Trend 1"
          src="ucvhdm0h5u4k43b1ltmz"
          className="bg-violet-50 h-full w-full object-cover rounded-md md:rounded-none "
          height={600}
        />
      </div>
    </div>
  );
}

export { HeroSection };