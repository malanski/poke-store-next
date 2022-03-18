import Link from 'next/link'
import React from 'react'
import useFetchPokemon from '../pages/api/pokeApi'
import styles from '../styles/Home.module.scss'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

export default function PokemonCard({ pokemon }) {
    const { name } = pokemon
    const { result, error } = useFetchPokemon(name)
  

    if (error) return <h1>Something went wrong!</h1>
    if (!result) return <div className={styles.loading}><h1>Loading...</h1></div>

    return (
        <Link href={`/pokemon/${name}`} >
            <a className={styles.card}>

                <div className={styles.namecard}>
                    <img
                        src={result.sprites.front_default}
                        alt={name}
                        className={styles.pokeIcon}
                    />
                    <h2 className={styles.pokename}>{name}</h2>
                </div>

                <img
                    src={result.sprites.front_shiny}
                    alt={name}
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
    )
}