import styled from '@emotion/styled';
import { Heading, Text } from '@node-real/uikit';
import Link from 'next/link';
import { memo } from 'react';

import { DCButton } from '@/components/common/DCButton';
import { IconFont } from '@/components/IconFont';

export const SHARE_ERROR_TYPES = {
  NO_QUOTA: {
    title: 'Kuota Tidak Cukup',
    desc: 'Penyimpanan tempat berkas ini disimpan tidak memiliki kuota unduhan yang cukup. Hubungi pemilik berkas untuk menambah kuota unduhan.',
    icon: 'empty-quota',
  },
  PERMISSION_DENIED: {
    title: 'Anda Memerlukan Akses',
    desc: 'Anda tidak memiliki izin untuk mengunduh. Anda bisa meminta orang yang membagikan tautan untuk mengundang Anda secara langsung.',
    icon: 'status-failed',
  },
  NOT_FOUND: {
    title: 'Berkas Tidak Ada atau Sudah Dihapus',
    desc: 'Item ini mungkin tidak ada atau sudah tidak tersedia. Hubungi pemilik item ini untuk informasi lebih lanjut.',
    icon: 'status-failed',
  },
  SP_NOT_FOUND: {
    title: 'Terjadi Kesalahan',
    desc: 'Informasi alamat Penyedia Penyimpanan tidak cocok. Silakan coba lagi.',
    icon: 'discontinue',
  },
  UNKNOWN: {
    title: 'Terjadi Kesalahan',
    desc: 'Ups, terjadi kesalahan. ',
    icon: 'discontinue',
  },
};

export type ShareErrorType = keyof typeof SHARE_ERROR_TYPES;

export const ShareError = memo<{ type: ShareErrorType }>(function ShareError({ type }) {
  const errorData = SHARE_ERROR_TYPES[type];

  return (
    <Content>
      <IconFont w={120} type={errorData.icon} />
      <Heading fontWeight={600} fontSize={24} lineHeight="36px" mt={10} mb={16}>
        {errorData.title}
      </Heading>
      <Text fontSize={16} lineHeight="19px" color="readable.secondary" maxW={434} mb={32}>
        {errorData.desc}
      </Text>
      <Link href="/buckets" legacyBehavior passHref replace>
        <DCButton w={188} h={48} as="a" mb={40} fontSize={16}>
          Kembali ke Beranda
        </DCButton>
      </Link>
    </Content>
  );
});

const Content = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
