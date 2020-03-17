import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import styles from '../components/prices.module.css';
import Head from 'next/head';

import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


import CheckoutForm from './CheckoutForm';






const PostLink = props => (
  <li>
    <Link className={styles.dad} href={`/post?title=${props.title}`}>
      <a className={styles.dad}>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (


    <Layout>


      <h1 className={styles.sean}>Private Photo Galleries</h1>

      <dev className={styles.title}>
        <div class="container">
          <div class="row">
              <div class="col-sm">
                <h2 className={styles.gracie}>
                  <img className={styles.gracie} src="/famphoto.png" alt="my image" />
                  <hr></hr>
                </h2>
              </div>
              <div class="col-sm">
                <h2 className={styles.gracie}>
                  <img className={styles.gracie} src="/cheeny.JPG" alt="my image" />
                </h2>
              </div>
              
            </div>
        </div>
      </dev> 

      `<hr></hr>


      <Head>
        <title>IMG-UP</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
      </Head>
    </Layout>

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
    
    
  );

  const stripePromise = loadStripe("pk_test_7jrsIkPGwuVPQhMznVz0KkMZ00FydOUrRM");

    function App() {
      return (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      );
    };

  ReactDOM.render(<App />, document.getElementById('root'));


}