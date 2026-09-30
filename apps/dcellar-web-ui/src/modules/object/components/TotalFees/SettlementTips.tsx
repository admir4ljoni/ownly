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
            BNB Greenfield uses a settlement system to secure funds for service fees. You will be
            charged extra fees for the next {displayTime(reserveTime)} or receive a refund if
            storage and quota prices change.
          </Box>
        </Box>
      }
    />
  );
});
