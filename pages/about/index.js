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
                <h3>This is a E-commerce project developed by Ulisses Malanski at 
                    <a href="https://awari.com.br/">
                        <img src="https://awari.com.br/wp-content/themes/awari/dist/img/awari.webp"></img>
                    </a> Web Development Course
                </h3>
                <h4>Objectives</h4>
                <ul>
                    <li>
                        Build a Next.js App from Scratch.  
                    </li>
                    <li>
                        Use Routes (pages). 
                    </li>
                    <li>
                        Use state.
                    </li>
                    <li>
                        Build a Pokémon web-Store.
                    </li>
                </ul>
                

                <div className={styles.technologies}>

                    <h2>Technologies used in this project</h2>

                    <ul>
                        <li>Chakra Ui + FontAwesome icons</li>
                        <li>
                            JavaScript to TypeScript
                        </li>
                        <li>
                            W3C Validation on HTML targeting SEO trough Web Vitals.
                        </li>
                        <li>
                            CSS3 - SCSS.
                        </li>
                        <li>Deploy at Vercel.</li>
                        <li>
                            Git + Github.
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}