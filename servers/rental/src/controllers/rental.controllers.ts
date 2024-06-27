import { RequestHandler } from 'express'
import z from 'zod'

import { Request } from '../schemas/rental.schema'
import * as rentalServices from '../services/rental.services'

export const createRental: RequestHandler<
  any,
  any,
  z.infer<typeof Request.Body.CreateRental>
> = (request, response) => {
  throw new Error('Not Implemented')
}

export const fetchRentals: RequestHandler<
  any,
  any,
  any,
  z.infer<typeof Request.Query.FetchRentals>
> = async (request, response) => {
  const rentals = await rentalServices.fetchRentals(request.query)

  return response.status(200).json(rentals)
}

export const fetchRental: RequestHandler = (request, response) => {
  throw new Error('Not Implemented')
}

export const patchRental: RequestHandler<
  any,
  any,
  z.infer<typeof Request.Body.PatchRental>
> = (request, response) => {
  throw new Error('Not Implemented')
}

export const deleteRental: RequestHandler = (request, response) => {
  throw new Error('Not Implemented')
}