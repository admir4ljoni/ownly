import { Tips } from '@/components/common/Tips';
import { useAppSelector } from '@/store';
import { selectStoreFeeParams } from '@/store/slices/global';
import { displayTime } from '@/utils/common';
import { Box } from '@node-real/uikit';
import { memo } from 'react';

interface SettlementTipsProps {}

export const SettlementTips = memo<SettlementTipsProps>(function SettlementTips() {
  const { reserveTime } = useAppSelector(selectStoreFeeParams);

  return (
    <Tips
      w={330}
      tips={
        <Box>
          <Box>
            BNB Greenfield menggunakan sistem penyelesaian untuk mengamankan dana biaya layanan. Anda akan
            dikenakan biaya tambahan untuk {displayTime(reserveTime)} berikutnya atau menerima pengembalian dana jika
            harga penyimpanan dan kuota berubah.
          </Box>
        </Box>
      }
    />
  );
});
