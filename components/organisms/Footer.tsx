import { NavLink } from "@/components/atoms/shared/NavLink";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone } from "lucide-react";

function Footer () {
    return (
        <div className="px-8 py-16 bg-violet-200 min-h-[50vh]">
            <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-12">
                <div className="col-span-1">
                    <h6 className="font-bold">Informations pratiques</h6>
                    <div className="flex flex-col gap-2">
                        <NavLink label="Foire aux questions" href="#" ariaLabel="Foire aux questions" className="text-base text-slate-400 mt-2" />
                        <NavLink label="Conditions générales de vente" href="#" ariaLabel="Conditions générales de vente" className="text-base text-slate-400" />
                        <NavLink label="Politique de retour" href="#" ariaLabel="Politique de retour" className="text-base text-slate-400" />
                    </div>
                </div>
                <div className="col-span-1">
                    <h6 className="font-bold">Contact</h6>
                    <span className="flex flex-row gap-2 text-slate-400 mt-2 text-base">
                        <Mail /> contact@vestiGo.com
                    </span>
                    <span className="flex flex-row gap-2 text-slate-400 mt-2 text-base">
                        <Phone /> +33 59 582 96
                    </span>
                </div>
                <div className="col-span-1">
                    <h6 className="font-bold">Abonnez-vous à notre newsletter</h6>
                    <p className="text-base text-slate-400">Recevez 10 % de remise sur votre première commande.</p>
                    <Input />
                    <Button label="S’abonner" className="w-full mt-4" />
                </div>
            </div>
            <p className="text-center text-wrap mt-12">© {new Date().toDateString()} VestiGo. Tous droits réservés.</p>
        </div>
    )
}

export { Footer }

