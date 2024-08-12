import { createAction } from './core';
// PUBLIC API
export const createAlias = createAction('operations/create-alias', ['User', 'Alias']);
// PUBLIC API
export const createReport = createAction('operations/create-report', ['User', 'Report', 'Alias']);
// PUBLIC API
export const deleteAlias = createAction('operations/delete-alias', ['User', 'Alias']);
// PUBLIC API
export const updateReport = createAction('operations/update-report', ['User', 'Report']);
//# sourceMappingURL=index.js.map