
import { prisma } from 'wasp/server'
import {
  type UnauthenticatedOperationFor,
  createUnauthenticatedOperation,
  type AuthenticatedOperationFor,
  createAuthenticatedOperation,
} from '../wrappers.js'
import { createAlias as createAlias_ext } from 'wasp/ext-src/actions'
import { createReport as createReport_ext } from 'wasp/ext-src/actions'
import { deleteAlias as deleteAlias_ext } from 'wasp/ext-src/actions'
import { updateReport as updateReport_ext } from 'wasp/ext-src/actions'

// PRIVATE API
export type CreateAlias_ext = typeof createAlias_ext

// PUBLIC API
export const createAlias: AuthenticatedOperationFor<CreateAlias_ext> =
  createAuthenticatedOperation(
    createAlias_ext,
    {
      User: prisma.user,
      Alias: prisma.alias,
    },
  )

// PRIVATE API
export type CreateReport_ext = typeof createReport_ext

// PUBLIC API
export const createReport: AuthenticatedOperationFor<CreateReport_ext> =
  createAuthenticatedOperation(
    createReport_ext,
    {
      User: prisma.user,
      Report: prisma.report,
      Alias: prisma.alias,
    },
  )

// PRIVATE API
export type DeleteAlias_ext = typeof deleteAlias_ext

// PUBLIC API
export const deleteAlias: AuthenticatedOperationFor<DeleteAlias_ext> =
  createAuthenticatedOperation(
    deleteAlias_ext,
    {
      User: prisma.user,
      Alias: prisma.alias,
    },
  )

// PRIVATE API
export type UpdateReport_ext = typeof updateReport_ext

// PUBLIC API
export const updateReport: AuthenticatedOperationFor<UpdateReport_ext> =
  createAuthenticatedOperation(
    updateReport_ext,
    {
      User: prisma.user,
      Report: prisma.report,
    },
  )
