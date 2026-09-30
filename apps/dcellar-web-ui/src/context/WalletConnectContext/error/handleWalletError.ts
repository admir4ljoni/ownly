import { ErrorMsgMap } from '@/context/WalletConnectContext/error/error';
import { parseWCMessage } from '@/utils/common';
import { toast } from '@node-real/uikit';
import * as Sentry from '@sentry/nextjs';
import { disconnect } from '@wagmi/core';
import { ConnectorNotFoundError } from 'wagmi';
import * as flatted from 'flatted';

export function handleWalletError(err: any, args: any, context: unknown) {
  let text = '';
  const { connector } = args;

  switch (true) {
    case err instanceof ConnectorNotFoundError:
      if (connector.id === 'metaMask') {
        text = `MetaMask belum terpasang. Silakan pasang lalu hubungkan kembali.`;
      } else if (connector.id === 'trust') {
        text = `Trust Wallet belum terpasang. Silakan pasang lalu hubungkan kembali.`;
      } else {
        text = `Dompet belum terpasang. Silakan pasang lalu hubungkan kembali.`;
      }
      break;
  }
  const code = err.cause?.code ?? err.code;
  const message = parseWCMessage(err.cause?.message) ?? err.message;
  const description = text || ErrorMsgMap[code] || message;

  Sentry.withScope((scope) => {
    scope.setTag('Component', 'handleWalletError');
    Sentry.captureMessage(flatted.stringify(err));
  });

  // Compatible the walletConnect cannot switch network
  if (
    flatted
      .stringify(err)
      .includes("Cannot set properties of undefined (setting 'defaultChain')") ||
    flatted.stringify(err).includes('undefined has no properties')
  ) {
    toast.error({
      description:
        'Maaf, sepertinya koneksi ke dompet Anda terputus. Silakan masuk kembali untuk melanjutkan.',
    });
    return disconnect();
  }

  toast.error({
    description,
  });
}
