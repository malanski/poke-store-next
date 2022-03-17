import Layout from '../components/layout'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { ArrowLeftIcon, ArrowRightIcon, BellIcon, CheckCircleIcon, EmailIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import Pokemon from './pokemon/[id]'
import {PokeApi} from './api/pokeApi'

export default function Home({ pokemon }) {
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
  return (
    <Layout title="NextJS PokeDex">

      <Head>
        <title>Poke-Store Next.js Project</title>
      </Head>

      

        <ul className={styles.grid}>

          {pokemon.map((item, index) => (
              <li key={index} className={styles.pokelist} >

                  <Link href={`/pokemon/${index + 1}`}>
                      <a className={styles.card}>

                        <div className={styles.namecard}>
                          <img
                              src={item.imageHome}
                              alt={item.name}
                              className={styles.pokeIcon}
                          />
                          <h2 className={styles.pokename}>{item.name}</h2>
                        </div>

                        <img
                            src={item.image}
                            alt={item.name}
                            className={styles.pokeImg}
                        />
                       

                        <p className={styles.price}>150.00$</p>
                        <p className={styles.priceDisc}>119.99$</p>
                        
                        
                        <Button className={styles.buybtn}
                        leftIcon={<CheckCircleIcon  />}
                        iconSpacing='50' colorScheme='teal' variant='solid'>
                        Buy
                        </Button>

                      </a>
                  </Link>
              </li>
            ))}
        </ul>

        <div className={styles.pagination}>
          <IconButton aria-label='Preview' icon={<ArrowLeftIcon />} />
          <IconButton onClick={ () => changePage(page + 1)} aria-label='Preview' icon={<ArrowRightIcon />} />
        </div>

    </Layout>
  )
}
let page = 0

async function changePage(newPage) {
  page = newPage
  const pagination = await pokemon(page)
  Home(pagination.results)
}

export const getStaticProps = async () => {
  const limit = 20

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit * page}`);
  // const res = await fetch('https://pokeapi.co/api/v2/pokemon?=limit150');
  const { results }  = await res.json();

  const pokemon = results.map((pokeMons, index) => {

      const paddedId = ('00' + (index + 1)).slice(-3);

      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
      const imageHome = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${(index + 1)}.png`;
      const season2 = ('00' + (index + 151)).slice(-3)

      return { ...pokeMons, image, imageHome, limit, page };
  });
  return {
      props: { pokemon },
  };

}

