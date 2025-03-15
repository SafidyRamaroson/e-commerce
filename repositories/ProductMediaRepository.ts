import { PrismaClient, Prisma, ProductMedia } from "@prisma/client";


export class ProductMediaRepository {
    #prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.#prisma = prisma;
    }

    async createMany(arg: { data: Prisma.ProductMediaCreateManyArgs["data"]}): Promise<Prisma.BatchPayload> {
        return this.#prisma.productMedia.createMany(arg);
    }

    async updateMany(arg: { where: Prisma.ProductMediaWhereInput; data: Prisma.ProductMediaUpdateManyArgs["data"] }): Promise<Prisma.BatchPayload> {
        return this.#prisma.productMedia.updateMany(arg);
    }

    async findOne(arg: { where: Prisma.ProductMediaWhereInput; include?: Prisma.ProductMediaInclude }): Promise<ProductMedia | null> {
        return this.#prisma.productMedia.findFirst(arg);
    }

    async isExist(arg: { where: Prisma.ProductMediaWhereInput }): Promise<boolean> {
        const count = await this.#prisma.productMedia.count({ where: arg.where });
        return count > 0;
    }
}