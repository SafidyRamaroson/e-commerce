"use client";

type LayoutSectionHeaderProps = {
  title: string;
  subtitle?: string;
};

function LayoutSectionHeader({ title, subtitle }: LayoutSectionHeaderProps) {
  return (
    <div className="flex flex-col items-start justify-start pl-2 mt-4">
      <h1 className="font-bold font-roboto text-3xl text-primary">{title}</h1>
      {subtitle && (
        <h3 className="font-semibold font-roboto text-base opacity-60 mt-1 text-secondary">{subtitle}</h3>
      )}
    </div>
  );
}

export default LayoutSectionHeader;
