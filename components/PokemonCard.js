import Link from 'next/link'
import React from 'react'
import useFetchPokemon from '../pages/api/pokeApi'
import styles from '../styles/Home.module.scss'
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'


export default function PokemonCard({ pokemon }) {

// O que faz isso exatamente, Pucha as informaçãos do result da API???
    const { name, id } = pokemon

    const { result } = useFetchPokemon(name, id)
 
    
    const price = Math.floor(name.length / 2 * 100)
    const priceDisc = price * 0.8

// 

    if (!result) return (
        <div className={styles.loading}>
            <h1>Loading...</h1>
        </div>
    )


    return (
        <Link href={`/pokemon/${result.id}`} >
            <a className={styles.card} title={result.id + " # " + name}>

                <div className={styles.namecard}>
                    
                    
                    <img
                        src={result.sprites.front_default}
                        alt={id}
                        className={styles.pokeIcon}
                    />

                    <h2 className={styles.pokename}>{name} </h2>

                </div>

                <h3 className={styles.pokename}>{result.id} #</h3>

                <img
                    src={result.sprites.front_shiny}
                    alt={result.id}
                    className={styles.pokeImg}
                />
            
                <p className={styles.price}>{price}R$</p>
                <p className={styles.priceDisc}>{priceDisc}R$</p>
                
                <Button className={styles.buybtn}
                    leftIcon={<CheckCircleIcon  />}
                    iconSpacing='50' colorScheme='teal' variant='solid'>
                    Buy
                </Button>
            </a>
        </Link>
    )
}


export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const poke = await res.json();
    const paddedId = (poke.id);
    poke.imageArt = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`;
    poke.imageHome = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`;
    poke.imageAnima = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${poke.id}.gif`;
    poke.imageAnimaBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${poke.id}.gif`;


    return {
        props: { poke },
    };
}

// export const getStaticProps = async () => {
//     const limit = 20

//     // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit * page}`);
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1)*limit}`);
//     const { results }  = await res.json();

//     const pokemon = results.map((pokeMons, index) => {

//         const paddedId = ('00' + (index + 1)).slice(-3);

//         const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
//         const imageHome = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${(index + 1)}.png`;
//         const season2 = ('00' + (index + 151)).slice(-3)

//         return { ...pokeMons, image, imageHome, limit, paddedId };
//     });
//     return {
//         props: { pokemon },
//     };

// }
    