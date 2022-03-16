
import styles from '../styles/Aside.module.scss'
import Image from 'next/image'
import vercel from '../public/vercel.svg'
import AshPc2 from '../public/ash-poke-pc2.png'
import AshPc1 from '../public/ash-poke-pc1.png'
import Awari from '../public/awari.png'
import reactNext from '../public/react-next.jpeg'
import CardgameLogo from '../public/logo-cardgame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import NextJsCarousel from './Carrosel'


export default function Aside () {

    const [state, setState] = useState({AshPc2})
    return(
        <aside className={styles.asider}>
            <div className={styles.cardlogo}>
                <p>Poke-Store</p>
                <Image className={styles.cardgameLogo}
                src={CardgameLogo}
                alt="Pokéball"
                width='250px'    
                height="150px" 

                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
                />
            </div>

            <NextJsCarousel />

            <section className={styles.news}>
                <h4>Subscribe your Email</h4>
                <input className={styles.newsinput} type='text' placeholder='Your e-mail'></input>
                <Button className={styles.newsbtn} title='Subscribe'>
                    <FontAwesomeIcon icon={faMailBulk} />
                </Button>
            </section>
            

            <p className={styles.powertitle}>Powered by</p>
            <div className={styles.powers}>
                <Image className={styles.power}
                    src={vercel}
                    alt="vercel"
                    width='90px'
                    height='50px'
                />
                
                <Image className={styles.power}
                    src={reactNext}
                    alt="awari"
                    width='90px'
                    height='50px'
                />

                <Image className={styles.power}
                    src={Awari}
                    alt="awari"
                    width='90px'
                    height='50px'
                />
            </div>
        </aside>
    )
}
