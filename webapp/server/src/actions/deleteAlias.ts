import { prisma } from 'wasp/server'

import { deleteAlias } from '../../../../../src/actions.js'


export default async function (args, context) {
  return (deleteAlias as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      Alias: prisma.alias,
    },
  })
}
