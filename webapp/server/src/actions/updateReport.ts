import { prisma } from 'wasp/server'

import { updateReport } from '../../../../../src/actions.js'


export default async function (args, context) {
  return (updateReport as any)(args, {
    ...context,
    entities: {
      User: prisma.user,
      Report: prisma.report,
    },
  })
}
