import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useDeleteCollection } from "@/hooks/collections/useDeleteCollection";
import { useDialogs } from "@/store/zustand/useDialogs";


function ConfirmDeleteProduct() {
    const { dialogs, closeDialog } = useDialogs();
    const { isOpen, data } = dialogs.confirmDeleteCollection;
    const collectionId = data?.id;

    const { mutate: deleteProduct, isPending } = useDeleteCollection(collectionId);
   
    const handleConfirmButton = () => {
        deleteProduct();
        closeDialog("confirmDeleteCollection");
    }

    return (
        <Dialog open={isOpen} onOpenChange={() => !isOpen && closeDialog("confirmDeleteCollection")}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Confirmer la suppression</DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer ce produit ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        label="Annuler"
                        variant="outline"
                        onClick={() => closeDialog("confirmDeleteCollection")}
                        disabled={isPending}
                    />
                    <Button
                        onClick={() => handleConfirmButton()}
                        label="Confirmer"
                        disabled={isPending}
                    />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { ConfirmDeleteProduct };
