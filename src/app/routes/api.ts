import { Router } from 'express'
import { getFeeds } from '../controllers/Feeds'

const APIRouter = Router()

APIRouter.get('/feed', getFeeds)

export default APIRouter