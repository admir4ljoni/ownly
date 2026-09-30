import { useAppSelector } from '@/store';
import { selectBnbUsdtExchangeRate } from '@/store/slices/global';
import { renderFee } from '@/utils/common';
import { Flex, TextProps } from '@node-real/uikit';

type BankBalanceProps = TextProps & {
  amount: string;
};

export const BankBalance = ({ amount, ...restProps }: BankBalanceProps) => {
  const exchangeRate = useAppSelector(selectBnbUsdtExchangeRate);

  return (
    <Flex
      color={'readable.disable'}
      fontSize={12}
      textAlign={'right'}
      {...restProps}
      justifyContent={'flex-end'}
    >
      Saldo Dompet Akun Utama: {renderFee(amount, exchangeRate)}
    </Flex>
  );
};
