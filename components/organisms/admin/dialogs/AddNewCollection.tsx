import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { useDialogs } from "@/store/zustand/useDialogs";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AddNewCollectionForm } from "../forms/AddNewCollection";

function AddNewColectionDialog() {
    const { dialogs, closeDialog } = useDialogs();
    const { isOpen } = dialogs.addNewCollection;

    return (
        <Dialog open={isOpen} onOpenChange={() => closeDialog("addNewCollection")}>
            <DialogContent className="sm:max-w-[425px] max-h-[500px] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Formulaire d'ajout de nouvelle collection </DialogTitle>
                    <DialogDescription>
                        Veuillez remplir les champs ci-dessous pour ajouter une nouvelle collection
                    </DialogDescription>
                </DialogHeader>
                <AddNewCollectionForm />
            </DialogContent>
        </Dialog>
    )
}

export { AddNewColectionDialog }