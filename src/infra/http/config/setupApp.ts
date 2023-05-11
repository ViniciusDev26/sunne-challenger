import express from "express"
import { setupRoutes } from "./setupRoutes"

export async function setupApp() {
  const app = express()

  app.use(express.json())
  await setupRoutes(app)
  
  return app 
}  