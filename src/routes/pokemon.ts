
import { Elysia } from 'elysia'

export const pokemonController = new Elysia({ prefix: "/pokemon" })
    .get("/:pokemonName", async (context) => {
        const { params: { pokemonName } } = context

        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (pokemonData.status !== 200) {
            throw new Error(await pokemonData.text())
        }

        return new Response(JSON.stringify({ data: await pokemonData.json() }), { status: 200 })

    })