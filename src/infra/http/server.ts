import { setupApp } from "./config/setupApp"

async function bootstrap() {
  const app = await setupApp();

  const port = process.env.PORT ?? 3333
  app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`)
  })
}

bootstrap()