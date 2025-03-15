import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useMutationApi } from "@/hooks/useMutation";
import { useDialogs } from "@/store/zustand/useDialogs";
import { ProductDTO } from "@/types/productTypes";

function ConfirmDeleteProduct() {
    const { dialogs, closeDialog } = useDialogs();
    const { toast } = useToast();
    const { isOpen, data } = dialogs.confirmDeleteProduct;
    const productId = data?.id;

    const { mutate: deleteProduct, isPending } = useMutationApi<ProductDTO>({
        endpoint: `/api/products`,
        method: "DELETE",
        queryKeyToInvalidate: "products",
        where: { id: productId },
        onSuccess: () => {
            toast({
                title: "Produit supprimé",
                description: "Le produit a été supprimé avec succès.",
            });

            closeDialog("confirmDeleteProduct");
        },
        onError: () => {
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de la suppression du produit.",
                variant: "destructive",
            });
        }
    });

    const handleConfirmButton = () => {
        if (!productId) {
            toast({
                title: "Erreur",
                description: "ID du produit introuvable.",
            });
            return;
        }

        console.log("Suppression du produit avec ID :", productId);
        deleteProduct({ id: productId });
    };

    return (
        <Dialog open={isOpen} onOpenChange={() => !isOpen && closeDialog("confirmDeleteProduct")}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Confirmer la suppression</DialogTitle>
                    <DialogDescription>
                        Êtes-vous sûr de vouloir supprimer ce produit ?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => closeDialog("confirmDeleteProduct")}
                        disabled={isPending}
                        label="Annuler"
                    />
                    <Button
                        onClick={handleConfirmButton}
                        disabled={isPending}
                        label={isPending ? "Suppression..." : "Confirmer"}
                    />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export { ConfirmDeleteProduct };
