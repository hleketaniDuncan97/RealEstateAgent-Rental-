import express from 'express'

import rentalRouter from './routes'
import catcher from './middleware/catcher'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ limit: 100 * 1000, extended: true }))

app.use('/api/rentals', rentalRouter)

app.use(catcher)

export default app