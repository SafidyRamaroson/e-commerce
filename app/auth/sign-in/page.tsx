"use client"

import { AuthSectionHeader } from "@/components/molecules/auth/AuthSectionHeader";
import { SignInForm } from "@/components/organisms/admin/forms/SignInForm";
import { Suspense } from 'react';

export default function signInPage() {

    return (
        <div className="min-h-screen grid grid-cols-6">
            <div className="col-start-3 col-span-2 pt-16 pl-8">
                <AuthSectionHeader
                    title="Identifiez-vous pour accéder à votre compte"
                    subTitle="Nous avons envoyé un code à safidyramaroson.patrick@gmail.com"
                />
                {/**
                 * Sign in form
                 * code , password
                 */}
                <Suspense>
                    <SignInForm />
                </Suspense>
            </div>
        </div>
    )
}