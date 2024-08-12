import { type ActionFor } from './core';
import { CreateAlias_ext } from 'wasp/server/operations/actions';
import { CreateReport_ext } from 'wasp/server/operations/actions';
import { DeleteAlias_ext } from 'wasp/server/operations/actions';
import { UpdateReport_ext } from 'wasp/server/operations/actions';
export declare const createAlias: ActionFor<CreateAlias_ext>;
export declare const createReport: ActionFor<CreateReport_ext>;
export declare const deleteAlias: ActionFor<DeleteAlias_ext>;
export declare const updateReport: ActionFor<UpdateReport_ext>;
