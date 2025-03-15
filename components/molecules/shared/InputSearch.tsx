"use client";

import { Input } from "@/components/ui/input";
import React from "react";

type InputSearchProps = {
  placeholder: string;
  value: string | undefined;
  setValue: (value: string) => void;
};

function InputSearch({ value, placeholder, setValue }: InputSearchProps) {
  return (
    <div className="relative flex items-center w-full sm:w-56">
      <span className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-violet-800 text-white rounded-full py-1 px-2 text-base mt-[2px] font-bold">
        Ctrl K
      </span>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="rounded-full w-full h-[40px] pl-4 pr-10 text-base bg-white-50 bg-violet-50"
      />
    </div>
  );
}

export { InputSearch };
