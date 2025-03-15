import { create } from "zustand";


type CloudinaryResource = {
    public_id: string;
    format: string;
    resource_type: string;
    original_filename: string;
    type: string;
}

interface State {
    resources: CloudinaryResource[];
}

interface Actions {
    add: (resource: CloudinaryResource) => void;
    remove: (public_id: string) => void;
}

export const useUploadImage = create<State & Actions>((set) => ({
    resources: [],
    add: (resource: CloudinaryResource) => {
        const {
            public_id,
            format,
            resource_type,
            original_filename, 
            type
        } = resource;
        if (public_id && format && resource_type && type && original_filename) {
            return set((state) => ({
                resources: [...state.resources, resource]
            }));
        }
    },
    remove: (public_id: string) =>
        set((state) => ({
            resources: state.resources.filter((resource) => resource.public_id !== public_id)
        }))
}));