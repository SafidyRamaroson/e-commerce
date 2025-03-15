import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDialogs } from "@/store/zustand/useDialogs";
import FormField from "@/components/molecules/shared/FormField";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreateCollectionSchema, CreateCollectionType } from "@/schemas/collections/CreateCollection";
import { useMutationApi } from "@/hooks/useMutation";


function AddNewCollectionForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateCollectionType>({
        mode: "onSubmit",
        resolver: zodResolver(CreateCollectionSchema),
    });

    const { closeDialog } = useDialogs();


    const onSubmit: SubmitHandler<CreateCollectionType> = (data) => {
        closeDialog("addNewCollection");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                htmlFor="name"
                label="Nom de la collection"
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
            <DialogFooter className="mt-4">
                <Button label="Annuler" variant="outline" onClick={() => closeDialog("addNewCollection")} />
                <Button onClick={handleSubmit(onSubmit)} label="Ajouter le produit" type="submit" />
            </DialogFooter>
        </form>
    );
}

export { AddNewCollectionForm };
