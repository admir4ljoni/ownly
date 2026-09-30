import { Animates } from '@/components/AnimatePng';
import { IconFont } from '@/components/IconFont';
import { useAppDispatch, useAppSelector } from '@/store';
import { setSignatureAction } from '@/store/slices/global';
import { Flex, Text, toast } from '@node-real/uikit';
import { BUTTON_GOT_IT, WALLET_CONFIRM } from '../constant';
import { cancelMigrateBucket, headBucket } from '@/facade/bucket';
import { MsgCancelMigrateBucket } from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/tx';
import { useAccount } from 'wagmi';
import { BucketStatus } from '@bnb-chain/greenfield-js-sdk';
import { setupBucket } from '@/store/slices/bucket';

export const MigratingBucketNoticeBanner = ({ bucketName }: { bucketName: string }) => {
  const dispatch = useAppDispatch();
  const { connector } = useAccount();
  const loginAccount = useAppSelector((root) => root.persist.loginAccount);
  const onCancelMigration = async () => {
    dispatch(
      setSignatureAction({
        icon: Animates.object,
        title: 'Membatalkan Migrasi Penyimpanan',
        desc: WALLET_CONFIRM,
      }),
    );
    const params: MsgCancelMigrateBucket = {
      operator: loginAccount,
      bucketName,
    };
    const bucketInfo = await headBucket(bucketName);
    if (bucketInfo?.bucketStatus === BucketStatus.BUCKET_STATUS_CREATED) {
      await dispatch(setupBucket(bucketName));
      dispatch(setSignatureAction({}));
      toast.success({ description: 'Penyimpanan ini sudah dimigrasikan!' });
      return;
    }

    const [txRes, error] = await cancelMigrateBucket(params, connector!);

    if (!txRes || txRes.code !== 0) {
      return dispatch(
        setSignatureAction({
          title: 'Migrasi Gagal',
          icon: 'status-failed',
          desc: 'Maaf, terjadi kesalahan saat menandatangani dengan dompet.',
          buttonText: BUTTON_GOT_IT,
          errorText: 'Pesan kesalahan: ' + error,
        }),
      );
    }
    await dispatch(setupBucket(bucketName));
    dispatch(setSignatureAction({}));
    toast.success({ description: 'Migrasi penyimpanan berhasil dibatalkan!' });
  };

  return (
    <Flex
      color={'#3685D8'}
      justifyContent={'space-between'}
      mb={16}
      backgroundColor="opacity7"
      padding={8}
      alignItems={'center'}
    >
      <Flex alignItems={'center'} gap={4}>
        <IconFont type="migrate" />
        Penyimpanan ini sedang dalam proses migrasi data ke penyedia lain, dan hanya mendukung unduhan,
        perubahan kuota, penghapusan, dan berbagi.
      </Flex>
      <Text
        as="span"
        _hover={{ color: '#3685D8' }}
        cursor="pointer"
        textDecoration={'underline'}
        onClick={onCancelMigration}
      >
        Batalkan Migrasi
      </Text>
    </Flex>
  );
};
