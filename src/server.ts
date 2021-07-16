import express from 'express'
import dotenv from 'dotenv'
import APIRouter from './routes/api'
dotenv.config()

const appPort = process.env.PORT || 3000
const app = express()

app.use('/api', APIRouter)
app.use('/', (req, res) => {
  res.json({
    name: 'AIA-Fullstack-Test Web Service',
  })
})


app.listen(appPort, () => {
  console.log(`🚀 Running on http://localhost:${appPort}`)
})