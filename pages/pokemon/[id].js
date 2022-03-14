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
                <title>The {pokemon.name} Page's</title>
            </Head>
            <div className={styles.pokemon}>

                <h1 className={styles.poketitle}>
                    {pokemon.id}# {pokemon.name}
                </h1>

                <div className={styles.ablilities}>
                    <img className={styles.pokeImg} src={pokemon.image} alt={pokemon.name} />

                    <p>
                        <span className={styles.specstitle}>Weight:</span> {pokemon.weight /2} kg
                    </p>

                    <p>
                        <span className={styles.specstitle}>Height:</span>
                        {pokemon.height * 10} cm 
                    </p>

                    <h2 className={styles.specstitle}>Types</h2>
                    {pokemon.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                    ))}

                    <h3 className={styles.specstitle}>Abilities</h3>
                    {pokemon.abilities.map((ability, index) => (
                        <p key={index}>{ability.ability.name}</p>
                    ))}

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
    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
        props: { pokemon },
    };
}

export default Pokemon

