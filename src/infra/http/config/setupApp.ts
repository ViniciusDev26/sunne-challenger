import express, { NextFunction, Request, Response } from "express"
import { setupRoutes } from "./setupRoutes"
import { setupLogs } from "./setupLogs"
import { setupBodyParse } from "./setupBodyParse"
import { setupErrorHandler } from "./setupErrorHandler"


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.name)
  res.status(500).send()
}

export async function setupApp() {
  const app = express()
  
  await setupBodyParse(app)
  await setupLogs(app)
  await setupRoutes(app)
  await setupErrorHandler(app)
    
  return app
}  