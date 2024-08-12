import { prisma } from 'wasp/server'

import { getReport } from '../../../../../src/queries.js'


export default async function (args, context) {
  return (getReport as any)(args, {
    ...context,
    entities: {
      Report: prisma.report,
      User: prisma.user,
    },
  })
}
