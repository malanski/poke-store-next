import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import useFetchPokemon from './api/pokeApi'

import Pokestore from './pokestore'


export default function Home() {
  
  // const { result, error } = useFetchPokemon()

  const [pageIndex, setPageIndex] = useState(0);
  


  // if (error) return <h1>Something went wrong!</h1>

  // if (!result) return <div className={styles.loading}><h1>Loading...</h1></div>
 
  // const limit = 20
  // const [state, setState] = useState({
  //   loading: true, 
  //   pokemons: [],
  //   total: 0,
  //   currentPage: 0,
  //   totalPages: 0,
  // })
  // useEffect(() => {
  //   pokeApi.listPokemons(state.currentPage * limit, limit).then(({data}) => {
  //     setState((prev) => ({
  //       ...prev,
  //       loading: false, 
  //       total: data.count,
  //       totalPages: Math.ceil(data.count / limit),
  //       pokemons: [...prev.pokemons, ...data.results.map((pokemon, key) => <Pokemon key={key + (prev.pokemons.length+1)} name={pokemon.name} url={pokemon.url} />)]
  //     }))
  //   })
  // }, [state.currentPage])


  // const nextPage = () => {
  //   let page = state.currentPage;

  //   if ((page + 1) >= state.totalPage) return;
  //   page += 1;
  //   setState((prev) => ({
  //     ...prev,
  //     currentPage: page,
  //   }))
  // };

  return (
    <Layout title="NextJS PokeDex">

      <Head>
        <title>Poke-Store Next.js Project</title>
      </Head>



      <Pokestore index={pageIndex}/>



        <div className={styles.pagination}>

          <IconButton
            onClick={() => setPageIndex(pageIndex - 1)}
            aria-label='Preview'
            icon={<ArrowLeftIcon />} 
          />

          <IconButton 
            onClick={() => setPageIndex(pageIndex + 1)}
            aria-label='Preview' 
            icon={<ArrowRightIcon />} 
          />
          
        </div>

    </Layout>
  )
}


