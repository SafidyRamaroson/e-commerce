import { Logo } from "@/components/atoms/shared/Logo";
import Link from "next/link";


function Brand(){
    return(
    <Link href="/" aria-label="VestiGo" title="VestiGo" className="inline-flex items-center">
      <Logo />
      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
        VestiGo
      </span>
    </Link>
    )
}

export {  Brand }