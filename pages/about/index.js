import Head from "next/head"
import Layout from "../../components/layout"
import styles from '../../styles/About.module.scss'





export default function About() {
    return(
        <Layout>
            <Head>
                <title>About-Poke-Store</title>
            </Head>
            <div className={styles.about}>
                <h1>About Poke-Store</h1>

                <div className={styles.technologies}>

                    <h2>Technologies used in this project</h2>

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