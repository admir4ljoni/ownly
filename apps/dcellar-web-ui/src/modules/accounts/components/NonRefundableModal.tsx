import { IconFont } from '@/components/IconFont';
import { DCButton } from '@/components/common/DCButton';
import { DCModal } from '@/components/common/DCModal';
import { disablePaymentAccountRefund } from '@/facade/account';
import { useAppDispatch, useAppSelector } from '@/store';
import { setEditingPaymentAccountRefundable, setupAccountRecords } from '@/store/slices/accounts';
import { setSignatureAction } from '@/store/slices/global';
import { ModalBody, ModalCloseButton, ModalFooter, Text } from '@node-real/uikit';
import { memo } from 'react';
import { useAccount } from 'wagmi';

interface NonRefundableModal {}

export const NonRefundableModal = memo<NonRefundableModal>(function NonRefundableModal() {
  const dispatch = useAppDispatch();
  const loginAccount = useAppSelector((root) => root.persist.loginAccount);
  const editingPaymentAccountRefundable = useAppSelector(
    (root) => root.accounts.editingPaymentAccountRefundable,
  );

  const { connector } = useAccount();

  const isOpen = !!editingPaymentAccountRefundable;

  const onClose = () => {
    dispatch(setEditingPaymentAccountRefundable(''));
  };

  const onContinueClick = async () => {
    if (!connector) return;
    onClose();
    dispatch(
      setSignatureAction({
        icon: 'account-failed',
        title: 'Jadikan Tidak Dapat Dikembalikan',
        desc: 'Silakan konfirmasi transaksi di dompet Anda.',
      }),
    );
    const [res, error] = await disablePaymentAccountRefund(
      { address: loginAccount, paymentAccount: editingPaymentAccountRefundable },
      connector,
    );
    if (error || (res && res.code !== 0)) {
      let msg = error as string;
      if (
        error?.toLocaleLowerCase().includes('payment account has already be set as non-refundable')
      ) {
        msg = 'Akun Pembayaran ini sudah diatur tidak dapat dikembalikan dananya.';
      }
      return dispatch(
        setSignatureAction({
          title: 'Gagal Mengatur',
          icon: 'account-failed',
          desc: msg,
        }),
      );
    }
    dispatch(setupAccountRecords(editingPaymentAccountRefundable));
    dispatch(setSignatureAction({}));
  };

  return (
    <DCModal isOpen={isOpen} onClose={onClose}>
      <ModalCloseButton />
      <ModalBody display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <IconFont type={'account-failed'} w={120} />
        <Text mt={32} fontSize={24} fontWeight={600}>
          Jadikan Tidak Dapat Dikembalikan
        </Text>
        <Text fontSize="16px" textAlign={'center'} marginTop="8px" color={'readable.tertiary'}>
          Menjadikan Akun Pembayaran ini tidak dapat dikembalikan berarti dananya tidak bisa ditarik
          kembali lagi, dan tindakan ini tidak dapat dibatalkan.
        </Text>
      </ModalBody>
      <ModalFooter flexDirection={'row'}>
        <DCButton
          size={'lg'}
          variant="ghost"
          flex={1}
          onClick={onClose}
          gaClickName="dc.payment_account.delete_confirm.cancel.click"
        >
          Batal
        </DCButton>
        <DCButton
          size={'lg'}
          gaClickName="dc.payment_account.delete_confirm.delete.click"
          flex={1}
          onClick={onContinueClick}
        >
          Lanjutkan
        </DCButton>
      </ModalFooter>
    </DCModal>
  );
});
