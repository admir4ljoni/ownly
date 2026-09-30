import { MAX_FOLDER_LEVEL } from '@/modules/object/components/CreateObject';
import { SINGLE_OBJECT_MAX_SIZE } from '@/store/slices/object';
import { formatBytes } from '@/utils/formatter';

export const OBJECT_ERROR_TYPES = {
  NO_QUOTA: {
    title: 'Kuota Tidak Cukup',
    desc: 'Penyimpanan tempat berkas ini disimpan tidak memiliki kuota unduhan yang cukup. Hubungi pemilik berkas untuk menambah kuota unduhan.',
    icon: 'empty-quota',
  },
  GET_QUOTA_FAILED: {
    title: 'Gagal Memuat Kuota',
    desc: 'Gagal memuat kuota, silakan coba lagi.',
    icon: 'discontinue',
  },
  PERMISSION_DENIED: {
    title: 'Anda Memerlukan Akses',
    desc: 'Anda tidak memiliki izin untuk mengunduh. Anda bisa meminta orang yang membagikan tautan untuk mengundang Anda secara langsung.',
    icon: 'status-failed',
  },
  UNKNOWN: {
    title: 'Terjadi Kesalahan',
    desc: 'Ups, terjadi kesalahan. ',
    icon: 'discontinue',
  },
  FILE_TOO_LARGE_URL: {
    title: 'Berkas terlalu besar',
    icon: 'too-large',
    desc: `Ukuran berkas melebihi batas maksimum yang diizinkan (${formatBytes(SINGLE_OBJECT_MAX_SIZE)}).`,
  },
  FILE_IS_EMPTY: {
    title: 'Berkas kosong',
    icon: 'empty-upload',
    desc: 'Ukuran berkas nol, silakan periksa.',
  },
  OBJECT_TOO_LARGE: {
    title: 'Berkas terlalu besar',
    icon: 'too-large',
    desc: `Ukuran berkas melebihi batas maksimum yang diizinkan (${formatBytes(SINGLE_OBJECT_MAX_SIZE)}).`,
  },
  OBJECT_NAME_EXISTS: {
    title: 'Nama berkas sudah ada',
    icon: 'status-failed',
  },
  FOLDER_NAME_EXISTS: {
    title: 'Nama folder sudah ada',
    icon: 'status-failed',
  },
  ACCOUNT_BALANCE_NOT_ENOUGH: {
    title: 'Saldo akun tidak cukup',
    icon: 'status-failed',
    desc: 'Saldo akun tidak cukup, silakan isi saldo.',
  },
  NO_PERMISSION: {
    title: 'Anda Memerlukan Akses',
    icon: 'status-failed',
    desc: 'Anda tidak memiliki izin untuk mengunduh. Anda bisa meminta orang yang membagikan tautan untuk mengundang Anda secara langsung.',
  },
  SP_STORAGE_PRICE_FAILED: {
    title: 'Gagal memuat harga penyimpanan',
    icon: 'status-failed',
    desc: 'Gagal memuat harga penyimpanan, silakan pilih Penyedia Penyimpanan lain.',
  },
  FOLDER_NAME_TOO_LONG: {
    title: 'Nama folder harus terdiri dari 1 hingga 70 karakter.',
    icon: 'status-failed',
    desc: 'Nama folder harus terdiri dari 1 hingga 70 karakter.',
  },
  OBJECT_NAME_TOO_LONG: {
    title: 'Nama berkas harus terdiri dari 1 hingga 256 karakter.',
    icon: 'status-failed',
    desc: 'Nama berkas harus terdiri dari 1 hingga 256 karakter.',
  },
  FULL_OBJECT_NAME_TOO_LONG: {
    title: 'Nama lengkap berkas harus terdiri dari 1 hingga 1024 karakter.',
    icon: 'status-failed',
    desc: 'Nama lengkap berkas harus terdiri dari 1 hingga 1024 karakter.',
  },
  BUCKET_NOT_EMPTY: {
    title: 'Penyimpanan Tidak Kosong',
    desc: 'Hanya penyimpanan kosong yang dapat dihapus. Hapus semua berkas di penyimpanan ini terlebih dahulu.',
    icon: 'empty-bucket',
  },
  MAX_FOLDER_DEPTH: {
    icon: 'status-failed',
    desc: `Anda telah mencapai batas maksimum kedalaman folder (${MAX_FOLDER_LEVEL}).`,
    title: `Anda telah mencapai batas maksimum kedalaman folder (${MAX_FOLDER_LEVEL}).`,
  },
};

export type ObjectErrorType = keyof typeof OBJECT_ERROR_TYPES;
