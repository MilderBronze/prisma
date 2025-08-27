import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(username, email, password, firstName, lastName) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            username,
            firstName,
            lastName
        },
        select: {
            id: true,
            email: true
        }
    });
    console.log(res);
}
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: { username },
        data: {
            firstName, lastName
        }
    });
    console.log(res);
}
// updateUser("Milder", { firstName: "sumit", lastName: "raj" })
async function deleteUser(username) {
    const res = await prisma.user.delete({
        where: { username }
    });
    console.log(res);
}
// deleteUser("Milder");
async function findEntry(username) {
    const res = await prisma.user.findFirst({ where: { username } });
    console.log(res);
}
findEntry("Milder");
//# sourceMappingURL=index.js.map