import { Logo } from "@/components/atoms/shared/Logo";
import { Label } from "@/components/ui/label";

type AuthSectionHeaderType = {
    title: string;
    subTitle?: string;
}


function AuthSectionHeader({
    title, subTitle
}: AuthSectionHeaderType) {
    return (
        <>
            <div className="flex flex-row gap-4">
                <Logo />
                <Label className="text-2xl font-bold">VestiGO</Label>
            </div>
            {/**Auth title, subTitle atoms */}
            <div className="mt-5">
                <h4 className="text-2xl font-bold">
                    {title}
                </h4>
                <h6 className="mt-2">
                    {subTitle}
                </h6>
            </div>
        </>
    )
}

export { AuthSectionHeader }