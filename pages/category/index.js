import Head from "next/head"
import Layout from "../../components/layout"
import styles from '../../styles/About.module.scss'





export default function Category() {
    return(
        <Layout>
            <Head>
                <title>Category-Poke-Store</title>
            </Head>
            <div className={styles.about}>
                <h1>Pokemon Category</h1>
                <h3></h3>
                <h4></h4>
                
            </div>
        </Layout>
    )
}