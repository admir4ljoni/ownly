import { Tips } from '@/components/common/Tips';
import { memo } from 'react';

interface TotalBalanceTipsProps {}

const TipsText =
  'Total saldo dihitung dengan menjumlahkan saldo bank Akun Utama, saldo statis Akun Utama, dan saldo semua Akun Pembayaran.';

export const TotalBalanceTips = memo<TotalBalanceTipsProps>(function TotalBalanceTips() {
  return <Tips width={280} placement={'top'} w={'fit-content'} tips={TipsText} />;
});
