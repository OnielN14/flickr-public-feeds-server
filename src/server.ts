import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import APIRouter from './routes/api'
import initRedis from './cache/redis';
dotenv.config()

;(() => {
  try {
    initRedis()

    const appPort = process.env.PORT || 3000
    const app = express()
    
    app.use(morgan('combined'))
    app.use('/api', APIRouter)
    app.use('/', (req, res) => {
      res.json({
        name: 'Flickr\'s Feeds Web Service',
      })
    })
    
    app.listen(appPort, () => {
      console.log(`🚀 Running on http://localhost:${appPort}`)
    })

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
