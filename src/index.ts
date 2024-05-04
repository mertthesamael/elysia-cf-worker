import { Env } from "bun"
import { app } from "./app"
import { Context } from "elysia"

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: Context,
    
  ): Promise<Response> {
    // const expectedAuth = `Basic ${btoa(`admin:${env.BASIC_AUTH_PASSWORD}`)}`
    const pathname = new URL(request.url).pathname

    return await app.fetch(request)
  },
}