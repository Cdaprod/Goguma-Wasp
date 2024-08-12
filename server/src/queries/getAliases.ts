import { prisma } from 'wasp/server'

import { getAliases } from '../../../../../src/queries.js'


export default async function (args, context) {
  return (getAliases as any)(args, {
    ...context,
    entities: {
      Alias: prisma.alias,
      User: prisma.user,
    },
  })
}
