import Layout from '../components/layout'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'
import Pikachu from '../public/pikachu-01.png'
import { IconButton, Button } from '@chakra-ui/react'

import { ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'

export default function Home() {
  return (
    <Layout>
        <Head>
          
          <title>Poke-Store Next App</title>
                    
        </Head>

        <div className={styles.mainsite}>

          <div className={styles.pagination}>            
            <IconButton aria-label='Preview' icon={<ArrowLeftIcon />} />
            <IconButton aria-label='Next' icon={<ArrowRightIcon />} />
          </div>

          <div className={styles.grid}>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>

            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Pikachu</h2>
              <Image 
                src={Pikachu}
                alt="Pokémon"
                layout='intrinsic'
                srcSet='2x'
                blurDataURL="data:..." 
                placeholder="blur" 
              />
              <p className={styles.price}>150.00R$</p>
              <p className={styles.priceDisc}>120.00R$</p>
              
              <Button className={styles.buyBtn}>
                <span>Buy</span>
              </Button>
            </a>
            
          </div>

        </div>


    </Layout>
  )
}
