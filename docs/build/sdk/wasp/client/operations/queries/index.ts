import { type QueryFor, createQuery } from './core'
import { GetAliases_ext } from 'wasp/server/operations/queries'
import { GetReport_ext } from 'wasp/server/operations/queries'

// PUBLIC API
export const getAliases: QueryFor<GetAliases_ext> = createQuery<GetAliases_ext>(
  'operations/get-aliases',
  ['Alias', 'User'],
)

// PUBLIC API
export const getReport: QueryFor<GetReport_ext> = createQuery<GetReport_ext>(
  'operations/get-report',
  ['Report', 'User'],
)

// PRIVATE API (used in SDK)
export { buildAndRegisterQuery } from './core'
