import { assetPrefix } from '@/base/env';
import { GAClick } from '@/components/common/GATracker';
import { smMedia } from '@/modules/responsive';
import { INTER_FONT } from '@/modules/wallet/constants';
import { Box, Flex, Image, Square, Text, useMediaQuery } from '@node-real/uikit';
import { LandingH2, LandingResponsiveContainer } from '..';

const datas = [
  {
    intro: 'Penyimpanan dan Pembuatan NFT',
    img: `${assetPrefix}/images/welcome/nft_1.png`,
    imgSm: `${assetPrefix}/images/welcome/nft_sm.png`,
    gaClickName: 'dc_lp.homepage.use_case.nft.click',
  },
  {
    intro: 'Verifikasi Fungsi Penyedia Penyimpanan',
    img: `${assetPrefix}/images/welcome/auth.png`,
    imgSm: `${assetPrefix}/images/welcome/auth_sm.png`,
    gaClickName: 'dc_lp.homepage.use_case.sp.click',
  },
  {
    intro: 'Hosting Web',
    img: `${assetPrefix}/images/welcome/server.png`,
    imgSm: `${assetPrefix}/images/welcome/server_sm.png`,
    gaClickName: 'dc_lp.homepage.use_case.hosting.click',
  },
];

export const HelpDevelopers = () => {
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <LandingResponsiveContainer>
      <Flex
        my={80}
        alignItems={'center'}
        flexDirection={'column'}
        sx={{
          [smMedia]: {
            my: 20,
          },
        }}
      >
        <LandingH2>Cara Ownly Membantu Developer</LandingH2>
        <Text
          marginBottom={40}
          fontSize={16}
          fontFamily={INTER_FONT}
          textAlign={'center'}
          sx={{
            [smMedia]: {
              margin: '8px auto 20px',
            },
          }}
        >
          Ownly dapat digunakan sebagai alat developer yang andal untuk membuat pekerjaan developer jauh lebih mudah.
        </Text>
        <Flex
          gap={24}
          sx={{
            [smMedia]: {
              flexDirection: 'column',
            },
          }}
        >
          {datas &&
            datas.map((item, index) => (
              <GAClick name={item.gaClickName} key={index}>
                <Box
                  key={index}
                  overflow={'hidden'}
                  borderRadius={4}
                  transition={'all 0.2s'}
                  _hover={{
                    boxShadow: isMobile ? 'none' : '0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <Image
                    alt={`Ikon ${item.intro}`}
                    src={isMobile ? item.imgSm : item.img}
                    fallbackStrategy="beforeLoadOrError"
                    fallback={<Square size={191} color="white"></Square>}
                  ></Image>
                  <Text
                    as="h3"
                    py={18}
                    fontFamily={INTER_FONT}
                    textAlign={'center'}
                    fontSize={18}
                    fontWeight={600}
                    sx={{
                      [smMedia]: {
                        p: '12px 0 0 0',
                        fontSize: 16,
                      },
                    }}
                  >
                    {item.intro}
                  </Text>
                </Box>
              </GAClick>
            ))}
        </Flex>
      </Flex>
    </LandingResponsiveContainer>
  );
};
