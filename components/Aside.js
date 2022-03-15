
import styles from '../styles/Aside.module.scss'
import Image from 'next/image'
import vercel from '../public/vercel.svg'

import CardgameLogo from '../public/logo-cardgame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@chakra-ui/react'


export default function Aside () {
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

            <section className={styles.news}>
                <h4>Subscribe your Email</h4>
                <input className={styles.newsinput} type='text' placeholder='Your e-mail'></input>
                <Button className={styles.newsbtn} title='Subscribe'>
                    <FontAwesomeIcon icon={faMailBulk} />
                </Button>
            </section>

            <p>Powered by</p>
            <Image className='vercel'
                src={vercel}
                alt="vercel"
                width='50px'
                height='30px'
                />
        </aside>
    )
}
