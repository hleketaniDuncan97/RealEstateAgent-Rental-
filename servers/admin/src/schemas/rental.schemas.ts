import { z } from 'zod'

export namespace Request {

  export namespace Query {

    export const FetchRentals = z
      .object({
        limit: z.number().nonnegative().finite(),
        page: z.number().nonnegative().finite(),
        sortBy: z.array(z.string()),
        order: z.enum(['asc', 'desc']),
        status: z.enum(['vacant', 'occupied'])
      })
      .partial()
  }

  export namespace Body {

    export const CreateRental = z
      .object({
        propertyId: z.string(),
        cost: z.number(),
      })
      .required({ propertyId: true, cost: true })

    export const PatchRental = z
      .object({
        cost: z.string(),
      })
  }
}