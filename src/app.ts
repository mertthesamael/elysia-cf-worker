import Elysia from "elysia";
import { pokemonController } from "./routes/pokemon";


export const app = new Elysia({ aot: false }).onError(({ code, error }) => {
    console.log(code)
    return new Response(JSON.stringify({ error: error.toString() ?? code }), { status: 500 })
}).use(pokemonController)


app.get('/', () => "Hello from Elysia 🦊")