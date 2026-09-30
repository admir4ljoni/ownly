import { Card } from './Common';
import { Box, Flex, Link, Text } from '@node-real/uikit';
import { IconFont } from '@/components/IconFont';
import { DCButton } from '@/components/common/DCButton';
import { useRouter } from 'next/router';
import { InternalRoutePaths } from '@/constants/paths';
import { useAppDispatch } from '@/store';
import { setIsShowTutorialCard } from '@/store/slices/persist';

export const TutorialCard = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onHideClick = () => {
    dispatch(setIsShowTutorialCard(false));
  };

  const steps = [
    {
      title: 'Buat penyimpanan',
      description:
        'Penyimpanan adalah tempat untuk menyimpan data Anda. Kelola data Anda dengan mudah lewat konsol atau SDK.',
      icon: 'create-bucket',
      Link: (
        <DCButton onClick={() => router.push(InternalRoutePaths.buckets)}>Buat Penyimpanan</DCButton>
      ),
    },
    {
      title: 'Kelola Berkas',
      description:
        'Unggah, hapus, dan bagikan berkas dengan grup undangan yang memiliki tingkat akses sesuai.',
      icon: 'upload-objects',
      Link: (
        <Link
          fontWeight={500}
          cursor="pointer"
          onClick={() => router.push(InternalRoutePaths.buckets)}
        >
          Buka Penyimpanan
        </Link>
      ),
    },
    {
      title: 'Pantau Penggunaan',
      description:
        'Ownly menyediakan dasbor yang praktis untuk memantau penggunaan data dan perkiraan biaya Anda dengan mudah.',
      icon: 'share-objects',
      Link: (
        <Link
          fontWeight={500}
          cursor="pointer"
          onClick={() => router.push(InternalRoutePaths.accounts)}
        >
          Lihat Akun
        </Link>
      ),
    },
  ];

  return (
    <Card mb={16} border="1px solid brand.brand6">
      <Flex justifyContent={'space-between'} paddingY={8} mb={8}>
        <Text fontSize={18} fontWeight={700}>
          Mulai dengan BNB Greenfield
        </Text>
        <Flex
          onClick={onHideClick}
          gap={4}
          color={'readable.tertiary'}
          alignItems={'center'}
          cursor={'pointer'}
        >
          <IconFont type="nosee" />
          <Text>Jangan tampilkan lagi</Text>
        </Flex>
      </Flex>
      <Flex>
        {steps.map((step, index) => (
          <>
            <Box key={index} marginX={24}>
              <Flex gap={8} mb={8} alignItems={'center'}>
                <Flex
                  fontSize={12}
                  w={20}
                  h={20}
                  justifyContent={'center'}
                  alignItems={'center'}
                  color={'brand.brand6'}
                  border="1px solid brand.brand6"
                  borderRadius={'10'}
                >
                  {index + 1}
                </Flex>
                <Text fontWeight={600}>{step.title}</Text>
              </Flex>
              <Text color="readable.tertiary" mb={16}>
                {step.description}
              </Text>
              {step.Link}
            </Box>
            {index !== steps.length - 1 && <Box w={1} bg={'readable.border'} />}
          </>
        ))}
      </Flex>
    </Card>
  );
};
