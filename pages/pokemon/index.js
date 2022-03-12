import Head from "next/head"
import Layout from "../../components/layout"
import styles from '../../styles/Pokemon.module.scss'
import Image from 'next/image'
import Pikachu from '../../public/pikachu-01.png'




export default function Pokemon() {
    return(
        <Layout>
            <Head>
                <title>Pikachu-Poke-Store</title>
            </Head>
            <div className={styles.pokemon}>
                <h1>Pikachu</h1>
                <Image className={styles.pokeImg}
                src={Pikachu}
                alt="Pokémon"
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
              />

                <div className={styles.abilities}>

                    <h2>Type: Electric</h2>

                    <p>Height: 0.6m</p>
                    <p>Weight: 6kg</p>

                    <ul>
                        <li>
                            This is a e-commerce application Created using Next. 
                        </li>
                        <li>
                            It is a follow up Project from  Awari React Course.
                        </li>
                        <li>
                            Uses JavaScript as the major programing language. 
                        </li>
                        <li>
                            W3C Validation on HTML targeting SEO trough Web Vitals.
                        </li>
                        <li>
                            CSS3 - SASS
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}