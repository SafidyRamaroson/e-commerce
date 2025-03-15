"use client";

import { cn } from "@/utils/tailwind";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { InputProps } from "@/components/ui/input";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

// T extends FieldValues ==> T == FormSchema
type FormFieldProps<T extends FieldValues> = InputProps & {
  htmlFor: string;
  label: string;
  name: Path<T>;
  className?: string;
  required?: boolean;
  register: UseFormRegister<T>;
  errorMessage?: string;
};

function FormField<T extends FieldValues>({
  htmlFor,
  label,
  name,
  className,
  required = false,
  register,
  errorMessage,
  ...props
}: FormFieldProps<T>) {
  
  const registerOptions = 
    props.type === "number"
      ? { valueAsNumber: true, required }
      : { required };

  return (
    <div className={cn("mt-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={htmlFor}
        {...register(name, registerOptions)}
        className={cn(
          errorMessage &&
            "border-destructive ring-offset-destructive focus-visible:ring-destructive focus-visible:border-destructive"
        )}
        {...props}
      />
      {errorMessage && (
        <span
          role="alert"
          className="text-base font-roboto text-destructive text-wrap mt-3"
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default FormField;
