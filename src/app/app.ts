import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import APIRouter from './routes/api'

const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use('/api', APIRouter)
app.use('/', (req, res) => {
  res.json({
    name: 'Flickr\'s Feeds Web Service',
  })
})

export default app
