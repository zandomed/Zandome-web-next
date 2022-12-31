import Head from 'next/head';

import ZandomeLogo from '../public/zandome.svg';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zandome</title>
        <meta name="description" content="Zandome Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.Home__main}>
        <div className={styles.Home__wrapLogo}>
          <ZandomeLogo width="100%" height="100%" />
        </div>
        <div className={styles.Home__wrapText}>
          <span>
            Comming Soon
            <span className={styles.Home__dot}>.</span>
            <span className={styles.Home__dot}>.</span>
            <span className={styles.Home__dot}>.</span>
          </span>
        </div>
        {/* <S.WrapperRRSS>
            <SocialNetworks />
          </S.WrapperRRSS> */}
      </main>
    </>
  );
}
