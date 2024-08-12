import { prisma } from 'wasp/server'

import { createAlias } from '../../../../../src/actions.js'


export default async function (args, context) {
  return (createAlias as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      Alias: prisma.alias,
    },
  })
}
