import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nonstagram</title>
        <meta name="description" content="Nonstagram" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  );
}
