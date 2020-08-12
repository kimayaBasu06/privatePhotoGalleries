import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import styles from '../components/prices.module.css';
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel'

import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';








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

      <hr></hr>
      <h1 className={styles.sean}>Private Photo Galleries</h1>

      <Carousel>
        <Carousel.Item>
          <img 
            className={styles.gracie} 
            src="/famphoto.png" 
            alt="my image" 
          />
          <Carousel.Caption className={styles.merry}>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className={styles.gracie} 
            src="/family_history.jpg" 
            alt="my image" 
          />
          <Carousel.Caption className={styles.go}>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className={styles.gracie} 
            src="/cheeny.JPG" 
            alt="my image" 
          />

          <Carousel.Caption className={styles.go}>
            <h3>Third slide label</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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





