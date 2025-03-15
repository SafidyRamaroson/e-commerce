"use client"

import { AuthSectionHeader } from "@/components/molecules/auth/AuthSectionHeader";
import { SignUpForm } from "@/components/organisms/admin/forms/SignUpForm";
import { Suspense } from 'react';

export default function SignUpPage() {
    return (
        <div className="min-h-screen grid grid-cols-6">
            <div className="col-start-3 col-span-2 pt-16 pl-8">
                <AuthSectionHeader
                    title="Faisons de toi un membre VestiGo"
                    subTitle="Nous avons envoyé un code à safidyramaroson.patrick@gmail.com"
                />
                <Suspense>
                    <SignUpForm />
                </Suspense>
            </div>
        </div>
    )
}