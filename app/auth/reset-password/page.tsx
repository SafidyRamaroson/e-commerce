import { AuthSectionHeader } from "@/components/molecules/auth/AuthSectionHeader";
import { ResetPasswordForm } from "@/components/organisms/admin/forms/Reset-passwordForm";


export default function ResetPasswordPage(){
    return(
        <div className="min-h-screen grid grid-cols-6">
            <div className="col-start-3 col-span-2 pt-16 pl-8">
                <AuthSectionHeader
                    title="Saisis le code pour réinitialiser votre mot de passe"
                    subTitle="Nous avons envoyé un code à safidyramaroson.patrick@gmail.com"
                />
                {/**
                 * Reset password  form
                 * code , password, confirm passwod
                 */}
                <ResetPasswordForm />
            </div>
        </div>
    )
}