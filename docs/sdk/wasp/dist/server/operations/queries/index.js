import { prisma } from 'wasp/server';
import { createAuthenticatedOperation, } from '../wrappers.js';
import { getAliases as getAliases_ext } from 'wasp/ext-src/queries';
import { getReport as getReport_ext } from 'wasp/ext-src/queries';
// PUBLIC API
export const getAliases = createAuthenticatedOperation(getAliases_ext, {
    Alias: prisma.alias,
    User: prisma.user,
});
// PUBLIC API
export const getReport = createAuthenticatedOperation(getReport_ext, {
    Report: prisma.report,
    User: prisma.user,
});
//# sourceMappingURL=index.js.map