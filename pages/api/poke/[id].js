import Head from "next/head"
import Layout from "../../../components/layout"
import styles from '../../../styles/Pokemon.module.scss'
import Image from 'next/image'
import Pikachu from '../../../public/pikachu-01.png'
import { PokeApi } from "../pokeApi"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import useSWR from 'swr'



export default function Poke (pokeApi) {

    const { id } = Link()    
    const fetcher = url => axios.get(url).then(res => res.data)

    const { data, error } = useSWR(`/api/poke/${id}`, fetcher)

    res.end(`Post: ${id}`)
    
    const [state, setState] = useState ({
        weight: 0,
        height: 0,
        abilities: [],
        moves: [],
        stats: [],
        types: [],
    })

    useEffect(() => {
        PokeApi.getPokemonById(id).then(({ data }) => {
            console.log(data)
            setState(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [id])

    return(
        <Layout>
            <Head>
                <title>{state.name}-Poke-Store</title>
            </Head>
            <div className={styles.pokemon}>
                <h1>{state.name}</h1>

                <Image className={styles.pokeImg}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${state.id}.png`}
                alt={state.name}
                blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                layout="fill"
              />

                <div className={styles.abilities}>

                    <h2>Type: Electric</h2>

                    <p>Height: {state.height}m</p>
                    <p>Weight: {state.weight}kg</p
                    >
                    <h3>Special Moves</h3>
                    <ul>
                        {state.types.map(({type}, index) => <li key={index}>{type.name}</li>)}                     
                    </ul>
                </div>
            </div>
        </Layout>
    )
}