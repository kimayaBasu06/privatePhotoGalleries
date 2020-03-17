import Layout from '../components/MyLayout.js'
import styles from '../components/prices.module.css'
import Head from 'next/head'


export default function About() {
  return (
    <Layout>
    	<h2 className={styles.gracie}>
          <img className={styles.gracie} src="/family_history.jpg" alt="my image" />
        </h2>

        <hr></hr>
    	<h1 className={styles.cheeny}>PRICES</h1>

      	<hr></hr>

	    <dev className={styles.title}>
			<div class="container">
		 		<div class="row">
		   			<div class="col-sm">
		   				FREE
		   			</div>
		   			<div class="col-sm">
		    			PLUS
		    		</div>
		    		<div class="col-sm">
		    			ULTIMATE
		   			</div>
		  		</div>
		 	</div>
		</dev>

		<hr></hr>

		<dev className={styles.money}>
			<div class="container">
		 		<div class="row">
		   			<div class="col-sm">
		   				$0
		   				<p3 className={styles.month}>/mo</p3>
		   			</div>
		   			<div class="col-sm">
		    			$16
		    			<p3 className={styles.month}>/mo</p3>
		    		</div>
		    		<div class="col-sm">
		    			$40
		    			<p3 className={styles.month}>/mo</p3>
		   			</div>
		  		</div>
		 	</div>
		</dev>

		<dev className={styles.sub}>
			<div class="container">
		 		<div class="row">
		   			<div class="col-sm">
		   				Billed Never
		   			</div>
		   			<div class="col-sm">
		    			Billed Annually or $20 Monthly
		    		</div>
		    		<div class="col-sm">
		    			Billed Annually or $50 Monthly
		   			</div>
		  		</div>
		 	</div>
		</dev>

		<hr></hr>

		<dev className={styles.kim}>
			<div class="container">
		 		<div class="row">
		   			<div class="col-sm">
		   				4GB
		   			</div>
		   			<div class="col-sm">
		    			100GB
		    		</div>
		    		<div class="col-sm">
		    			UNLIMITED
		   			</div>
		  		</div>
		 	</div>
		</dev>

      <Head>
        <title>IMG-UP</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
      </Head>

    </Layout>

    

  )
  
}


