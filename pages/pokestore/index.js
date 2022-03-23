import PokemonCard from "../../components/PokemonCard";
import useFetchPokemon from '../api/pokeApi';
import styles from '../../styles/Home.module.scss'
import useSWR from 'swr'
import { Fetcher } from "swr";
import fetcher from '../api/pokeApi'


export default function Pokestore () {


    // const { data } = useSWR(`https://pokeapi.co/api/v2/pokemon?page=${name}`, fetcher);


    //   const { data: result, error } = useSWR(uri, fetcher)


     const { result, error } = useFetchPokemon()
  

    if (error) return <div className={styles.errormess}>Something went wrong!</div>

    // if (error) return <h1>Something went wrong!</h1>

    if (!result) return <div className={styles.loading}><h1>Loading...</h1></div>

// mapeia paginação  e o GRID 

    return (
        <div className={styles.grid}>

        {/* mapeia Cards da poke Store */}
            {result.results.map((pokemon) => (
                <PokemonCard
                        pokemon={pokemon}
                        key={pokemon.name}
                        id={result.id}
                    />
                ))}

        </div>)
  }
  