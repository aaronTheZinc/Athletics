import redis from "redis"
import { config } from "../config"

// const redisPort = 2000

const client = redis.createClient(config.redisPort)

// Check If value is Cached
const CheckForCachedValue = async (key: string): Promise<string> => {
    return ""
}

// Get cached Value
const CacheValue = async (key: string, value: string, TTL: number): Promise<boolean> => client.setex(key, TTL, value)