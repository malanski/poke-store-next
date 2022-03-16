import React, { Component } from 'react';
import styles from '../styles/Aside.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import AshPc2 from '../public/ash-poke-pc2.png' 
import AshPc1 from '../public/ash-poke-pc1.png' 
  
export default class NextJsCarousel extends Component {
    render() {
        return (
            <div className={styles.carousel}>
                <Carousel>
                    <div>
                        <Image className={styles.slideimg} src={AshPc2} alt="image1"/>
                        <p className="legend">Image 1</p>

                    </div>
                    <div>
                        <Image className={styles.slideimg} src={AshPc1} alt="image2" />
                        <p className="legend">Image 2</p>

                    </div>
                    <div>
                        <Image className={styles.slideimg} src={AshPc2} alt="image3"/>
                        <p className="legend">Image 3</p>

                    </div>
                                  
                </Carousel>
            </div>
        );
    }
}