import { Dispatch, SetStateAction } from "react";
import { default as ReactSelect } from "react-select";

export type OptionSelectType = {
    value: number | string;
    label: string;
};

export type SelectProps = {
    options: OptionSelectType[];
    value: OptionSelectType | null;
    setValue: Dispatch<SetStateAction<OptionSelectType | null>>;
};

function Select({ options, value, setValue }: SelectProps) {
    return (
        <ReactSelect
            options={options}
            value={value}
            isClearable
            theme={(theme) => ({
                ...theme,
                colors: {
                    ...theme.colors,
                    primary: "hsl(258, 83%, 45%)", 
                    primary25: "hsl(250, 100%, 97%)", 
                    primary50: "hsl(220, 14.3%, 95.9%)",
                },
            })}
            onChange={(selected) => setValue(selected)}
            className="my-2 border-0 w-full"
        />
    );
}

export { Select };
