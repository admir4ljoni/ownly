import { DCButton } from '@/components/common/DCButton';
import { DCModal } from '@/components/common/DCModal';
import { useLogin } from '@/hooks/useLogin';
import { useAppDispatch, useAppSelector } from '@/store';
import { setDisconnectWallet } from '@/store/slices/global';
import { ModalBody, ModalCloseButton, ModalFooter, ModalHeader } from '@node-real/uikit';

export const DisconnectWalletModal = () => {
  const dispatch = useAppDispatch();
  const walletDisconnected = useAppSelector((root) => root.global.walletDisconnected);

  const { logout } = useLogin();

  const onClose = () => {
    dispatch(setDisconnectWallet(false));
  };

  return (
    <DCModal isOpen={walletDisconnected} onClose={onClose}>
      <ModalHeader>Putuskan Dompet</ModalHeader>
      <ModalCloseButton />
      <ModalBody color={'readable.tertiary'} textAlign={'center'} fontSize={18}>
        Apakah Anda yakin ingin memutuskan dompet? Tindakan ini dapat membuat berkas yang sedang
        diunggah gagal.
      </ModalBody>
      <ModalFooter>
        <DCButton size={'lg'} variant="ghost" flex={1} onClick={onClose} gaClickName={''}>
          Batal
        </DCButton>

        <DCButton size={'lg'} flex={1} onClick={() => logout(true)}>
          Putuskan
        </DCButton>
      </ModalFooter>
    </DCModal>
  );
};
