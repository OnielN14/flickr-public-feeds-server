import { Router } from 'express'
import flickrSDK, { PublicPhotoFeed } from 'flickr-sdk'

const APIRouter = Router()

APIRouter.get('/feed', async (req, res) => {
  const feeds = new flickrSDK.Feeds()
  const feedsResult = await feeds.publicPhotos({...req.query})

  res.json((feedsResult.body as unknown as PublicPhotoFeed).items)
})

export default APIRouter