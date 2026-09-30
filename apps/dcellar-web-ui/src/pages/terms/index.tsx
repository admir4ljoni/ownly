import { Box, Flex, Text, TextProps } from '@node-real/uikit';
import { ReactElement } from 'react';

import { LandingPage } from '@/components/layout/LandingPage';
import { smMedia } from '@/modules/responsive';

const H1 = ({ children, ...restProps }: TextProps) => (
  <Text as="h1" fontSize={40} fontWeight={700} {...restProps}>
    {children}
  </Text>
);

const H2 = ({ children, ...restProps }: TextProps) => (
  <Text as="h2" fontSize={24} fontWeight={600} {...restProps}>
    {children}
  </Text>
);

const Content = ({ children, ...restProps }: TextProps) => (
  <Text as="p" fontSize={16} fontWeight={400} {...restProps}>
    {children}
  </Text>
);

export default function TermsOfUsePage() {
  return (
    <Box w={'100%'} bgColor={'#fff'}>
      <Flex
        flexDirection={'column'}
        gap={20}
        bgColor={'#fff'}
        width={954}
        margin={'auto auto'}
        padding={'145px 20px 80px'}
        sx={{
          [smMedia]: {
            width: 'calc(100% - 20px)',
            padding: '105px 20px 40px',
          },
        }}
      >
        <H1>Ketentuan Penggunaan Ownly</H1>
        <Content>
          Syarat dan ketentuan berikut mengatur seluruh penggunaan situs web Ownly serta semua
          konten, layanan, dan produk yang tersedia di atau melalui situs web ini. Situs Web ini
          dimiliki dan dioperasikan oleh NodeReal. Situs Web ini disediakan dengan syarat Anda
          menerima, tanpa perubahan, seluruh syarat dan ketentuan yang tercantum di sini serta
          semua aturan operasional, kebijakan, dan prosedur lain yang dapat dipublikasikan oleh
          NodeReal di Situs ini dari waktu ke waktu.
        </Content>
        <Content>
          Harap baca Perjanjian ini dengan saksama sebelum mengakses atau menggunakan Situs Web.
          Dengan mengakses atau menggunakan bagian mana pun dari situs web ini, Anda setuju untuk
          terikat pada syarat dan ketentuan perjanjian ini. Jika Anda tidak menyetujui seluruh syarat
          dan ketentuan perjanjian ini, Anda tidak boleh mengakses Situs Web atau menggunakan
          layanan apa pun. Jika syarat dan ketentuan ini dianggap sebagai penawaran dari NodeReal,
          penerimaan secara tegas terbatas pada ketentuan ini. Situs Web ini hanya tersedia bagi
          individu yang berusia minimal 13 tahun.
        </Content>
        <H2>Batasan Penggunaan</H2>
        <Content>
          Pelanggan tidak boleh (a) merekayasa balik, menyalin, mengubah, mengadaptasi, meretas
          Layanan Penyimpanan, atau mencoba mendapatkan akses tanpa izin ke Layanan Penyimpanan
          atau sistem maupun jaringan terkait; (b) tanpa izin, mengakses Layanan Penyimpanan,
          Dokumentasi, atau Informasi Rahasia Perusahaan untuk membangun produk atau Layanan
          Penyimpanan pesaing; (c) mengubah atau menghapus, atau mengizinkan pihak ketiga mana pun
          untuk mengubah atau menghapus, tanda merek dagang atau hak cipta milik pihak mana pun yang
          tercantum, ditandai, atau ditempelkan pada Layanan Penyimpanan; (d) mengakses atau
          menggunakan Layanan Penyimpanan: (i) untuk menyimpan materi yang melanggar hak, cabul,
          mengancam, atau melanggar hukum lainnya, termasuk materi yang melanggar hak privasi pihak
          ketiga; (ii) dengan melanggar hukum yang berlaku; (iii) untuk menyimpan materi yang secara
          sadar atau sengaja berisi virus, worm, Trojan horse, atau kode, berkas, maupun skrip
          komputer berbahaya lainnya; atau, (iv) dengan cara yang mengganggu atau merusak integritas
          atau kinerja Layanan Penyimpanan atau Materi Penyimpanan milik pengguna lain dari Layanan
          Penyimpanan; atau, (e) mendaftar lebih dari satu Akun per Satelit.
        </Content>
        <H2>Informasi Sensitif/Pribadi</H2>
        <Content>
          Anda setuju bahwa, tanpa membuat perjanjian terpisah, Anda tidak akan menggunakan Layanan
          Penyimpanan untuk mengirim atau menyimpan informasi pribadi yang tunduk pada persyaratan
          penanganan khusus berdasarkan regulasi atau kontrak (misalnya, Payment Card Industry Data
          Security Standards, Gramm-Leach-Bliley Act, Health Insurance Portability and
          Accountability Act, dan/atau undang-undang perlindungan data lainnya) termasuk namun tidak
          terbatas pada: informasi kartu kredit, nomor kartu kredit dan informasi strip magnetik,
          nomor jaminan sosial, nomor SIM, nomor paspor, nomor identitas yang diterbitkan
          pemerintah, informasi terkait kesehatan, data biometrik, informasi rekening keuangan,
          informasi identitas pribadi yang dikumpulkan dari anak-anak di bawah usia 13 tahun atau
          dari layanan daring yang ditujukan untuk anak-anak, dan data lokasi geografis waktu nyata
          yang dapat mengidentifikasi seseorang, atau informasi yang dianggap “sensitif” menurut
          hukum yang berlaku (seperti asal ras atau etnis, pandangan politik, atau keyakinan agama
          maupun filosofis).
        </Content>
        <H2>Data Turunan</H2>
        <Content>
          Kecuali untuk perangkat lunak yang tunduk pada Lisensi Sumber Terbuka, dan kecuali untuk
          hak apa pun yang secara tegas diberikan berdasarkan Perjanjian ini, Perusahaan dan pemberi
          lisensinya memiliki dan akan mempertahankan seluruh hak, kepemilikan, dan kepentingan atas
          Layanan Penyimpanan (termasuk setiap perbaikan, peningkatan, penyesuaian, dan
          perubahannya), Dokumentasi, Informasi Rahasia Perusahaan, dan Data Turunan, termasuk
          namun tidak terbatas pada seluruh hak kekayaan intelektual terkait di dalamnya. Untuk
          keperluan ini, istilah “Data Turunan” berarti data yang berasal dari pengoperasian Uplink
          dan Layanan Penyimpanan melalui Uplink, serta data apa pun yang dihimpun oleh Perusahaan
          (termasuk penghimpunan dengan data yang bersumber dari Pelanggan lain dan sumber data
          pihak ketiga lainnya), serta data dan informasi mengenai akses dan partisipasi Pelanggan
          dalam Layanan Penyimpanan, termasuk namun tidak terbatas pada data statistik penggunaan
          yang berasal dari penggunaan Layanan Penyimpanan dan konfigurasinya, data log, dan hasil
          kinerja terkait. Untuk menghindari keraguan, tidak ada ketentuan di sini yang dapat
          ditafsirkan sebagai larangan bagi Perusahaan untuk memanfaatkan Data Turunan guna
          mengoptimalkan dan meningkatkan Layanan Penyimpanan atau menjalankan bisnis Perusahaan;
          dengan ketentuan bahwa jika Perusahaan memberikan Data Turunan kepada pihak ketiga, Data
          Turunan tersebut akan dianonimkan dan disajikan secara agregat sehingga tidak
          mengungkapkan identitas Pelanggan kepada pihak ketiga mana pun. Tidak ada hak yang
          diberikan kepada Pelanggan berdasarkan perjanjian ini selain yang secara tegas tercantum
          dalam Perjanjian ini.
        </Content>
        <H2>Hak untuk Menangguhkan atau Menghentikan</H2>
        <Content>
          Dengan atau tanpa pemberitahuan, Perusahaan dapat segera menangguhkan atau menghentikan
          Akun Pelanggan atau Pengguna Akhir Pelanggan mana pun yang: (a) melanggar Perjanjian ini;
          (b) menggunakan Layanan Penyimpanan dengan cara yang menurut Perusahaan secara wajar dapat
          menimbulkan risiko keamanan, gangguan terhadap penggunaan Layanan Penyimpanan oleh pihak
          lain, atau tanggung jawab hukum bagi Perusahaan; atau, (c) menjadi subjek dari satu atau
          lebih laporan pelanggaran Batasan Penggunaan. Setelah penangguhan, Perusahaan berhak
          membatasi akses ke Layanan Penyimpanan pada Akun Pelanggan tanpa batas waktu hingga
          Perusahaan, atas kebijakannya sendiri, memutuskan apakah akan memulihkan atau
          menghentikan akun yang ditangguhkan tersebut.
        </Content>
        <H2>Cadangan Data</H2>
        <Content>
          Perusahaan tidak menjamin pemeliharaan Materi Penyimpanan apa pun dan tidak bertanggung
          jawab atas kehilangan, penyalahgunaan, atau penghapusan Materi Penyimpanan maupun
          kegagalan penyimpanan atau enkripsi Materi Penyimpanan apa pun. Anda sendiri bertanggung
          jawab untuk mencadangkan dan menyimpan salinan Materi Penyimpanan.
        </Content>
        <H2>Keamanan</H2>
        <Content>
          Anda bertanggung jawab untuk mengatur dan menggunakan Layanan Penyimpanan dengan benar
          untuk menyimpan Materi Penyimpanan Anda serta menjaga keamanan yang memadai atas Materi
          Penyimpanan Anda.
        </Content>
        <H2>Kepatuhan terhadap Hukum</H2>
        <Content>
          Anda sendiri bertanggung jawab untuk memastikan bahwa penyimpanan Materi Penyimpanan Anda
          melalui Layanan Penyimpanan mematuhi seluruh hukum yang berlaku. Kami tidak memberikan
          pernyataan atau jaminan apa pun mengenai kesesuaian Layanan Penyimpanan untuk menyimpan
          jenis data tertentu atau untuk penggunaan spesifik Anda. Perusahaan tidak memberikan
          pernyataan atau jaminan bahwa penggunaan Layanan Penyimpanan untuk menyimpan Materi
          Penyimpanan yang berisi data pribadi atau data sensitif yang memerlukan perlindungan
          keamanan lebih tinggi telah mematuhi regulasi atau hukum tertentu, termasuk namun tidak
          terbatas pada (i) “informasi kesehatan yang dilindungi” sebagaimana didefinisikan dalam
          Health Insurance Portability and Accountability Act (“HIPAA”), (ii) “data pemegang kartu”
          sebagaimana didefinisikan dalam Payment Card Industry Data Security Standard (“PCI DSS”),
          atau (iii) “Data Pribadi Sensitif” sebagaimana didefinisikan dalam General Data Protection
          Regulation, Regulation (EU) 2016/679 (“GDPR”), dan hukum lain yang berlaku. Anda wajib
          memberikan seluruh pemberitahuan kepada, dan memperoleh persetujuan yang diperlukan dari,
          pihak ketiga sebagaimana diwajibkan oleh hukum yang berlaku sehubungan dengan penyimpanan
          Materi Penyimpanan melalui Layanan Penyimpanan. Kami berhak, kapan saja dan tanpa
          pemberitahuan, untuk menghapus, menolak, atau menghilangkan Materi Penyimpanan apa pun
          yang berisi data tidak terenkripsi dan/atau teks biasa, atau yang dengan cara lain
          melanggar Perjanjian ini.
        </Content>
        <H2>PENAFIAN JAMINAN DAN BATASAN TANGGUNG JAWAB</H2>
        <Content>
          SITUS NODEREAL DAN SELURUH INFORMASI, KONTEN, MATERI, PRODUK (TERMASUK PERANGKAT LUNAK
          APA PUN) SERTA LAYANAN YANG TERSEDIA DI ATAU DISEDIAKAN UNTUK ANDA MELALUI SITUS INI
          DISEDIAKAN OLEH NODEREAL “SEBAGAIMANA ADANYA” DAN “SEBAGAIMANA TERSEDIA”, KECUALI
          DITENTUKAN LAIN DALAM PERJANJIAN. NODEREAL TIDAK MEMBERIKAN PERNYATAAN ATAU JAMINAN APA
          PUN, BAIK TERSURAT MAUPUN TERSIRAT, MENGENAI PENGOPERASIAN SITUS INI ATAU INFORMASI,
          KONTEN, MATERI, PRODUK (TERMASUK PERANGKAT LUNAK APA PUN) ATAU LAYANAN YANG TERSEDIA DI
          ATAU DISEDIAKAN UNTUK ANDA MELALUI SITUS NODEREAL, KECUALI DITENTUKAN LAIN SECARA
          TERTULIS. ANDA SECARA TEGAS MENYETUJUI BAHWA PENGGUNAAN SITUS INI SEPENUHNYA MERUPAKAN
          RISIKO ANDA SENDIRI. SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, NODEREAL MENOLAK SEMUA
          JAMINAN, BAIK TERSURAT MAUPUN TERSIRAT, TERMASUK NAMUN TIDAK TERBATAS PADA JAMINAN
          TERSIRAT ATAS KELAYAKAN UNTUK DIPERDAGANGKAN DAN KESESUAIAN UNTUK TUJUAN TERTENTU.
          NODEREAL TIDAK MENJAMIN BAHWA SITUS INI; INFORMASI, KONTEN, MATERI, PRODUK (TERMASUK
          PERANGKAT LUNAK APA PUN) ATAU LAYANAN YANG TERSEDIA DI ATAU DISEDIAKAN UNTUK ANDA MELALUI
          SITUS NODEREAL; SERVERNYA; ATAU E-MAIL YANG DIKIRIM DARI NODEREAL BEBAS DARI VIRUS ATAU
          KOMPONEN BERBAHAYA LAINNYA. NODEREAL TIDAK BERTANGGUNG JAWAB ATAS KERUGIAN APA PUN YANG
          TIMBUL DARI PENGGUNAAN SITUS NODEREAL ATAU DARI INFORMASI, KONTEN, MATERI, PRODUK
          (TERMASUK PERANGKAT LUNAK) ATAU LAYANAN APA PUN YANG TERSEDIA DI ATAU DISEDIAKAN UNTUK
          ANDA MELALUI SITUS NODEREAL, TERMASUK NAMUN TIDAK TERBATAS PADA KERUGIAN LANGSUNG, TIDAK
          LANGSUNG, INSIDENTAL, HUKUMAN, DAN KONSEKUENSIAL, KECUALI DITENTUKAN LAIN DALAM
          PERJANJIAN. HUKUM DI BEBERAPA WILAYAH TIDAK MENGIZINKAN PEMBATASAN ATAS JAMINAN TERSIRAT
          ATAU PENGECUALIAN MAUPUN PEMBATASAN ATAS KERUGIAN TERTENTU. JIKA HUKUM TERSEBUT BERLAKU
          BAGI ANDA, SEBAGIAN ATAU SELURUH PENAFIAN, PENGECUALIAN, ATAU PEMBATASAN DI ATAS MUNGKIN
          TIDAK BERLAKU BAGI ANDA, DAN ANDA MUNGKIN MEMILIKI HAK TAMBAHAN.
        </Content>
      </Flex>
    </Box>
  );
}

TermsOfUsePage.getLayout = (page: ReactElement) => {
  return <LandingPage page={page} />;
};
