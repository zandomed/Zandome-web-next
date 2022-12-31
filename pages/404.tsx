import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zandome - 404</title>
        <meta name="description" content="Page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </main>
    </>
  );
}
