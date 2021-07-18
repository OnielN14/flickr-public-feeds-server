import redis, { RedisClient } from 'redis-mock'

let client: RedisClient
export default function initRedis () {
  //@ts-ignore
  client = redis.createClient()
}


export { client }