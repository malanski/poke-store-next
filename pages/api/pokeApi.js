import Axios from 'axios'

const axios = Axios.create({
  baseURL: `https://pokeapi.co/api/v2`
})

export const PokeApi = {
  listPokemons: (offset = 0, limit = 20) => {
    return axios.get('/pokemon', {
      params: {
        offset,
        limit,
      }
    })
  },
  getPokemonById: (id) => {
    return axios.get(`/pokemon/${id}`)
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
