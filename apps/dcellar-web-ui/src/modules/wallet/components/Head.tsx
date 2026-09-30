import { Text } from '@node-real/uikit';
import { memo } from 'react';

import { useAppSelector } from '@/store';

const HeadContent = {
  transfer_in: {
    title: 'transfer masuk',
    subtitle: <>Transfer BNB dari BNB Smart Chain ke akun BNB Greenfield Anda.</>,
  },
  transfer_out: {
    title: 'transfer keluar',
    subtitle: 'Transfer BNB dari akun BNB Greenfield Anda ke BNB Smart Chain.',
  },
  send: {
    title: 'kirim',
    subtitle: 'Kirim/isi saldo/tarik saldo antar akun BNB Greenfield.',
  },
};

interface HeadProps {}

export const Head = memo<HeadProps>(function Head() {
  const transferType = useAppSelector((root) => root.wallet.transferType);

  const content = HeadContent[transferType];

  return (
    <>
      <Text
        fontWeight={'600'}
        fontSize="24px"
        textAlign="center"
        mb={'12px'}
        w={'100%'}
        textTransform="capitalize"
      >
        {content?.title}
      </Text>
      <Text fontSize={'14px'} w={'100%'} textAlign="center" mb={'24px'} color={'readable.tertiary'}>
        {content?.subtitle}
      </Text>
    </>
  );
});
