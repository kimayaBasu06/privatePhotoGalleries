import Layout from '../components/MyLayout.js'
import styles from '../components/prices.module.css'
import Head from 'next/head'


export default function About() {
	return (
    	<Layout>
           
            <hr></hr>
        		<h1 className={styles.cheeny}>ABOUT</h1>



        	<Head>
      		    <title>IMG-UP</title>
            	<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
          	</Head>
   		</Layout>
	)
}
