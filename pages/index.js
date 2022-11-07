import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Nonstagram</title>
        <meta name="description" content="Nonstagram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
