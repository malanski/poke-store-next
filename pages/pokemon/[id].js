import Layout from '../../components/layout';
import styles from '../../styles/Pokemon.module.scss'

import Link from 'next/link';
import Head from 'next/head';
import { Button, TagLeftIcon } from '@chakra-ui/react';
import { ArrowLeftIcon, CheckCircleIcon } from '@chakra-ui/icons';

const Pokemon = ({ pokemon }) => {
    return (
        <Layout title={pokemon.name}>

            <Head>
                <title>The {pokemon.name} Page</title>
            </Head>
            <div className={styles.pokemon}>

                <h1 className={styles.poketitle}>
                    {pokemon.id}# {pokemon.name}
                </h1>

                <div className={styles.ablilities}>
                    <div className={styles.pokeImages}>
                        <img className={styles.pokeImg} src={pokemon.imageArt} title={pokemon.name} alt={pokemon.name} />

                        <img className={styles.pokeImg} src={pokemon.imageHome} title={pokemon.name} alt={pokemon.name + ' digital art'} />
                    </div>

                    <div className={styles.rowpoke}>
                        <div>
                            <p>
                                <span className={styles.specstitle}>Weight:</span>
                                {(pokemon.weight /14).toFixed(2)} kg
                            </p>

                            <p>
                                <span className={styles.specstitle}>Height:</span>
                                {(pokemon.height * 10).toFixed(2)} cm 
                            </p>
                        </div>

                        <div className={styles.animated}>
                            <img className={styles.pokeGif} src={pokemon.imageAnimaBack} title={pokemon.name} alt={pokemon.name + ' Animated Game'} />
                            <img className={styles.pokeGif} src={pokemon.imageAnima} title={pokemon.name} alt={pokemon.name + ' Animated Game'} />
                            
                        </div>
                   </div>

                    <h2 className={styles.specstitle}>Types</h2>
                    {pokemon.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                    ))}

                    <h3 className={styles.specstitle}>Abilities</h3>
                    {pokemon.abilities.map((ability, index) => (
                        <p key={index}>{ability.ability.name}</p>
                    ))}

                    <h3 className={styles.learn}>Your <span className={styles.pokeNome}>{pokemon.name}</span> can learn all those moves:</h3>

                    <ul className={styles.pokemoves}>
                        {pokemon.moves.map((move, index) => (
                        <li className={styles.movelist} key={index}>{move.move.name}</li>
                         ))}
                    </ul>
                    
                    
                </div>
                <p className="mt-10 text-center">

                    <Link href="/">
                        <a>
                            <Button leftIcon={<ArrowLeftIcon />}
                        iconSpacing='50' colorScheme='teal' variant='solid'>
                        Home</Button>
                        </a>
                    </Link>
                </p>
            </div>

        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = (id);
    pokemon.imageArt = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${paddedId}.png`;
    pokemon.imageHome = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${paddedId}.png`;
    pokemon.imageAnima = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${paddedId}.gif`;
    pokemon.imageAnimaBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/${paddedId}.gif`;


    return {
        props: { pokemon },
    };
}

export default Pokemon

