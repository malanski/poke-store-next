import useSWR from 'swr'


 

const fetcher = (url) => fetch(url).then((res) => res.json())
 
const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const PAGE_LIMIT = 8
export default function useFetchPokemon(id) {


  const uri = (id) ? `${API_URL}/${id}` : `${API_URL}?limit=${PAGE_LIMIT}`

  const { data: result, error } = useSWR(uri, fetcher)
  
  return { result, error }
 
}

// export const getServerSideProps = async (context) => {
//   const { id } = context.query;
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//   const poke = await res.json();
//   const paddedId = (poke.id);
//   poke.imageArt = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`;
//   poke.imageHome = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`;
//   poke.imageAnima = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${poke.id}.gif`;
//   poke.imageAnimaBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${poke.id}.gif`;


//   return {  
//       props: { poke },
//   };
// }



// import Axios from 'axios'

// const axios = Axios.create({
//   baseURL: `https://pokeapi.co/api/v2`
// })

// export const PokeApi = {
//   listPokemons: (offset = 0, limit = 20) => {
//     return axios.get('/pokemon', {
//       params: {
//         offset,
//         limit,
//       }
//     })
//   },
//   getPokemonById: (id) => {
//     return axios.get(`/pokemon/${id}`)
//   }
// }



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }



// export const getStaticProps = async () => {
//   const limit = 20

//     // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit * page}`);
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1)*limit}`);
//     const { results }  = await res.json();

//     const pokemon = results.map((pokeMons, index) => {

//         const paddedId = ('00' + (index + 1)).slice(-3);

//         const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
//         const imageHome = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${(index + 1)}.png`;
//         const season2 = ('00' + (index + 151)).slice(-3)

//         return { ...pokeMons, image, imageHome, limit, page };
//     });
//     return {
//         props: { pokemon },
//     };

// }
