import { assetPrefix } from '@/base/env';
import Head from 'next/head';

export const SEOHead = () => {
  return (
    <Head>
      <title>Ownly - Konsol penyimpanan untuk pengembang di BNB Greenfield</title>
      <meta
        name="description"
        content="Ownly adalah alat penyimpanan yang membantu pengembang mulai menggunakan penyimpanan data terdesentralisasi BNB Greenfield dan BNB Smart Chain (BSC)."
      />
      <meta name="keywords" content="Jaringan data terdesentralisasi, Ownly, BNB Greenfield" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta
        property="og:title"
        content="Ownly - Konsol penyimpanan untuk pengembang di BNB Greenfield"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@Nodereal_io" />
      <meta
        name="twitter:title"
        content="Ownly - Konsol penyimpanan untuk pengembang di BNB Greenfield"
      />
      <meta
        name="description"
        content="Ownly adalah alat penyimpanan yang membantu pengembang mulai menggunakan penyimpanan data terdesentralisasi BNB Greenfield dan BNB Smart Chain (BSC)."
      />
      <meta
        property="og:description"
        content="Ownly adalah alat penyimpanan yang membantu pengembang mulai menggunakan penyimpanan data terdesentralisasi BNB Greenfield dan BNB Smart Chain (BSC)."
      />
      <meta
        name="twitter:description"
        content="Ownly adalah alat penyimpanan yang membantu pengembang mulai menggunakan penyimpanan data terdesentralisasi BNB Greenfield dan BNB Smart Chain (BSC)."
      />
      <meta property="twitter:image" content={`${assetPrefix}/images/homepage_thumbnail.png`} />
      <meta property="twitter:image:src" content={`${assetPrefix}/images/homepage_thumbnail.png`} />
    </Head>
  );
};
