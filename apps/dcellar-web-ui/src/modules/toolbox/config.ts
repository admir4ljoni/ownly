export enum ToolTypeEnum {
  DevTool = 'dev-tool',
  SDK = 'SDK',
  API = 'API',
}
export const badgeTexts = {
  [ToolTypeEnum.DevTool]: 'Alat Developer',
  [ToolTypeEnum.SDK]: 'SDK',
  [ToolTypeEnum.API]: 'API',
};
export type ToolItem = {
  icon: string;
  title: string;
  type: ToolTypeEnum;
  badge: string;
  links: {
    icon: string;
    name: string;
    url: string;
  }[];
  desc: string;
};

export const toolList = [
  {
    icon: 'source-code',
    title: 'Ownly Sumber Terbuka',
    type: ToolTypeEnum.DevTool,
    badge: badgeTexts[ToolTypeEnum.DevTool],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/node-real/dcellar',
      },
    ],
    desc: 'Manfaatkan kode sumber terbuka Ownly dan ikut berkolaborasi untuk menyempurnakan serta memperluas fiturnya.',
  },
  {
    icon: 'upload',
    title: 'Greenfield UploadKit',
    type: ToolTypeEnum.DevTool,
    badge: badgeTexts[ToolTypeEnum.DevTool],
    links: [
      {
        icon: 'line-github',
        name: 'Github',
        url: 'https://github.com/node-real/greenfield-toolkit/tree/main/packages/uploadkit',
      },
      {
        icon: 'doc',
        name: 'Dokumentasi',
        url: 'https://node-real.github.io/greenfield-toolkit',
      },
      {
        icon: 'npm',
        name: 'npm',
        url: 'https://www.npmjs.com/package/@node-real/greenfield-uploadkit',
      },
    ],
    desc: "Greenfield Upload UIKit disediakan oleh NodeReal, sepenuhnya bersumber terbuka, dan mudah diintegrasikan developer ke dalam dApp WebUI mereka.",
  },
  {
    icon: 'golang',
    title: 'Greenfield Go SDK',
    type: ToolTypeEnum.SDK,
    badge: badgeTexts[ToolTypeEnum.SDK],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-go-sdk',
      },
    ],
    desc: 'Go SDK untuk Greenfield',
  },
  {
    icon: 'cosmos',
    title: 'Greenfield Cosmos SDK',
    type: ToolTypeEnum.SDK,
    badge: badgeTexts[ToolTypeEnum.SDK],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-cosmos-sdk',
      },
    ],
    desc: 'Fork cosmos-SDK untuk Greenfield',
  },
  {
    icon: 'javascript',
    title: 'Greenfield JavaScript SDK',
    type: ToolTypeEnum.SDK,
    badge: badgeTexts[ToolTypeEnum.SDK],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-js-sdk',
      },
    ],
    desc: 'JS SDK untuk Greenfield',
  },
  {
    icon: 'source-code',
    title: 'Greenfield Bundle SDK',
    type: ToolTypeEnum.SDK,
    badge: badgeTexts[ToolTypeEnum.SDK],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-bundle-sdk',
      },
    ],
    desc: 'Go SDK untuk bundle Greenfield',
  },
  {
    icon: 'source-code',
    title: 'Greenfield Contracts SDK',
    type: ToolTypeEnum.SDK,
    badge: badgeTexts[ToolTypeEnum.SDK],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-contracts-sdk',
      },
    ],
    desc: 'Kumpulan kontrak pintar untuk Greenfield',
  },
  {
    icon: 'python',
    title: 'Greenfield Python SDK',
    type: ToolTypeEnum.SDK,
    badge: badgeTexts[ToolTypeEnum.SDK],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-python-sdk',
      },
    ],
    desc: 'Python SDK untuk Greenfield',
  },
  {
    icon: 'terminal',
    title: 'Greenfield CMD',
    type: ToolTypeEnum.DevTool,
    badge: badgeTexts[ToolTypeEnum.DevTool],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://github.com/bnb-chain/greenfield-cmd',
      },
    ],
    desc: 'Alat baris perintah (CMD) untuk Greenfield',
  },
  {
    icon: 'nodereal',
    title: 'API Tagihan Jaringan Utama Greenfield',
    type: ToolTypeEnum.API,
    badge: badgeTexts[ToolTypeEnum.API],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://nodereal.io/api-marketplace/bnb-greenfield-mainnet-billing-api',
      },
    ],
    desc: 'Paket API ini membantu Anda mendapatkan info tagihan secara instan di Jaringan Utama BNB Greenfield.',
  },
  {
    icon: 'nodereal',
    title: 'API Lanjutan Jaringan Utama Greenfield',
    type: ToolTypeEnum.API,
    badge: badgeTexts[ToolTypeEnum.API],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://nodereal.io/api-marketplace/bnb-greenfield-mainnet-enhanced-api',
      },
    ],
    desc: 'Paket API ini membantu Anda mendapatkan info transaksi, berkas, penyimpanan, dan akun di Greenfield.',
  },
  {
    icon: 'nodereal',
    title: 'API Tagihan Jaringan Uji Greenfield',
    type: ToolTypeEnum.API,
    badge: badgeTexts[ToolTypeEnum.API],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://nodereal.io/api-marketplace/bnb-greenfield-testnet-billing-api',
      },
    ],
    desc: 'Paket API ini membantu Anda mendapatkan info tagihan secara instan di Jaringan Uji BNB Greenfield.',
  },
  {
    icon: 'nodereal',
    title: 'API Lanjutan Jaringan Uji Greenfield',
    type: ToolTypeEnum.API,
    badge: badgeTexts[ToolTypeEnum.API],
    links: [
      {
        icon: 'link',
        name: 'Link',
        url: 'https://nodereal.io/api-marketplace/bnb-greenfield-testnet-enhanced-api',
      },
    ],
    desc: 'Paket API ini membantu Anda mendapatkan info transaksi, berkas, penyimpanan, dan akun di Greenfield.',
  },
];
