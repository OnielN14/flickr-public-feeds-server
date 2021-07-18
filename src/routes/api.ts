import { Router } from 'express'
import flickrSDK, { PublicPhotoFeed } from 'flickr-sdk'
import { v4 } from 'uuid'
import { client as redisClient } from '../cache/redis'

const APIRouter = Router()

/**
 * Cache Expiration (1 hour)
 */
const EXPIRE_DURATION_IN_SECONDS = 3600

APIRouter.get('/feed', async (req, res) => {
  try {
    const feeds = new flickrSDK.Feeds()
    const { request_id, ...restQuery } = req.query
  
    if (request_id) {
      const data = await new Promise<string|null>((resolve, reject) => {
        redisClient.get(request_id as string, (err, data) => {
          if (err) return reject(err)
  
          resolve(data)
        })
      })

      return res.json({ id: request_id, data: JSON.parse(data || '') })
    }

    const id = v4()
    const feedsResult = await feeds.publicPhotos({...restQuery})
    const result = feedsResult.body as unknown as PublicPhotoFeed
    redisClient.set(id, JSON.stringify(result.items))
    redisClient.expire(id, EXPIRE_DURATION_IN_SECONDS)

    res.json({ id, data: (result).items })
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
})

export default APIRouter