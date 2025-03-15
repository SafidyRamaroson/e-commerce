"use client"

import { AuthSectionHeader } from "@/components/molecules/auth/AuthSectionHeader";
import { LookupEmailForm } from "@/components/organisms/admin/forms/LookupEmailForm";

export default function LookupPage() {
    return (
        <div className="min-h-screen grid grid-cols-6">
            <div className="col-start-3 col-span-2 pt-16 pl-8">
                <AuthSectionHeader
                    title="Saisis ton adresse e-mail pour nous rejoindre ou te connecter"
                    subTitle="Madagascar"
                />
                <div className="mt-2">
                    <LookupEmailForm />
                </div>
            </div>
        </div>
    )
}