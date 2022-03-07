import dotenv from 'dotenv'

dotenv.config()

const devMode = process.env.MODE === 'dev'

export const port = Number(process.env.PORT) || 3000
export const hostname = devMode ? '0.0.0.0' : '127.0.0.1'
export const dbname = 'marble'
