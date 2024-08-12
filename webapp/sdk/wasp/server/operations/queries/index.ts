
import { prisma } from 'wasp/server'
import {
  type UnauthenticatedOperationFor,
  createUnauthenticatedOperation,
  type AuthenticatedOperationFor,
  createAuthenticatedOperation,
} from '../wrappers.js'
import { getAliases as getAliases_ext } from 'wasp/ext-src/queries'
import { getReport as getReport_ext } from 'wasp/ext-src/queries'

// PRIVATE API
export type GetAliases_ext = typeof getAliases_ext

// PUBLIC API
export const getAliases: AuthenticatedOperationFor<GetAliases_ext> =
  createAuthenticatedOperation(
    getAliases_ext,
    {
      Alias: prisma.alias,
      User: prisma.user,
    },
  )


// PRIVATE API
export type GetReport_ext = typeof getReport_ext

// PUBLIC API
export const getReport: AuthenticatedOperationFor<GetReport_ext> =
  createAuthenticatedOperation(
    getReport_ext,
    {
      Report: prisma.report,
      User: prisma.user,
    },
  )

