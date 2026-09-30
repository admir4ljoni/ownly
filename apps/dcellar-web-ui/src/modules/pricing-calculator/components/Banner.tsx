import { Box } from '@node-real/uikit';

import { H1, SubTitle } from './Common';

import { smMedia } from '@/modules/responsive';

export const Banner = () => {
  return (
    <Box
      marginY={40}
      textAlign={'center'}
      marginX={'20px'}
      sx={{
        [smMedia]: {
          marginY: '20px',
        },
      }}
    >
      <H1>Kalkulator Harga BNB Greenfield</H1>
      <SubTitle>
        Dengan kalkulator harga kami, Anda bisa dengan mudah memperkirakan biaya proyek Anda di{' '}
        <strong>Jaringan Utama BNB Greenfield</strong>.
      </SubTitle>
    </Box>
  );
};
