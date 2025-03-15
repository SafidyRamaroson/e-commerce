"use client";

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { ProductCard } from "@/components/molecules/ProductCard";
import Slider from "react-slick";
import { useRef } from "react";

import type SliderType from "react-slick";
import { reactSlick } from "@/configs/reactSlick.config";

function FeaturedProducts() {
  const sliderRef = useRef<SliderType | null>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="px-8 py-16">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-4xl font-bold">Nos produits en vedette</h1>
        <div className="flex flex-row gap-2">
          <ArrowLeftCircleIcon size={40} className="text-black/60 cursor-pointer" onClick={previous} />
          <ArrowRightCircleIcon size={40} className="text-black/60 cursor-pointer" onClick={next} />
        </div>
      </div>
      <div className="mt-8">
        <Slider ref={sliderRef} {...reactSlick} className="w-full">
          {Array(7).fill(null).map((_, idx) => (
            <div className="sm:px-2" key={idx}>
              <ProductCard />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export { FeaturedProducts };