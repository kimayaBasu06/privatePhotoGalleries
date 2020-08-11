import Layout from '../components/MyLayout.js'
import styles from '../components/prices.module.css'
import Head from 'next/head'
import Out from './script.js'
import Table from 'react-bootstrap/Table'

export default function Prices() {
  return (
    <Layout>
  		
    	<hr></hr>
    	<h2 className={styles.gracie}>
          <img className={styles.gracie} src="/family_history.jpg" alt="my image" />
        </h2>

        <hr></hr>
    	<h1 className={styles.cheeny}>PRICES</h1>


    	<Table striped bordered hover size="sm">
		  <thead>
		    <tr>
		      <th>FREE </th>
		      <th>PLUS </th>
		      <th>ULTIMATE</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>$0</td>
		      <td>$16</td>
		      <td>$40</td>
		    </tr>
		    <tr>
		      <td>Billed Never</td>
		      <td>Biller Annually or $20 Monthly</td>
		      <td>Biller Annually or $50 Monthly</td>
		    </tr>
		    <tr>
		      <td>4GB</td>
		      <td >100GB</td>
		      <td>UNLIMITED</td>
		    </tr>
		  </tbody>
		</Table>

      <Head>
        <title>IMG-UP</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
      </Head>

    </Layout>

    

  )
  
}


