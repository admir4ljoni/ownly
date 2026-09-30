import { ObjectMeta } from '@bnb-chain/greenfield-js-sdk/dist/esm/types/sp/Common';

// status_TITLE
const FILE_TITLE_UPLOADING = 'Mengunggah Berkas';
const FILE_TITLE_DOWNLOADING = 'Mengunduh Berkas';
const FILE_TITLE_DELETING = 'Menghapus Berkas';
const FILE_TITLE_CANCELING = 'Membatalkan Unggahan';
const FOLDER_CREATING = 'Membuat Folder';
const FILE_ACCESS = 'Memperbarui Akses';
// error title
const FILE_TITLE_UPLOAD_FAILED = 'Unggah Gagal';
const FILE_TITLE_DOWNLOAD_FAILED = 'Unduh Gagal';
const FILE_TITLE_DELETE_FAILED = 'Hapus Gagal';
const FILE_TITLE_CANCEL_FAILED = 'Batal Gagal';
const NOT_ENOUGH_QUOTA = 'Kuota Tidak Cukup';
const FOLDER_CREATE_FAILED = 'Gagal Membuat';
const FOLDER_TITLE_NOT_EMPTY = 'Folder Tidak Kosong';

const FILE_TITLE_FILE_TOO_LARGE = 'Berkas Melebihi Batas Ukuran';
const FILE_TITLE_FILE_EMPTY = 'Berkas Kosong';
const FILE_TITLE_FILE_NAME_ERROR = 'Nama Berkas Tidak Valid';
const FILE_TITLE_SP_REJECTED = 'Ditolak Penyedia Penyimpanan';

// status description
const FILE_STATUS_DOWNLOADING = `Sedang mengunduh berkas, mohon tunggu...`;
// error description
const FILE_DESCRIPTION_DELETE_ERROR = `Maaf, terjadi kesalahan saat menghapus berkas.`;
const FILE_DESCRIPTION_CANCEL_ERROR = `Maaf, terjadi kesalahan saat membatalkan berkas.`;
const FOLDER_DESCRIPTION_CREATE_ERROR = `Maaf, terjadi kesalahan saat membuat folder.`;
const BUTTON_GOT_IT = 'Mengerti';
const FOLDER_DESC_NOT_EMPTY =
  'Hanya folder kosong yang dapat dihapus. Hapus semua berkas di folder ini terlebih dahulu.';

// file status
const OBJECT_SEALED_STATUS = 1;

const GET_GAS_FEE_LACK_BALANCE_ERROR = `Gagal memperkirakan biaya jaringan, silakan coba lagi nanti.`;
const LOCK_FEE_LACK_BALANCE_ERROR = `Saldo tersedia saat ini tidak cukup untuk biaya prabayar, silakan periksa.`;
const DUPLICATE_OBJECT_NAME = 'Nama ini sudah digunakan, coba nama lain.';
const UNKNOWN_ERROR = `Terjadi kesalahan. Silakan coba lagi nanti.`;
const AUTH_EXPIRED = 'Authentication Expired';
const WALLET_CONFIRM = 'Silakan konfirmasi transaksi di dompet Anda.';
export const PAYMASTER_CONTINUE_DESC =
  'Akun pembayaran ini bukan milik Anda. Pastikan pemilik akun sudah mengatur laju pembayaran untuk Anda; jika belum, Anda tidak akan bisa mengunggah apa pun ke penyimpanan ini.';
export const CONTINUE_STEP = 'Lanjutkan';

export const EMPTY_TX_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';

export const MOCK_EMPTY_FOLDER_OBJECT: ObjectMeta = {
  ObjectInfo: {
    Owner: '0xDB8040c64d24840BD1D6BcAC7112D2A143CC2EEa',
    Creator: '0xDB8040c64d24840BD1D6BcAC7112D2A143CC2EEa',
    BucketName: '',
    ObjectName: '',
    Id: 0,
    LocalVirtualGroupId: 0,
    PayloadSize: 0,
    Visibility: 3,
    ContentType: 'text/plain',
    CreateAt: 1711002963,
    ObjectStatus: 1,
    RedundancyType: 0,
    SourceType: 0,
    Checksums: [
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
      'Xfbg4nYTWdMKgnUFjimfzAOBU0VF9Vz0PkGYP11MlFY=',
    ],
    Tags: {
      Tags: [],
    },
  },
  LockedBalance: '0x0000000000000000000000000000000000000000000000000000000000000000',
  Removed: false,
  UpdateAt: 3075455,
  DeleteAt: 0,
  DeleteReason: '',
  Operator: '0x0000000000000000000000000000000000000000',
  CreateTxHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
  UpdateTxHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
  SealTxHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
};

export {
  AUTH_EXPIRED,
  BUTTON_GOT_IT,
  DUPLICATE_OBJECT_NAME,
  FILE_ACCESS,
  FILE_DESCRIPTION_CANCEL_ERROR,
  FILE_DESCRIPTION_DELETE_ERROR,
  FILE_STATUS_DOWNLOADING,
  FILE_TITLE_CANCELING,
  FILE_TITLE_CANCEL_FAILED,
  FILE_TITLE_DELETE_FAILED,
  FILE_TITLE_DELETING,
  FILE_TITLE_DOWNLOADING,
  FILE_TITLE_DOWNLOAD_FAILED,
  FILE_TITLE_FILE_EMPTY,
  FILE_TITLE_FILE_NAME_ERROR,
  FILE_TITLE_FILE_TOO_LARGE,
  FILE_TITLE_SP_REJECTED,
  FILE_TITLE_UPLOADING,
  FILE_TITLE_UPLOAD_FAILED,
  FOLDER_CREATE_FAILED,
  FOLDER_CREATING,
  FOLDER_DESCRIPTION_CREATE_ERROR,
  FOLDER_DESC_NOT_EMPTY,
  FOLDER_TITLE_NOT_EMPTY,
  GET_GAS_FEE_LACK_BALANCE_ERROR,
  LOCK_FEE_LACK_BALANCE_ERROR,
  NOT_ENOUGH_QUOTA,
  OBJECT_SEALED_STATUS,
  UNKNOWN_ERROR,
  WALLET_CONFIRM,
};
