import { Avatar } from '@/components/Avatar';
import { CopyText } from '@/components/common/CopyText';
import { Tips } from '@/components/common/Tips';
import { getShortenWalletAddress } from '@/utils/wallet';
import { Box, Flex, Text } from '@node-real/uikit';
import { BalanceAmount } from './BalanceAmount';

export type AvailableBalanceProps = {
  address: string;
};
export const Balance = ({ address }: AvailableBalanceProps) => {
  const shortAddress = getShortenWalletAddress(address);

  return (
    <>
      <Flex
        alignItems={'center'}
        h={34}
        bgColor={'bg.bottom'}
        borderRadius={17}
        width={'fit-content'}
        border={'1px solid readable.border'}
        p={10}
        margin={'0 auto'}
      >
        <Avatar id={shortAddress} w={20} />
        <CopyText value={address} gaClickName="dc.main.account.copy_add.click">
          <Text fontWeight="500" fontSize="14px" marginX="2px" color={'readable.normal'}>
            {shortAddress}
          </Text>
        </CopyText>
      </Flex>
      <Flex alignItems="center" justifyContent={'center'} margin={'16px auto 0'}>
        <Text color="readable.tertiary" fontWeight="500" fontSize="12px" lineHeight="20px">
          Saldo Tersedia di Greenfield
        </Text>
        <Tips
          containerWidth={'200px'}
          tips={
            <Box fontSize={'12px'} lineHeight="14px" w={'200px'}>
              <Box>
                Perlu diketahui, karena ada biaya yang dikunci, saldo tersedia di Greenfield tidak sama
                dengan total saldo akun yang ditampilkan di dompet Anda.
              </Box>
            </Box>
          }
        />
      </Flex>
      <BalanceAmount />
    </>
  );
};
