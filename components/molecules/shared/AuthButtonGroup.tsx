import { Button } from "@/components/ui/button";
import Link from "next/link";



function AuthButtonGroup() {
    return (
        <>
            <Link
                href="/auth/lookup"
                aria-label="sign up"
            >
                <Button
                    label="Rejoins-nous"
                />
            </Link>
            <Link
                href="/auth/lookup"
                aria-label="sign in"
            >
                <Button
                    label="S'identifier"
                    variant="outline"
                />
            </Link>
        </>
    )
}

export { AuthButtonGroup }