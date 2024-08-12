import { prisma } from 'wasp/server';
import { createAuthenticatedOperation, } from '../wrappers.js';
import { createAlias as createAlias_ext } from 'wasp/ext-src/actions';
import { createReport as createReport_ext } from 'wasp/ext-src/actions';
import { deleteAlias as deleteAlias_ext } from 'wasp/ext-src/actions';
import { updateReport as updateReport_ext } from 'wasp/ext-src/actions';
// PUBLIC API
export const createAlias = createAuthenticatedOperation(createAlias_ext, {
    User: prisma.user,
    Alias: prisma.alias,
});
// PUBLIC API
export const createReport = createAuthenticatedOperation(createReport_ext, {
    User: prisma.user,
    Report: prisma.report,
    Alias: prisma.alias,
});
// PUBLIC API
export const deleteAlias = createAuthenticatedOperation(deleteAlias_ext, {
    User: prisma.user,
    Alias: prisma.alias,
});
// PUBLIC API
export const updateReport = createAuthenticatedOperation(updateReport_ext, {
    User: prisma.user,
    Report: prisma.report,
});
//# sourceMappingURL=index.js.map