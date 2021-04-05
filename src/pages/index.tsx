import { GetStaticProps} from 'next';
import Head from 'next/head';
import { format } from 'node:path';
import { SubscribeButton } from '../components/SubscribeButoon';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}


export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title> Home| Histórias pra brincar</title>
      </Head>
      <main className={styles.contentContainer} >
        <section className={styles.hero}>
          <span> 👏 Olá, seja bem-vind@ ao</span>
          <h1>Estórias pra <span>brincar</span></h1>
          <p>
          Tenha acesso a todas as publicações<br />
          <span>por {product.amount} ao mês</span>
        </p>
        <SubscribeButton />
        </section>
        <img src="images/avatar.svg" alt="Girl coding" />
        
      </main>
     
    </>
  )
}
 export const getStaticProps: GetStaticProps = async () => {
   const price = await stripe.prices.retrieve ('price_1IcECEDUNPD7uz08VUZl0H34', {
          expand: ['product']
   })
   const product = {
     priceId: price.id,
     amount:new Intl.NumberFormat ('pt-br', {
       style: 'currency',
       currency: 'BRL',
     }).format(price.unit_amount /100),
   };


   return {
  props: {
  product,
},revalidate: 60 * 60 *24, // 24 hours
   }

 }