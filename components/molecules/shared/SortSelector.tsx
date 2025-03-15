import { OptionSelectType, Select } from "@/components/molecules/shared/Select";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

function SortSelector({
  value,
  onChange,
}: {
  value: OptionSelectType | null;
  onChange: Dispatch<SetStateAction<OptionSelectType | null>>;
}) {
  const sortProductsOptions = [
    { label: "En vedette", value: "En vedette" },
    { label: "Les plus récents", value: "Plus récents" },
    { label: "Prix : décroissant", value: "Décroissant" },
    { label: "Prix: croissant", value: "Croissant" },
  ];

  //State used to toogle width 
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex flex-row items-center gap-2 p-2 transition-width duration-300 ease-in-out ${
        isExpanded ? "w-96" : "w-72"
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <span className="text-lg font-medium flex-shrink-0 whitespace-nowrap">
        Trier par:
      </span>
      <Select
        options={sortProductsOptions}
        setValue={onChange}
        value={value}
      />
    </div>
  );
}

export { SortSelector };