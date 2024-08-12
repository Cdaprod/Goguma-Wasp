import { type AuthenticatedOperationFor } from '../wrappers.js';
import { getAliases as getAliases_ext } from 'wasp/ext-src/queries';
import { getReport as getReport_ext } from 'wasp/ext-src/queries';
export type GetAliases_ext = typeof getAliases_ext;
export declare const getAliases: AuthenticatedOperationFor<GetAliases_ext>;
export type GetReport_ext = typeof getReport_ext;
export declare const getReport: AuthenticatedOperationFor<GetReport_ext>;
