import FormField from "@/components/molecules/shared/FormField"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { useMutationApi } from "@/hooks/useMutation"
import { SignInSchemaType, SignInSchema } from "@/schemas/auth/SignInSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"



function SignInForm() {

    const userEmail = localStorage?.getItem("userEmail");
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SignInSchemaType>({
        mode: "onSubmit",
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: userEmail as string,
            password: ""
        }
    })

    const router = useRouter();

    const { mutateAsync: signInUser, isPending } = useMutationApi<{ token: string }>({
        endpoint: "/api/auth/sign-in",
        method: "POST",
        onSuccess({ data }) {
            toast({
                title: "Authentification",
                description: `Vous etes authentifié au tant que ${userEmail}`,
            });

            localStorage.removeItem("userEmail");
            localStorage.setItem("userToken", data.token);
            router.push("/new-products")
        },
        onError: () => {
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de l'authentification",
                variant: "destructive",
            });
        },
    })
    const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
        await signInUser(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                htmlFor="password"
                label="Mot de passe *"
                name="password"
                register={register}
                errorMessage={errors?.password?.message}
            />
            <span className="text-base text-primary mt-5">
                <Link
                    href="/auth/reset-password"
                >
                    Mot de passe oublié
                </Link>
            </span>
            <div
                className="flex justify-end mt-8"
            >
                {
                    isPending ? (
                        <Button
                            label="Connexion"
                            onClick={() => handleSubmit(onSubmit)}
                            disabled={isPending}
                            icon={<Loader className="animate-spin" />}
                            iconPosition="left"
                        />
                    ) : (
                        <Button
                            label="Connexion"
                            onClick={() => handleSubmit(onSubmit)}
                        />
                    )
                }
            </div>
        </form>
    )
}

export { SignInForm }