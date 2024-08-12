import express from 'express'

import auth from 'wasp/core/auth'

import createAlias from './createAlias.js'
import createReport from './createReport.js'
import deleteAlias from './deleteAlias.js'
import updateReport from './updateReport.js'
import getAliases from './getAliases.js'
import getReport from './getReport.js'

const router = express.Router()

router.post('/create-alias', auth, createAlias)
router.post('/create-report', auth, createReport)
router.post('/delete-alias', auth, deleteAlias)
router.post('/update-report', auth, updateReport)
router.post('/get-aliases', auth, getAliases)
router.post('/get-report', auth, getReport)

export default router
