import { prisma } from "@/configs/prisma.config";
import { CategoryRepository } from "@/repositories/CategoryRepository";
import { ProductMediaRepository } from "@/repositories/ProductMediaRepository";
import { ProductRepository } from "@/repositories/ProductRepository";
import { UserRepository } from "@/repositories/UserRepository";

export abstract class RepositoryProvider {
    public static productRepository: ProductRepository = new ProductRepository(prisma);
    public static categoryRepository: CategoryRepository = new CategoryRepository(prisma);
    public static productMediaRepository: ProductMediaRepository = new ProductMediaRepository(prisma);
    public static userRepository: UserRepository = new UserRepository(prisma);
}
