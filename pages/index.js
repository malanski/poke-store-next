import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon, BellIcon, CheckCircleIcon, EmailIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import Pokemon from './pokemon/[id]'
import useFetchPokemon from './api/pokeApi'
import PokemonCard from '../components/PokemonCard'

export default function Home() {
  const { result, error } = useFetchPokemon()

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <div className={styles.loading}><h1>Loading...</h1></div>
 
  // const limit = 20
  // const [state, setState] = useState({
  //   loading: true, 
  //   pokemons: [],
  //   total: 0,
  //   currentPage: 0,
  //   totalPages: 0,
  // })
  // useEffect(() => {
  //   PokeApi.listPokemons(state.currentPage * limit, limit).then(({data}) => {
  //     setState((prev) => ({
  //       ...prev,
  //       loading: false, 
  //       total: data.count,
  //       totalPages: Math.ceil(data.count / limit),
  //       pokemons: [...prev.pokemons, ...data.results.map((pokemon, key) => <Pokemon key={key + (prev.pokemons.length+1)} name={pokemon.name} url={pokemon.url} />)]
  //     }))
  //   })
  // }, [state.currentPage])

  return (
    <Layout title="NextJS PokeDex">

      <Head>
        <title>Poke-Store Next.js Project</title>
      </Head>

      <div className={styles.grid}>
        {result.results.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>

        <div className={styles.pagination}>
          <IconButton aria-label='Preview' icon={<ArrowLeftIcon />} />
          <IconButton aria-label='Preview' icon={<ArrowRightIcon />} />
        </div>

    </Layout>
  )
}


