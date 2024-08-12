import { HttpError } from 'wasp/server';
export const getAliases = async (args, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    return context.entities.Alias.findMany({
        where: {
            userId: context.user.id
        }
    });
};
export const getReport = async ({ id }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    const report = await context.entities.Report.findUnique({
        where: { id, userId: context.user.id },
        include: { alias: true, user: true }
    });
    if (!report) {
        throw new HttpError(404, `Report with id: ${id} not found for the current user`);
    }
    return report;
};
//# sourceMappingURL=queries.js.map