import FormField from "@/components/molecules/shared/FormField"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"
import { useMutationApi } from "@/hooks/useMutation"
import { RegisterSchema, RegisterSchemaType } from "@/schemas/auth/RegisterForm"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"

function SignUpForm() {

    const userEmail = localStorage?.getItem("userEmail") 
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<RegisterSchemaType>({
        mode: "onSubmit",
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            code: "",
            email: userEmail as string,
            password: ""
        }
    });

    const router = useRouter();

    const { mutateAsync: signUpUser, isPending } = useMutationApi<{ redirect: string }>({
        endpoint: "/api/auth/verify-otp",
        method: "POST",
        onError: () => {
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de l'authentification",
                variant: "destructive",
            });
        },
    })

    const onSubmit: SubmitHandler<RegisterSchemaType> = async(data) => {
            const response = await signUpUser(data);
            if(response.success) {
                localStorage.removeItem("userItem");
                router.push("/auth/sign-in")
            }else {
                toast({
                    title: "Erreur",
                    description: "Code invalide ou expiré",
                    variant: "destructive",
                });
            }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormField
                htmlFor="code"
                label="Code *"
                name="code"
                register={register}
                errorMessage={errors?.code?.message}
            />
            <div className="grid grid-cols-2 gap-x-8">
                <FormField
                    htmlFor="lastName"
                    label="Nom de famille *"
                    name="lastName"
                    register={register}
                    errorMessage={errors?.lastName?.message}
                />
                <FormField
                    htmlFor="firstName"
                    label="Prénoms *"
                    name="firstName"
                    register={register}
                    errorMessage={errors?.firstName?.message}
                />
            </div>
            <FormField
                htmlFor="password"
                label="Mot de passe *"
                name="password"
                register={register}
                errorMessage={errors?.password?.message}
            />
            <div
                className="flex justify-end mt-8"
            >
                {
                    isPending ? (
                        <Button
                            label="Créer un compte"
                            onClick={() => handleSubmit(onSubmit)}
                            disabled={isPending}
                            icon={<Loader className="animate-spin" />}
                            iconPosition="left"
                        />
                    ): (
                        <Button
                            label="Créer un compte"
                            onClick={() => handleSubmit(onSubmit)}
                        />
                    )
                }
            </div>
        </form>
    )
}

export { SignUpForm }