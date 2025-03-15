"use client";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateProductSchema, CreateProductSchemaType } from "@/schemas/products/CreateProductSchema";
import FormField from "@/components/molecules/shared/FormField";
import { Select , OptionSelectType} from "@/components/molecules/shared/Select";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";
import { useUploadImage } from "@/hooks/use-upload-image";
import { ProductImageList } from "../sheets/ProductImageList";

const AddNewProductForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductSchemaType>({
    mode: "onSubmit",
    resolver: zodResolver(CreateProductSchema),
  });

  const [errorImage, setErrorImage] = useState<string>("");
  const { add, resources } = useUploadImage();
  const [results, setResults] = useState<any>(null);
  const [categoryValue, setCategoryValue] = useState<OptionSelectType | null>(null);

  const categoryOptions: OptionSelectType[] = [
    { label: "Matériels Informatique", value: 1 },
    { label: "Matériels de bureau", value: 2 },
  ];

  useEffect(() => {
    if (categoryValue) {
      setValue("categoryId", categoryValue.value as number, { shouldValidate: true });
    }
  }, [categoryValue, setValue]);

  useEffect(() => {
    if (results?.info) {
      const { public_id, format, resource_type, type, original_filename } = results.info;
      const currentUploadImage = {
        public_id,
        format,
        resource_type,
        type,
        original_filename,
      };
      add(currentUploadImage);
    }
  }, [results, add]);

  const onSubmit: SubmitHandler<CreateProductSchemaType> = (data) => {
    if (resources.length === 0) {
      setErrorImage("Veuillez importer au moins une image");
    }
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 space-x-6 max-sm:space-x-0 max-sm:space-y-2">
        <div className="px-4 py-2 rounded-md shadow-sm">
          <FormField
            htmlFor="name"
            label="Désignation"
            type="text"
            name="name"
            register={register}
            errorMessage={errors?.name?.message}
          />
          <FormField
            htmlFor="description"
            label="Description"
            type="text"
            name="description"
            register={register}
            errorMessage={errors?.description?.message}
          />
          <div className="my-2.5">
            <Label>Sélectionner la catégorie</Label>
            <Select options={categoryOptions} value={categoryValue} setValue={setCategoryValue} />
            {categoryValue === null && errors?.categoryId?.message && (
              <span className="text-red-500 font-medium text-base">{errors.categoryId.message}</span>
            )}
          </div>
          {/* create an upload button*/}
          <CldUploadWidget
            uploadPreset="next-cloudinary-signed"
            signatureEndpoint="/api/sign-cloudinary-params"
            options={{
              autoMinimize: true
            }}
          >
            {({ open, results }) => {
              if (results) setResults(results);
              return (
                <div className="my-2.5 flex flex-col gap-2">
                  <div className="flex flex-row items-center justify-between">
                    <Label>Importer les photos du produit</Label>
                    <ProductImageList />
                  </div>
                  <Button
                    onClick={() => open()}
                    label="Cliquez sur ce bouton pour importer les photos"
                    variant="outline"
                    className="text-left text-ellipsis overflow-hidden"
                  />
                </div>
              );
            }}
          </CldUploadWidget>
          {errorImage && <span className="text-red-500 font-medium text-base">{errorImage}</span>}
        </div>

        <div className="px-4 py-2 rounded-lg shadow-sm">
          <FormField
            htmlFor="stock"
            label="Quantité en stock"
            type="number"
            name="stock"
            register={register}
            errorMessage={errors?.stock?.message}
          />
          <FormField
            htmlFor="minimumThreshold"
            label="Seuil minimum"
            type="number"
            name="minimumThreshold"
            register={register}
            errorMessage={errors?.minimumThreshold?.message}
          />
          <FormField
            htmlFor="price"
            label="Prix du produit"
            name="price"
            type="number"
            register={register}
            errorMessage={errors?.price?.message}
          />
        </div>
      </div>
      {/*<div className="flex sm:flex-row max-sm:flex-col justify-end mt-4">
        <Button onClick={handleSubmit(onSubmit)} label="Ajouter le produit" type="submit" />
      </div>*/}
    </form>
  );
};

export { AddNewProductForm };
