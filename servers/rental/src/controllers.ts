import { RequestHandler } from 'express'

import { RequestBody, RequestQuery } from './../schemas/rental.schema'
import z from 'zod'

export const createRental: RequestHandler<
  any,
  any,
  z.infer<typeof RequestBody.CreateRental>
> = (request, response) => {
  throw new Error('Not Implemented')
}

export const fetchRentals: RequestHandler<
  any,
  any,
  any,
  z.infer<typeof RequestQuery.FetchRentals>
> = (request, response) => {
  throw new Error('Not Implemented')
}

export const fetchRental: RequestHandler = (request, response) => {
  throw new Error('Not Implemented')
}

export const patchRental: RequestHandler<
  any,
  any,
  z.infer<typeof RequestBody.PatchRental>
> = (request, response) => {
  throw new Error('Not Implemented')
}

export const deleteRental: RequestHandler = (request, response) => {
  throw new Error('Not Implemented')
}