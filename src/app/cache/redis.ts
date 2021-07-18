import redis from 'redis'

let client: redis.RedisClient

export default function initRedis () {
  //@ts-ignore
  client = redis.createClient(process.env.REDIS_PORT || 6379)
}


export { client }
