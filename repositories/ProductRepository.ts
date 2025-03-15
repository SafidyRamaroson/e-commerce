import { PrismaClient, Prisma, Product, Category, ProductMedia } from "@prisma/client";

export class ProductRepository {
  #prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.#prisma = prisma;
  }

  async createOne(arg: { data: Prisma.ProductCreateInput }): Promise<Product> {
    return this.#prisma.product.create({ data: arg.data });
  }

  async deleteOne(arg: { where: Prisma.ProductWhereUniqueInput }): Promise<Product> {
    return this.#prisma.product.delete(arg);
  }

  async updateOne(arg: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    return this.#prisma.product.update(arg);
  }

  async findOne(arg: {
    where: Prisma.ProductWhereInput;
    include?: Prisma.ProductInclude;
  }): Promise<(Product & { category: Category | null; media: ProductMedia[] }) | null>{
      return this.#prisma.product.findFirst({
        where: arg.where,
        include: {
          category: true,
          media: true,
          ...arg.include,
        },
      });
  }

  async findMany(arg: {
    where?: Prisma.ProductWhereInput;
    skip?: number;
    take?: number;
    include?: Prisma.ProductInclude;
  }): Promise<(Product & { category: Category | null; media: ProductMedia[] })[]> {
    const { where, skip, take, include } = arg;
    return this.#prisma.product.findMany({
      where,
      include: {
        category: true,
        media: true,
        ...include,
      },
      skip,
      take,
    });
  }

  async isExist(arg: { where: Prisma.ProductWhereInput }): Promise<boolean> {
    const count = await this.#prisma.product.count({ where: arg.where });
    return count > 0;
  }
}