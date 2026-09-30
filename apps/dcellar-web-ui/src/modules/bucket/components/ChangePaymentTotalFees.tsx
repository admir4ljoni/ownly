import { BankBalance } from '@/components/Fee/BankBalance';
import { FullBalance } from '@/components/Fee/FullBalance';
import { GasFee } from '@/components/Fee/GasFee';
import { PrepaidFee } from '@/components/Fee/PrepaidFee';
import { SettlementFee } from '@/components/Fee/SettlementFee';
import { TotalFeeBox } from '@/components/Fee/TotalFeeBox';
import { CRYPTOCURRENCY_DISPLAY_PRECISION } from '@/modules/wallet/constants';
import { useAppSelector } from '@/store';
import { selectBnbUsdtExchangeRate } from '@/store/slices/global';
import { BN } from '@/utils/math';
import { useDisclosure } from '@node-real/uikit';

export type TSettlementFee = {
  address: string;
  amount: string;
};

export type ChangePaymentTotalFeeProps = {
  gasFee: string;
  from: TSettlementFee;
  to: TSettlementFee;
  storeFee: string;
  quotaFee: string;
  fromSponsor: boolean;
  toSponsor: boolean;
};

export const ChangePaymentTotalFee = ({
  gasFee,
  from,
  to,
  storeFee,
  quotaFee,
  fromSponsor,
  toSponsor,
}: ChangePaymentTotalFeeProps) => {
  const bankBalance = useAppSelector((root) => root.accounts.bankOrWalletBalance);

  const { isOpen, onToggle } = useDisclosure();
  const exchangeRate = useAppSelector(selectBnbUsdtExchangeRate);

  const amount = BN(gasFee)
    .plus(from.amount)
    .plus(to.amount)
    .plus(storeFee)
    .plus(quotaFee)
    .dp(CRYPTOCURRENCY_DISPLAY_PRECISION)
    .toString();

  return (
    <TotalFeeBox
      amount={amount}
      onToggle={onToggle}
      expand={isOpen}
      exchangeRate={exchangeRate}
      canExpand={true}
    >
      {!fromSponsor && (
        <>
          <SettlementFee amount={from.amount} />
          <FullBalance address={from.address} />
        </>
      )}

      {!toSponsor && (
        <>
          <PrepaidFee amount={storeFee + quotaFee} />
          <SettlementFee amount={to.amount} />
          <FullBalance address={to.address} />
        </>
      )}

      <GasFee amount={gasFee} />
      <BankBalance amount={bankBalance} />
    </TotalFeeBox>
  );
};
