import { Tips } from '@/components/common/Tips';
import { useAppSelector } from '@/store';
import { selectStoreFeeParams } from '@/store/slices/global';
import { displayTime } from '@/utils/common';
import { Box } from '@node-real/uikit';
import { memo } from 'react';

interface PrePaidTipsProps {}

export const PrePaidTips = memo<PrePaidTipsProps>(function PrePaidTips() {
  const storeFeeParams = useAppSelector(selectStoreFeeParams);
  const reserveTime = displayTime(storeFeeParams?.reserveTime || 0);

  return (
    <Tips
      w={260}
      tips={
        <Box>
          <Box>Prepaid fee for {reserveTime} and will be charged based on the flow rate.</Box>
        </Box>
      }
    />
  );
});
