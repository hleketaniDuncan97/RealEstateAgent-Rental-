import { z } from 'zod'

export namespace Request {

  export namespace Query {

    export const FetchLeases = z
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

    export const CreateLease = z
      .object({
        rentalId: z.string(),
        tenantId: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        rentAmount: z.string(),
      })
      .required({
        rentalId: true,
        tenantId: true,
        startDate: true,
        endDate: true,
        rentAmount: true,
      })
  }
}