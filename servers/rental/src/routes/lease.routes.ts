import { Router } from 'express'

import {
  fetchLease,
  fetchLeases,
  patchLease,
} from '../controllers/lease.controllers'
import { Request } from '../schemas/lease.schemas'
import validator from '../middleware/validator'
import parser from '../middleware/parser'

const router = Router()

router.route('/')
  .get(parser, validator(Request.Query.FetchLeases, 'query'), fetchLeases)

router.route('/:id')
  .get(fetchLease)
  .patch(validator(Request.Body.PatchLease, 'body'), patchLease)

export default router