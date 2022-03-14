import Head from "next/head"
import Layout from "./components/layout"
import styles from '../../styles/Pokemon.module.scss'
import Image from 'next/image'
import { PokeApi } from "./pages/api/pokeApi"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import useSWR from 'swr'

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
  }
  

export default function Pokemon (name){
        const { query } = useRouter()
        const { data, error } = useSWR(
        () => query.name && `/${query.name}`,
        fetcher
    )
        const [state, setState] = useState ({
        weight: 0,
        height: 0,
        abilities: [],
        moves: [],
        stats: [],
        types: [],
    })

    useEffect(() => {
        PokeApi.getPokemonById(name).then(({ data }) => {
            console.log(data)
            setState(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [name])

    if (error) return <div>{error.message}</div>

    if (!data) return <div>Loading...</div>

    return(
        <Layout>
            <Head>
                <title>{state.name}-Poke-Store</title>
            </Head>
            <div className={styles.pokemon}>
                <h1>{state.name}</h1>

                

                <div className={styles.abilities}>

                    <h2>Type: {state.types}</h2>

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