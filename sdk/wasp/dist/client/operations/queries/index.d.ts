import { type QueryFor } from './core';
import { GetAliases_ext } from 'wasp/server/operations/queries';
import { GetReport_ext } from 'wasp/server/operations/queries';
export declare const getAliases: QueryFor<GetAliases_ext>;
export declare const getReport: QueryFor<GetReport_ext>;
export { buildAndRegisterQuery } from './core';
