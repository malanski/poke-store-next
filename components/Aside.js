
import styles from '../styles/Aside.module.scss'
import Image from 'next/image'
import CardgameLogo from '../public/logo-cardgame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'


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
                <h4>Subscribe</h4>
                <input type='text' placeholder='Your e-mail'></input>
                <button title='Subscribe'>
                    <FontAwesomeIcon icon={faMailBulk} />
                </button>
            </section>
        </aside>
    )
}
