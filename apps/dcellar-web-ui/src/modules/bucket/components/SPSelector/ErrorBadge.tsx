import { GREENFIELD_CHAIN_EXPLORER_URL } from '@/base/env';
import { IconFont } from '@/components/IconFont';
import { DCTooltip } from '@/components/common/DCTooltip';
import { Status as StorageProviderStatus } from '@bnb-chain/greenfield-cosmos-types/greenfield/sp/types';
import { Badge } from '@node-real/uikit';
import { A } from './style';
import { memo } from 'react';

const SP_STATUS_TEXT: Record<number, string> = {
  [StorageProviderStatus.STATUS_IN_SERVICE]: 'Aktif',
  [StorageProviderStatus.STATUS_IN_JAILED]: 'Ditangguhkan',
  [StorageProviderStatus.STATUS_GRACEFUL_EXITING]: 'Sedang Berhenti',
  [StorageProviderStatus.STATUS_IN_MAINTENANCE]: 'Dalam Perbaikan',
  [StorageProviderStatus.STATUS_FORCED_EXITING]: 'Dihentikan Paksa',
};

type ErrorBadgeProps = {
  access: boolean;
  address: string;
  status: number;
};

export const ErrorBadge = memo(function ErrorBadge({ access, address, status }: ErrorBadgeProps) {
  const renderUnavailableBadge = () => (
    <DCTooltip title="Penyedia penyimpanan ini sedang tidak tersedia" placement="bottomLeft">
      <Badge ml={4} colorScheme="danger">
        Penyedia Bermasalah
      </Badge>
    </DCTooltip>
  );

  const renderStatusBadge = () => {
    const statusText = SP_STATUS_TEXT[status] || 'Tidak Diketahui';

    return (
      <Badge ml={4} colorScheme="danger">
        {statusText}
      </Badge>
    );
  };

  const renderAccessIcon = () => (
    <A
      href={`${GREENFIELD_CHAIN_EXPLORER_URL}/account/${address}`}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
    >
      <IconFont type="external" w={12} />
    </A>
  );

  if (!access) {
    if (status === 0) {
      return renderUnavailableBadge();
    } else {
      return renderStatusBadge();
    }
  } else {
    return renderAccessIcon();
  }
});
