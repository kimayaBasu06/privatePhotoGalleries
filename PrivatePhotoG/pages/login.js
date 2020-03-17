import Layout from '../components/MyLayout.js'
import styles from '../components/prices.module.css'
import Head from 'next/head'

export default function About() {
	return (
    	<Layout>
    		<h1 className={styles.wallet}>Your Wallet</h1>
    		<form className={styles.enter} action="/action_page.php">
	    		<label for="email">KEY:</label>
	   			<input type="email" id="email" placeholder="ENTER KEY" name="key"></input> 
	    		<label for="pwd">PUBLIC ADDRESS:</label>
	    		<input type="address" id="pwd" placeholder="ENTER ADDRESS" name="address"></input>
	    		<button type="submit">SUBMIT</button>
			</form>


    		<Head>
        		<title>IMG-UP</title>
        			<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
      		</Head>
    	</Layout>
    )
}