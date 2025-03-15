"use client"

import FormField from "@/components/molecules/shared/FormField";
import { Button } from "@/components/ui/button";
import { ResetPasswordSchema, ResetPasswordType } from "@/schemas/auth/ResetPasswordSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";


function ResetPasswordForm() {

    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordType>({
        mode: "onSubmit",
        resolver: zodResolver(ResetPasswordSchema),
        defaultValues: {
            email: "safidyramaroson.patrick@gmail.com",
            code: "",
            password: "",
            confirmPassword: ""
        }
    });
    const onSubmit: SubmitHandler<ResetPasswordType> = (data) => {
        console.log("reset password", data)
    }

    return (
        <form>
            <FormField
                htmlFor="code"
                label="Code *"
                name="code"
                register={register}
                errorMessage={errors?.code?.message}
            />
            <FormField
                htmlFor="password"
                label="Mot de passe *"
                name="password"
                register={register}
                errorMessage={errors?.password?.message}
                type="password"
            />
            <FormField
                htmlFor="confirmPassword"
                label="Confirmer le mot de passe *"
                name="confirmPassword"
                register={register}
                errorMessage={errors?.confirmPassword?.message}
                type="password"
            />
            <div
                className="flex justify-end mt-8"
            >
                <Button
                    label="Initialiser le mot passe"
                    onClick={handleSubmit(onSubmit)}
                />
            </div>
        </form>
    )
}

export { ResetPasswordForm }