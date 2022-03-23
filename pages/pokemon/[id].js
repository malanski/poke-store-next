import Layout from '../../components/layout';
import styles from '../../styles/Pokemon.module.scss'

import Link from 'next/link';
import Head from 'next/head';
import { Button, TagLeftIcon } from '@chakra-ui/react';
import { ArrowLeftIcon, CheckCircleIcon } from '@chakra-ui/icons';

const Pokemon = ({ poke }) => {
    return (
        <Layout title={poke.name}>

            <Head>
                <title>The {poke.name} Page</title>
            </Head>
            <div className={styles.pokemon}>

                <h1 className={styles.poketitle}>
                    {poke.id}# {poke.name}
                </h1>

                <div className={styles.ablilities}>

                    <div className={styles.pokeImages}>
                        <img className={styles.pokeImg} 
                        src={poke.imageArt} title={poke.name} 
                        alt={poke.name} />

                        <img className={styles.pokeImg} 
                        src={poke.imageHome} title={poke.name} 
                        alt={poke.name + ' digital art'} />
                    </div>

                    <div className={styles.rowpoke}>
                        <div>
                            <p>
                                <span className={styles.specstitle}>Weight:</span>
                                {(poke.weight /14).toFixed(2)} kg
                            </p>

                            <p>
                                <span className={styles.specstitle}>Height:</span>
                                {(poke.height * 10).toFixed(2)} cm 
                            </p>
                        </div>

                        <div className={styles.animated}>

                            <img className={styles.pokeGif} 
                            src={poke.imageAnimaBack} title={poke.name} 
                            alt={poke.name + ' Animated Game'} />

                            <img className={styles.pokeGif} 
                            src={poke.imageAnima} title={poke.name} 
                            alt={poke.name + ' Animated Game'} />
                            
                        </div>
                   </div>

                    <h2 className={styles.specstitle}>Types</h2>
                    {poke.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                    ))}

                    <h3 className={styles.specstitle}>Abilities</h3>
                    {poke.abilities.map((ability, index) => (
                        <p key={index}>{ability.ability.name}</p>
                    ))}

                    <h3 className={styles.learn}>Your <span className={styles.pokeNome}>{poke.name}</span> can learn all those moves:</h3>

                    <ul className={styles.pokemoves}>
                        {poke.moves.map((move, index) => (
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

export default Pokemon

