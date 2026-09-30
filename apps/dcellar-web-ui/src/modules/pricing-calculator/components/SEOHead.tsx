import Head from 'next/head';

import { assetPrefix } from '@/base/env';

export const SEOHead = () => {
  return (
    <Head>
      <title>Kalkulator Harga BNB Greenfield - Ownly</title>
      <meta
        name="description"
        content="Kalkulator harga ini memperkirakan biaya menyimpan dan mengunduh data di jaringan penyimpanan terdesentralisasi BNB Greenfield."
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@Nodereal_io" />
      <meta name="twitter:title" content="Kalkulator Harga BNB Greenfield - Ownly" />
      <meta
        name="twitter:description"
        content="Kalkulator harga ini memperkirakan biaya menyimpan dan mengunduh data di jaringan penyimpanan terdesentralisasi BNB Greenfield."
      />
      <meta
        property="twitter:image"
        content={`${assetPrefix}/images/pricing-calculator_thumbnail.png`}
      />
      <meta
        property="twitter:image:src"
        content={`${assetPrefix}/images/pricing-calculator_thumbnail.png`}
      />
    </Head>
  );
};
