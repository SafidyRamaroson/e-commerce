import { PrismaClient, Prisma, User } from "@prisma/client";

export class UserRepository {
  #prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.#prisma = prisma;
  }

  async createOne(arg: { data: Prisma.UserCreateInput }): Promise<User> {
    return this.#prisma.user.create({ data: arg.data });
  }

  async deleteOne(arg: { where: Prisma.UserWhereUniqueInput }): Promise<User> {
    return this.#prisma.user.delete(arg);
  }

  async updateOne(arg: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    return this.#prisma.user.update(arg);
  }

  async findOne(arg: {
    where: Prisma.UserWhereInput;
    include?: Prisma.UserInclude;
  }){
    console.log("Include utilisé :", JSON.stringify(arg.include, null, 2));
      return this.#prisma.user.findFirst({
        where: arg.where,
        include: {
          ...arg.include,
        },
      });
  }

  async findMany(arg: {
    where?: Prisma.UserWhereInput;
    skip?: number;
    take?: number;
    include?: Prisma.UserInclude;
  }){
    const { where, skip, take, include } = arg;
    return this.#prisma.user.findMany({
      where,
      include: {
        ...include,
      },
      skip,
      take,
    });
  }

  async isExist(arg: { where: Prisma.UserWhereInput }): Promise<boolean> {
    const count = await this.#prisma.user.count({ where: arg.where });
    return count > 0;
  }
}