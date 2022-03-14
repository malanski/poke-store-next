import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import { IconButton, Button } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { PokeApi } from './api/pokeApi'
import { useEffect, useState } from 'react'

const Pokemon = (props) => {
  const name = props.name;
  const id = props.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  
  return (
    <Link href={`/pokemon/${name}`} as={name} id={name}>
      <a className={styles.card}>                                     
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} />
        <p className={styles.price}>150.00R$</p>
        <p className={styles.priceDisc}>120.00R$</p>
        
        <Button className={styles.buyBtn}>
          <span>Buy</span>
        </Button>
      </a>
    </Link>
  )
}

export default function Home(props) {
  const limit = 20 

  const [state, setState] = useState({
    loading: true, 
    pokemons: [],
    total: 0,
    currentPage: 0, 
    totalPages: 0,
  })
  useEffect(() => {
    PokeApi.listPokemons(state.currentPage * limit, limit).then(({data}) => {
      setState((prev) => ({
        ...prev,
        loading: false,
        total: data.count,
        totalPages: Math.ceil(data.count / limit),
        pokemons: [...prev.pokemons, ...data.results.map((pokemon, key) => <Pokemon key={key + (prev.pokemons.length+1)} name={pokemon.name} url={pokemon.url} />)]
      }))
    })
  }, [state.currentPage])

  const loadMore = () => {
    let page = state.currentPage

    if ((page + 1) >= state.totalPages) return

    page +=1
    setState((prev) => ({
      ...prev,
      currentPage: page,
    }))
  }

  const loadLess = () => {
    let page = state.currentPage

    if ((page - 1) >= state.totalPages) return

    page -=1
    setState((prev) => ({
      ...prev,
      currentPage: page,
    }))
  }
  return (
    <Layout>
        <Head>
          
          <title>Poke-Store Next App</title>
                    
        </Head>

        <div className={styles.mainsite}>

          <div className={styles.pagination}>            
            <IconButton onClick={loadLess} aria-label='Preview' icon={state.currentPage < state.totalPages &&<ArrowLeftIcon />} />

            <IconButton onClick={loadMore} aria-label='Next' icon={state.currentPage < state.totalPages &&<ArrowRightIcon />} />
          </div>

          <div className={styles.grid}>
           {state.pokemons}
          </div>

        </div>


    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  const { results }  = await res.json();
  const pokemon = results.map((pokeman, id) => {
      const paddedId = ('00' + (id + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      return { ...pokeman, image };
  });
  return {
      props: { pokemon },
  };

}

