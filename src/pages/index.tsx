
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButoon';
import styles from './home.module.scss';


export default function Home() {
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
          <span>por R$9,90 aos mês</span>
        </p>
        <SubscribeButton />
        </section>
        <img src="images/avatar.svg" alt="Girl coding" />
        
      </main>
     
    </>
  )
}
