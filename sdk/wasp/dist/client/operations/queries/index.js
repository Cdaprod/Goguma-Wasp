import { createQuery } from './core';
// PUBLIC API
export const getAliases = createQuery('operations/get-aliases', ['Alias', 'User']);
// PUBLIC API
export const getReport = createQuery('operations/get-report', ['Report', 'User']);
// PRIVATE API (used in SDK)
export { buildAndRegisterQuery } from './core';
//# sourceMappingURL=index.js.map