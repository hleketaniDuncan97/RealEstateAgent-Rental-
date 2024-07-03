import { Router } from 'express'

import {
  fetchLeases,
} from '../controllers/lease.controllers'
import { Request } from '../schemas/lease.schemas'
import validator from '../middleware/validator'

const router = Router()

router.route('/')
  .get(validator(Request.Query.FetchLeases, 'query'), fetchLeases)
  // .post(validator(Request.Body.CreateLease, 'body'), createLase)

export default router