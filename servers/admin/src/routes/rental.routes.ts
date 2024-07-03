import { Router } from 'express'

import {
  createRental,
  fetchRental,
  fetchRentals,
  patchRental,
} from '../controllers/rental.controllers'
import { Request } from '../schemas/rental.schemas'
import validator from '../middleware/validator'
import parser from '../middleware/parser'

const router = Router()

router.route('/')
  .get(parser, validator(Request.Query.FetchRentals, 'query'), fetchRentals)
  .post(validator(Request.Body.CreateRental, 'body'), createRental)

router.route('/:id')
  .get(fetchRental)
  .patch(validator(Request.Body.PatchRental, 'body'), patchRental)

export default router