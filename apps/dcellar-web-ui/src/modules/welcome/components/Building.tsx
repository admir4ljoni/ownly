import { Box, Flex, Text } from '@node-real/uikit';

import { LandingH2, LandingResponsiveContainer } from '..';

import { IconFont } from '@/components/IconFont';
import { smMedia } from '@/modules/responsive';
import { INTER_FONT } from '@/modules/wallet/constants';

const datas = [
  {
    icon: (
      <IconFont
        type="ul-list"
        w={32}
        sx={{
          [smMedia]: {
            w: 16,
          },
        }}
      />
    ),
    title: 'Penyimpanan Data Terdesentralisasi',
    desc: 'BNB Greenfield memungkinkan alamat yang kompatibel dengan Ethereum untuk membuat dan mengelola data sekaligus aset token.',
  },
  {
    icon: (
      <IconFont
        type="filled-brain"
        color={'#fff'}
        w={32}
        sx={{
          [smMedia]: {
            w: 16,
          },
        }}
      />
    ),
    title: 'Ekosistem Kontrak Pintar Bawaan',
    desc: 'BNB Greenfield langsung menghubungkan izin dan pengelolaan data ke BSC sebagai aset yang dapat dipertukarkan dan program kontrak pintar bersama aset lainnya.',
  },
  {
    icon: (
      <IconFont
        type="happy-face"
        w={32}
        sx={{
          [smMedia]: {
            w: 16,
          },
        }}
      />
    ),
    title: 'Pengalaman Pengguna yang Nyaman',
    desc: 'BNB Greenfield memberi developer API dasar dan performa yang setara dengan layanan penyimpanan cloud Web2 populer.',
  },
];
export const Building = () => {
  return (
    <LandingResponsiveContainer>
      <Flex
        display={'flex'}
        my={80}
        sx={{
          [smMedia]: {
            flexDirection: 'column',
            my: 20,
          },
        }}
      >
        <Flex
          flexDirection={'column'}
          marginRight={40}
          sx={{
            [smMedia]: {
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: 32,
            },
          }}
        >
          <LandingH2>Membangun di BNB Greenfield</LandingH2>
          <Text fontFamily={INTER_FONT} color="readable.secondary">
            BNB Greenfield adalah platform blockchain dan penyimpanan inovatif yang menghadirkan
            kekuatan teknologi terdesentralisasi untuk kepemilikan data dan ekonomi data.
          </Text>
        </Flex>
        <Flex
          gap={48}
          flexDirection={'column'}
          sx={{
            [smMedia]: {
              gap: 32,
            },
          }}
        >
          {datas &&
            datas.map((item, index) => (
              <Flex key={index} gap={16}>
                <Box>
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    bg="rgba(67, 99, 225, 0.10)"
                    w={56}
                    h={56}
                    borderRadius={4}
                    sx={{
                      [smMedia]: {
                        w: 24,
                        h: 24,
                      },
                    }}
                  >
                    {item.icon}
                  </Flex>
                </Box>
                <Flex
                  gap={12}
                  flexDirection={'column'}
                  sx={{
                    [smMedia]: {
                      gap: 8,
                    },
                  }}
                >
                  <Text
                    fontFamily={INTER_FONT}
                    as="h3"
                    fontSize={20}
                    fontWeight={700}
                    sx={{
                      [smMedia]: {
                        fontSize: 16,
                      },
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    fontFamily={INTER_FONT}
                    fontSize={16}
                    color="readable.tertiary"
                    sx={{
                      [smMedia]: {
                        fontSize: 12,
                      },
                    }}
                  >
                    {item.desc}
                  </Text>
                </Flex>
              </Flex>
            ))}
        </Flex>
      </Flex>
    </LandingResponsiveContainer>
  );
};
