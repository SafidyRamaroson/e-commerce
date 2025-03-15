"use client";

import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/atoms/shared/ProductImage";
import { HeroSection } from "../organisms/HeroSection";
import { FeaturedProducts } from "../organisms/FeaturedProducts";
import { TestimonialsSection } from "../organisms/TestimonialsSection";
import { Footer } from "../organisms/Footer";

export default function HomeTemplate() {
  return (
    <>
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 min-h-[50vh] md:min-h-[80vh]">
        <div className="h-[50vh] md:h-screen w-full md:mt-0 mt-6">
          <ProductImage
            alt="Trend 1"
            src="ucvhdm0h5u4k43b1ltmz"
            className="bg-violet-50 h-full w-full object-cover rounded-md md:rounded-none "
            height={600}
          />
        </div>

        <div className="pt-8 md:pt-24 pl-4 md:pl-16 pr-4 md:pr-16 flex flex-col justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-wrap">
            Profitez de nos promotions limitées
          </h3>
          <p className="mt-4 text-base md:text-lg opacity-90">
            Bénéficiez de remises allant jusqu’à 10 % sur une sélection d’articles, valable jusqu’au 5 mars
          </p>
          <Button
            label="Découvrir les offres"
            size="lg"
            className="mt-6 w-full md:w-auto"
          />
        </div>
      </div>
      <FeaturedProducts />
      <TestimonialsSection />
      <Footer />
    </>
  );
}