import { create } from 'zustand';

type DialogsState = Record<string, { isOpen: boolean; data?: Record<string, any> }>;

type DialogsProps = {
  dialogs: DialogsState;
  openDialog: (dialogName: string, data?: Record<string, any>) => void;
  closeDialog: (dialogName: string) => void;
};

export const useDialogs = create<DialogsProps>((set) => ({
  dialogs: {
    confirmDeleteProduct: { isOpen: false, data: {} },
    confirmDeleteCollection: { isOpen: false, data: {}},
    confirmEditProduct: { isOpen: false, data: {} },
    addNewProduct: { isOpen: false, data: {}},
    addNewCollection: { isOpen: false, data: {}}
  },
  openDialog: (dialogName, data = {}) =>
    set((state) => {
      return {
        dialogs: {
          ...state.dialogs,
          [dialogName]: { isOpen: true, data },
        }
      }
    }),
  closeDialog: (dialogName) =>
    set((state) => ({
      dialogs: {
        ...state.dialogs,
        [dialogName]: { isOpen: false, data: {} },
      },
    })),
}));
