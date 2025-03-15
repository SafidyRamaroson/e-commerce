import { PrismaClient, Prisma, Category } from "@prisma/client";

export class CategoryRepository {
    #prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.#prisma = prisma;
    }

    async createOne(arg: { data: Prisma.CategoryCreateArgs["data"]}): Promise<Category> {
        return this.#prisma.category.create(arg);
    }

    async deleteOne(arg: { where: Prisma.CategoryWhereUniqueInput }): Promise<Category | null> {
        return this.#prisma.category.delete(arg);
    }

    async updateOne(arg: { where: Prisma.CategoryWhereUniqueInput; data: Prisma.CategoryUpdateArgs["data"] }): Promise<Category> {
        return this.#prisma.category.update(arg);
    }

    async findOne(arg: { where: Prisma.CategoryWhereInput; include?: Prisma.CategoryInclude }): Promise<Category | null> {
        return this.#prisma.category.findFirst(arg);
    }

    async findAll(arg: { where?: Prisma.CategoryWhereInput; include?: Prisma.CategoryInclude; skip?: number; take?: number }): Promise<Category[]> {
        return this.#prisma.category.findMany(arg);
    }

    async isExist(arg: { where: Prisma.CategoryWhereInput }): Promise<boolean> {
        const count = await this.#prisma.category.count({ where: arg.where });
        return count > 0;
    }
}