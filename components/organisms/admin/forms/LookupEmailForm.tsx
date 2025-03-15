import FormField from "@/components/molecules/shared/FormField";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useMutationApi } from "@/hooks/useMutation";
import { EmailSchema, EmailSchemaType } from "@/schemas/auth/EmailSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";


function LookupEmailForm() {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<EmailSchemaType>({
        mode: "onSubmit",
        resolver: zodResolver(EmailSchema),
    });

    const { mutateAsync: lookupEmail, isPending } = useMutationApi<{ redirect: string }>({
        endpoint: "/api/auth/verify-email",
        method: "POST",
        onError: () => {
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de l'authentification",
                variant: "destructive",
            });
        },
    })

    const router = useRouter();

    const onSubmit: SubmitHandler<EmailSchemaType> = async ({ email }) => {
        const response = await lookupEmail({ email });
        const redirectURI = response.data.redirect;
        //save user email and redirect user to 
        // the next process (login or register)
        localStorage.setItem("userEmail", email);

        router.push(redirectURI);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                htmlFor="email"
                label="Email *"
                name="email"
                register={register}
                errorMessage={errors?.email?.message}
            />
            <p className="text-base mt-6">
                En continuant, j'accepte la <Link href="#" className="underline"> Politique de confidentialité </Link> et aux
                <Link href="#" className="underline"> Conditions d'utilisation </Link> de VestiGo
            </p>
            <div
                className="flex justify-end mt-8"
            >
                {
                    isPending ? (
                        <Button
                            label="Continuer"
                            onClick={() => handleSubmit(onSubmit)}
                            disabled={isPending}
                            icon={<Loader className="animate-spin" />}
                            iconPosition="left"
                        />
                    ) : (
                        <Button
                            label="Continuer"
                            onClick={() => handleSubmit(onSubmit)}
                        />
                    )
                }

            </div>
        </form>
    )
}

export { LookupEmailForm }