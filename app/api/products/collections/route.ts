import { NextRequest, NextResponse } from "next/server";
import CategoryRepository from "../../../../utils/repositories/CategoryRepository";
import { CreateCollectionSchema, CreateCollectionType } from "@/schemas/collections/CreateCollection";
import { ConflictError, NotFoundError, ValidationError } from "@/utils/repositories/errors";
import { findExistingResource, createResponse, handleError } from "@/lib/utils";
import { validateData } from "@/lib/zod/validateData";
import { mapCollections } from "@/utils/DTOMapper/collection.mapper";

export const GET = async (req: NextRequest) => {
    const allCategories = await CategoryRepository.findAll();
    const formattedCollections = mapCollections(allCategories);
    return NextResponse.json(createResponse(formattedCollections, "Liste de toutes les catégories"));
}

export const DELETE = async (req: NextRequest) => {
    const id = req.nextUrl.searchParams.get("id");

    if (!id || isNaN(Number(id))) {
        throw new ValidationError({ message: "L'ID doit être un nombre valide."});
    }

    try {
        const isCategoryExist = await findExistingResource(CategoryRepository, { id: Number(id) });
        if (!isCategoryExist) {
            throw new NotFoundError({
                message: "La catégorie n'existe pas dans la base de données"
            });
        }

        const deletedCategory = await CategoryRepository.deleteOne({ id: Number(id) });
        return NextResponse.json(createResponse(deletedCategory, "La catégorie a été supprimée avec succès"));
    } catch (error) {
        return handleError(error);
    }
}

export const PUT = async (req: NextRequest) => {
    const { name } = await req.json();
    const id = req.nextUrl.searchParams.get('id');

    if (!id || isNaN(Number(id))) {
        throw new ValidationError({ message: "L'ID doit être un nombre valide."}); 
    }

    try {
        const isCategoryExist = await findExistingResource(CategoryRepository, { id: Number(id) });
        if (!isCategoryExist) {
            throw new NotFoundError({
                message: "La catégorie n'existe pas dans la base de données"
            });
        }

        const isCategoryNameExist = await findExistingResource(CategoryRepository, { name });
        if (isCategoryNameExist) {
            throw new ConflictError({
                message: "La catégorie existe déjà dans la base de données"
            });
        }

        const updatedCategory = await CategoryRepository.updateOne({ id: Number(id) }, { name });
        return NextResponse.json(createResponse(updatedCategory, "La catégorie a été modifiée avec succès"));
    } catch (error) {
        return handleError(error);
    }
}

export const POST = async (req: NextRequest) => {
    try {
        const { name, description } = await req.json();
        validateData<CreateCollectionType>({ name, description }, CreateCollectionSchema);
        const isCategoryNameExist = await findExistingResource(CategoryRepository, { name });

        if (isCategoryNameExist) {
            throw new ConflictError({
                message: "La catégorie existe déjà dans la base de données"
            });
        }

        const newCategory = await CategoryRepository.createOne({ name,description });
        return NextResponse.json(createResponse(newCategory, "La catégorie a été ajoutée avec succès."), { status: 201 });
    } catch (error) {
        return handleError(error);
    }
}
