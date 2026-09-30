import { IconFont } from '@/components/IconFont';
import { BillingHistoryQuery } from '@/modules/accounts';
import { AccountType, AccountInfo } from '@/store/slices/accounts';
import dayjs from 'dayjs';
import { InternalRoutePaths } from '@/constants/paths';
import { stringify } from 'querystring';

export const getAccountDisplay = (type: AccountType) => {
  const accountDisplays = {
    error_account: {
      name: 'Alamat Tidak Valid',
      icon: <IconFont type={'account-error'} w={24} />,
      tip: 'Alamat Tidak Valid',
    },
    unknown_account: {
      name: 'Akun Tidak Dikenal',
      icon: <IconFont type={'account-unknown'} w={24} />,
      tip: 'Pastikan Anda mengirim dana ke akun BNB Greenfield. Mengirim ke alamat di jaringan lain dapat menyebabkan dana hilang selamanya.',
    },
    gnfd_account: {
      name: 'Akun Reguler Greenfield',
      icon: <IconFont type={'account-gnfd'} w={24} />,
      tip: 'Akun Reguler Greenfield',
    },
    payment_account: {
      name: 'Akun Pembayaran',
      icon: <IconFont type={'account-payment'} w={24} />,
      tip: 'Akun Pembayaran',
    },
    non_refundable_payment_account: {
      name: 'Akun Pembayaran (Tidak Dapat Dikembalikan)',
      icon: <IconFont type={'account-nonrefundable'} w={24} />,
      tip: 'Akun Pembayaran (Tidak Dapat Dikembalikan)',
    },
  };
  return accountDisplays[type];
};

export const formatObjectAddress = (accountInfo: Record<string, AccountInfo>) => {
  const lowerKeyAccountInfo: Record<string, AccountInfo> = {};
  Object.entries(accountInfo).forEach(([key, value]) => {
    const lowerKey = key.toLowerCase();
    lowerKeyAccountInfo[lowerKey] = {
      ...value,
      address: value.address.toLowerCase(),
    };
  });

  return lowerKeyAccountInfo;
};

export const getCurMonthDetailUrl = () => {
  const curQuery: BillingHistoryQuery = {
    page: 1,
    tab: 'b',
    from: dayjs().startOf('M').format('YYYY-MM-DD'),
    to: dayjs().format('YYYY-MM-DD'),
  };

  return `${InternalRoutePaths.accounts}?${stringify(curQuery)}`;
};
