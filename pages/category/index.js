import Head from "next/head"
import Layout from "../../components/layout"

import styles from '../../styles/Category.module.scss'
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image"
import pikaHello from'../../public/pikachu-hello.gif'
import Lojalogo from '../../public/pokeloja-logo-png.png' 
import pikaJump from '../../public/pikachu-jump-hat.png'







export default function Category() {
    return(
        <Layout>
            <Head>
                <title>Category-Poke-Store</title>
            </Head>
            <div className={styles.category}>
                <h1 className={styles.title}>Pokemon Category</h1>
                
                <Carousel>
                    <div>
                        <Image className={styles.slideimg} src={pikaJump} alt="image1"/>
                        <p className="legend">Image 1</p>

                    </div>
                    <div>
                        <Image className={styles.slideimg} src={pikaHello} alt="image2" />
                        <p className="legend">Image 2</p>

                    </div>
                    <div>
                        <Image className={styles.slideimg} src={Lojalogo} alt="image3"/>
                        <p className="legend">Image 3</p>

                    </div>
                                  
                </Carousel>
                
            </div>
            
        </Layout>
    )
}