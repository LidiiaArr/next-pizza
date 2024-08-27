import {PrismaClient} from '@prisma/client';

// создаем клиент для работы с prisma
const prismaClientSingleton = () => {
    return new PrismaClient();
};
// создания нового соединения с базой данных

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

// создаем клиент для работы с prisma
// schema.prisma схема базы данных какие таблицы и поля 
// 
