const statusCodes = {
  302: 'Data telah dipindahkan sementara.',
  400: 'Permintaan tidak valid.',
  401: 'Perlu izin akses.',
  403: 'Akses ditolak karena Anda tidak memiliki izin.',
  404: 'Data tidak ditemukan.',
  408: 'Waktu permintaan habis.',
  409: 'Terjadi konflik pada permintaan.',
  500: 'Terjadi kesalahan pada server.',
  501: 'Fitur ini belum tersedia.',
  502: 'Server perantara menerima respons yang tidak valid.',
  503: 'Layanan sedang tidak tersedia.',
  504: 'Waktu tunggu server perantara habis.',
  505: 'Versi HTTP tidak didukung.',
};

export const errorCodes = { ...statusCodes };

export type TErrorCodeKey = keyof typeof errorCodes;
