import { UploadObject } from '@/store/slices/global';
import { Loading } from '@/components/common/Loading';
import { UploadProgress } from './UploadProgress';
import { IconFont } from '@/components/IconFont';
import { memo } from 'react';

export const ObjectUploadStatus = memo(function ObjectUploadStatus({
  task,
}: {
  task: UploadObject;
}) {
  switch (task.status) {
    case 'RETRY_CHECK':
    case 'RETRY_CHECKING':
      return (
        <>
          <Loading iconSize={12} justifyContent={'flex-end'} />
          Memeriksa
        </>
      );
    case 'WAIT':
      return (
        <>
          <Loading iconSize={12} justifyContent={'flex-end'} />
          Menunggu
        </>
      );
    case 'HASH':
      return (
        <>
          <Loading iconSize={12} justifyContent={'flex-end'} />
          Memproses
        </>
      );
    case 'HASHED':
      return <UploadProgress value={0} />;
    case 'SIGN':
      return <UploadProgress value={0} />;
    case 'SIGNED':
      return <UploadProgress value={0} />;
    case 'UPLOAD':
      return <UploadProgress value={task.progress || 0} />;
    case 'SEAL':
    case 'SEALING':
      return (
        <>
          <Loading iconSize={12} justifyContent={'flex-end'} />
          Menyimpan
        </>
      );
    case 'FINISH':
      return (
        <>
          <IconFont type="colored-success" w={16} />
          Selesai
        </>
      );
    case 'ERROR':
      return (
        <>
          <IconFont type="colored-error2" w={20} />
          Gagal
        </>
      );
    case 'CANCEL':
      return (
        <>
          <IconFont type="stop" w={20} />
          Dihentikan
        </>
      );
    default:
      return null;
  }
});
