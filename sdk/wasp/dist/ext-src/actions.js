import { HttpError } from 'wasp/server';
export const createAlias = async (args, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    ;
    return context.entities.Alias.create({
        data: {
            name: args.name,
            userId: context.user.id
        }
    });
};
export const createReport = async (args, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    ;
    return context.entities.Report.create({
        data: {
            title: args.title,
            content: args.content,
            alias: {
                connect: { id: args.aliasId }
            },
            image: args.image,
            pdf: args.pdf,
            user: {
                connect: { id: context.user.id }
            }
        }
    });
};
export const deleteAlias = async ({ aliasId }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    ;
    const alias = await context.entities.Alias.findUnique({
        where: { id: aliasId }
    });
    if (alias.userId !== context.user.id) {
        throw new HttpError(403);
    }
    ;
    await context.entities.Alias.delete({
        where: { id: aliasId }
    });
};
export const updateReport = async ({ reportId, updatedTitle, updatedContent, updatedImage, updatedPdf }, context) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    ;
    const report = await context.entities.Report.findUnique({
        where: { id: reportId },
        include: { user: true }
    });
    if (report.userId !== context.user.id) {
        throw new HttpError(403);
    }
    ;
    return context.entities.Report.update({
        where: { id: reportId },
        data: {
            title: updatedTitle,
            content: updatedContent,
            image: updatedImage,
            pdf: updatedPdf
        }
    });
};
//# sourceMappingURL=actions.js.map