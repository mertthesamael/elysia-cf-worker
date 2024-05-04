import Elysia from "elysia";


export const app = new Elysia({ aot: false })
    .get('/', ({ headers }) => {


        return JSON.stringify(headers)

    })