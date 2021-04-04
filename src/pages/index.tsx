import { GetServerSideProps} from 'next';
import Head from 'next/head';
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
          <span>por {product.amount} aos mês</span>
        </p>
        <SubscribeButton />
        </section>
        <img src="images/avatar.svg" alt="Girl coding" />
        
      </main>
     
    </>
  )
}
 export const getServerSideProps: GetServerSideProps = async () => {
   const price = await stripe.prices.retrieve ('price_1IcECEDUNPD7uz08VUZl0H34', {
          expand: ['product']
   })
   const product = {
     priceId: price.id,
     amount: price.unit_amount / 100,
   };


   return {
  props: {
  product,
}
   }

 }