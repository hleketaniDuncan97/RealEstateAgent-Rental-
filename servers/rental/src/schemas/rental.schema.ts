import { z } from 'zod'

export namespace Request {

  export namespace Query {

    export const FetchRentals = z
      .object({
        limit: z.number().nonnegative().finite(),
        page: z.number().nonnegative().finite(),
        sortBy: z.array(z.string()),
        order: z.enum(['asc', 'desc']),
      })
      .partial()
  }

  export namespace Body {

    export const CreateRental = z
      .object({
        id: z.string(),
      })
      .required({ id: true })

    export const PatchRental = z
      .object({
        id: z.string(),
        status: z.string(),
      })
      .required({ id: true, status: true })
  }
}