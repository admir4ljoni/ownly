import { IconFont } from '@/components/IconFont';
import { useAppDispatch, useAppSelector } from '@/store';
import { BucketEntity } from '@/store/slices/bucket';
import { setObjectListPage } from '@/store/slices/object';
import { formatFullTime } from '@/utils/time';
import styled from '@emotion/styled';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { BucketStatus as BucketStatusEnum } from '@bnb-chain/greenfield-js-sdk';
import { BucketStatusNotice } from './BucketStatusNotice';

interface BucketNameColumnProps {
  item: BucketEntity;
}

export const BucketNameColumn = memo<BucketNameColumnProps>(function BucketNameColumn({ item }) {
  const dispatch = useAppDispatch();
  const bucketRecords = useAppSelector((root) => root.bucket.bucketRecords);
  const { DeleteAt, BucketStatus, BucketName, OffChainStatus } = bucketRecords[item.BucketName];
  const isFlowRateLimit = ['1', '3'].includes(OffChainStatus);
  const bucketStatusReason = useMemo(() => {
    switch (BucketStatus) {
      case BucketStatusEnum.BUCKET_STATUS_DISCONTINUED: {
        const estimateTime = formatFullTime(
          +DeleteAt * 1000 + 7 * 24 * 60 * 60 * 1000,
          'YYYY-MM-DD HH:mm:ss',
        );
        return {
          icon: 'colored-error2',
          title: 'Pemberitahuan Penghentian',
          desc: `Item ini akan dihapus oleh Penyedia Penyimpanan dengan perkiraan waktu ${estimateTime}. Harap cadangkan data Anda tepat waktu.`,
          show: true,
        };
      }
      case BucketStatusEnum.BUCKET_STATUS_MIGRATING:
        return {
          icon: 'migrate',
          title: 'Data Sedang Dipindahkan',
          desc: 'Penyimpanan ini sedang dipindahkan ke penyedia lain. Selama proses ini hanya bisa unduh, ubah kuota, hapus, dan bagikan. Unggah tidak tersedia.',
          show: true,
        };
      default:
        return null;
    }
  }, [BucketStatus, DeleteAt]);

  return (
    <Container>
      <Link
        href={`/buckets/${BucketName}`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setObjectListPage({ path: BucketName, current: 0 }));
        }}
      >
        <IconFont type="bucket-thumbnail" w={20} />
        <span title={item.BucketName}>{item.BucketName}</span>
      </Link>
      {(bucketStatusReason || isFlowRateLimit) && (
        <BucketStatusNotice
          bucketStatusReason={bucketStatusReason}
          flowRateLimit={isFlowRateLimit}
        />
      )}
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    min-width: 0;

    span {
      margin: 0 4px;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
