import { type ActionFor, createAction } from './core'
import { CreateAlias_ext } from 'wasp/server/operations/actions'
import { CreateReport_ext } from 'wasp/server/operations/actions'
import { DeleteAlias_ext } from 'wasp/server/operations/actions'
import { UpdateReport_ext } from 'wasp/server/operations/actions'

// PUBLIC API
export const createAlias: ActionFor<CreateAlias_ext> = createAction<CreateAlias_ext>(
  'operations/create-alias',
  ['User', 'Alias'],
)

// PUBLIC API
export const createReport: ActionFor<CreateReport_ext> = createAction<CreateReport_ext>(
  'operations/create-report',
  ['User', 'Report', 'Alias'],
)

// PUBLIC API
export const deleteAlias: ActionFor<DeleteAlias_ext> = createAction<DeleteAlias_ext>(
  'operations/delete-alias',
  ['User', 'Alias'],
)

// PUBLIC API
export const updateReport: ActionFor<UpdateReport_ext> = createAction<UpdateReport_ext>(
  'operations/update-report',
  ['User', 'Report'],
)
