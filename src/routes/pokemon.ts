
import { Elysia } from 'elysia'

export const pokemonController = new Elysia({ prefix: "/pokemon" })
    .get("/:pokemonName", async (context) => {
        const { params: { pokemonName } } = context
        try {
            const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => res.json())

            return new Response(JSON.stringify({ data: pokemonData }), { status: 200 })
        } catch (err) {
            throw Error(err instanceof Error ? err.message : 'Server Error')
        }
    })