import { assetPrefix } from '@/base/env';
import { useMediaQuery } from '@node-real/uikit';
import { KeyFeaturesMobile } from './KeyFeaturesMobile';
import { KeyFeaturesPC } from './KeyFeaturesPC';

export type TFeatureItem = {
  label: string;
  title: string;
  desc: string;
  tag?: string;
  introImg: string;
  introImgSm: string;
  gaClickName: string;
};

export const keyFeatureList: TFeatureItem[] = [
  {
    label: 'Pengelolaan Penyimpanan',
    title: 'Pengelolaan Penyimpanan Visual',
    desc: 'Fitur pengelolaan penyimpanan visual Ownly memudahkan Anda menyimpan, mengunduh, membagikan, dan mengelola banyak berkas sekaligus.',
    introImg: `${assetPrefix}/images/welcome/storage.png`,
    introImgSm: `${assetPrefix}/images/welcome/storage_sm.png`,
    gaClickName: 'dc_lp.homepage.key_f.storage.click',
  },
  {
    label: 'Pengelolaan Izin',
    title: 'Pengelolaan Izin',
    desc: 'Kelola akses ke penyimpanan dan berkas yang Anda buat, baik untuk grup maupun perorangan.',
    introImg: `${assetPrefix}/images/welcome/permission.png`,
    introImgSm: `${assetPrefix}/images/welcome/permission_sm.png`,
    gaClickName: 'dc_lp.homepage.key_f.permssion.click',
  },
  {
    label: 'Pengelolaan Aset Antar-jaringan',
    title: 'Pengelolaan Aset Antar-jaringan',
    desc: 'Pengelolaan aset antar-jaringan memungkinkan transfer aset antara BNB Greenfield dan BNB Smart Chain (BSC).',
    introImg: `${assetPrefix}/images/welcome/cross-chain.png`,
    introImgSm: `${assetPrefix}/images/welcome/cross-chain_sm.png`,
    gaClickName: 'dc_lp.homepage.key_f.assets.click',
  },
  {
    label: 'Pengelolaan Akun',
    title: 'Pengelolaan Akun',
    desc: 'Pengguna dapat membuat beberapa akun pembayaran dan menautkan penyimpanan ke akun pembayaran yang berbeda untuk membayar penyimpanan dan paket data.',
    introImg: `${assetPrefix}/images/welcome/accounts_1.png`,
    introImgSm: `${assetPrefix}/images/welcome/accounts_sm1.png`,
    gaClickName: 'dc_lp.homepage.key_f.accounts.click',
  },
  {
    label: 'Dasbor Data',
    // tag: '(coming soon)',
    title: 'Dasbor Data Lengkap ',
    desc: 'Dasbor data lengkap menampilkan penggunaan penyimpanan, biaya, dan metrik penting lainnya.',
    introImg: `${assetPrefix}/images/welcome/dashboard_new.png`,
    introImgSm: `${assetPrefix}/images/welcome/dashboard_sm_new.png`,
    gaClickName: 'dc_lp.homepage.key_f.dashboard.click',
  },
];

export const KeyFeatures = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  return isMobile ? <KeyFeaturesMobile /> : <KeyFeaturesPC />;
};
