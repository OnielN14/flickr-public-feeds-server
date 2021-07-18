import dotenv from 'dotenv'
import app from './app/app';
import initRedis from './app/cache/redis';

dotenv.config()
;(() => {
  try {
    initRedis()

    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Running on http://localhost:${process.env.PORT}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()