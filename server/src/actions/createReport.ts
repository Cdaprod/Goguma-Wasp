import { prisma } from 'wasp/server'

import { createReport } from '../../../../../src/actions.js'


export default async function (args, context) {
  return (createReport as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      Report: prisma.report,
      Alias: prisma.alias,
    },
  })
}
