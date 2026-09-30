import { UnderlineLink } from '@/components/layout/Footer';
import {
  Box,
  Flex,
  QAccordion,
  QAccordionButton,
  QAccordionIcon,
  QAccordionItem,
  QAccordionPanel,
  Table,
  Text,
} from '@node-real/uikit';
import { ReactElement } from 'react';
import { PriceResponsiveContainer } from '..';
import { H2 } from './Common';

type TBillingFormula = {
  id: number;
  name: string;
  value: ReactElement;
};

const BillingFormula = () => {
  const columns = [
    {
      header: (
        <Text as="div" fontSize={16} fontWeight={600}>
          Biaya
        </Text>
      ),
      width: '20%',
      cell: (item: TBillingFormula) => {
        return <Box minW={130}>{item.name}</Box>;
      },
    },
    {
      header: (
        <Text as="div" fontSize={16} fontWeight={600}>
          Rumus Tagihan
        </Text>
      ),
      cell: (item: TBillingFormula) => {
        return <Box>{item.value}</Box>;
      },
    },
  ];

  const data: TBillingFormula[] = [
    {
      id: 1,
      name: 'Biaya Penyimpanan',
      value: (
        <Flex flexDirection={'column'} gap={4}>
          <Text as="div" fontWeight={400} wordBreak={'break-all'}>
            Biaya = sum(ChargedSize) * (PrimaryStorePrice + SecondaryStorePrice*SecondarySPNumber) *
            (1+Tarif Pajak Validator) * ReserveTime
          </Text>
          <Text as="div" fontWeight={400}>
            ReserveTime = 180
          </Text>
          <Text as="div" fontWeight={400}>
            Tarif Pajak Validator = 1%
          </Text>
          <Text as="div" fontWeight={400}>
            ChargeSize ≥ Total Ukuran Penyimpanan (berkas yang lebih kecil dari 128K akan dihitung
            sebagai 128K)
          </Text>
        </Flex>
      ),
    },
    {
      id: 2,
      name: 'Biaya Kuota Unduhan',
      value: (
        <Text as="div" fontWeight={400} wordBreak={'break-all'}>
          Biaya = ChargedReadQuota * ReadPrice * (1 + Tarif Pajak Validator) * ReserveTime
        </Text>
      ),
    },
  ];

  return (
    <Table
      containerStyle={{
        padding: '0',
        marginY: '16px',
        border: '1px solid readable.border',
        borderRadius: '4px',
      }}
      width={'100%'}
      columns={columns}
      data={data}
      thProps={{ bgColor: 'bg.bottom', paddingX: '16px' }}
      tdProps={{
        padding: '8px 16px',
        whiteSpace: 'break-spaces',
      }}
    ></Table>
  );
};

type FAQProps = { openKeys: number[]; toggleOpenKeys: (key: number) => void };

export const FAQ = ({ openKeys, toggleOpenKeys }: FAQProps) => {
  const data = [
    {
      question: <Text>Rumus Tagihan</Text>,
      id: '#billing_formula',
      answer: (
        <>
          <Text as="div" mb={8}>
            Di Greenfield, selain biaya transaksi, pengguna perlu membayar dua jenis biaya layanan
            penyimpanan: biaya penyimpanan dan biaya kuota unduhan. Biaya layanan ini ditagih oleh
            Penyedia Penyimpanan secara berkelanjutan (laju pembayaran). Pengguna perlu menyisihkan
            sejumlah biaya layanan penyimpanan di awal saat mulai menggunakan layanan.
          </Text>
          <BillingFormula />
        </>
      ),
    },
    {
      question: 'Apa itu Ukuran Tertagih (Charged Size)?',
      id: '#charged_size',
      answer: (
        <Flex flexDirection={'column'} gap={4}>
          <Text as="div">
            Secara umum, ukuran tertagih sedikit lebih besar dari ukuran penyimpanan sebenarnya.
          </Text>
          <Text as="div">
            ChargeSize dihitung dari ukuran isi berkas. Jika ukurannya kurang dari 128k, maka
            ChargeSize adalah 128k; jika tidak, ChargeSize sama dengan ukuran isi berkas.
          </Text>
          <Text as="div">
            Jika Ukuran Data &lt; 128K, ChargedSize = 128K; selain itu, ChargedSize = Ukuran Data
          </Text>
          <Text as="div">Jika berkas berupa folder kosong, ChargedSize = 128K</Text>
        </Flex>
      ),
    },
    {
      question: 'Apa itu Harga Penyimpanan Utama/Sekunder?',
      id: '#store_price',
      answer: (
        <Text as={'div'}>
          Setiap Penyedia Penyimpanan dapat menetapkan harga penyimpanan dan harga baca yang
          disarankan melalui transaksi di jaringan. Pada awal setiap bulan, nilai tengah (median)
          harga penyimpanan dari semua Penyedia Penyimpanan dihitung sebagai Harga Penyimpanan
          Penyedia Penyimpanan Utama. Harga Penyimpanan Sekunder dihitung sebagai persentase dari
          harga utama tersebut (misalnya 12%, yang dapat diubah melalui tata kelola), dan median harga
          baca dari semua Penyedia Penyimpanan dihitung sebagai Harga Baca Utama. Untuk mempelajari
          lebih lanjut, silakan lihat{' '}
          <UnderlineLink
            target="_blank"
            href="https://github.com/bnb-chain/greenfield/blob/master/docs/modules/billing-and-payment.md#storage-fee-price-and-adjustment"
          >
            https://github.com/bnb-chain/greenfield/blob/master/docs/modules/billing-and-payment.md#storage-fee-price-and-adjustment
          </UnderlineLink>
          .
        </Text>
      ),
    },
    {
      question: 'Apa itu Tarif Pajak Validator?',
      id: '#tax_rate',
      answer: (
        <Text as="div">
          Untuk setiap operasi data di Greenfield, validator mendapatkan imbalan karena menjaga
          keamanan dan keutuhan data. Melalui pajak validator, sebagian biaya pengguna masuk ke
          kumpulan pajak validator dan kemudian menjadi imbalan bagi validator.
        </Text>
      ),
    },
    {
      question: 'Apa itu Kuota Unduhan?',
      id: '#download_quota',
      answer: (
        <Flex gap={4} flexDirection={'column'}>
          <Text as="div">
            Setiap unduhan akan memakai Kuota Unduhan, sesuai dengan ukuran berkas yang
            diunduh.
          </Text>
          <Text as="div">
            Untuk setiap penyimpanan, Anda mendapat kuota unduhan gratis sekali pakai dari Penyedia
            Penyimpanan yang Anda pilih. Anda dapat melihat besar kuota gratis dari setiap Penyedia
            Penyimpanan pada bagian di atas.
          </Text>
          <Text as="div">
            Anda dapat menambah kuota bulanan penyimpanan untuk mendapatkan lebih banyak kuota
            unduhan. Setelah kuota gratis habis, Greenfield akan memakai kuota unduhan yang Anda beli.
            Jika kuota unduhan bulanan yang Anda beli tidak habis sebelum akhir bulan, kuota bulanan
            tersebut akan kedaluwarsa.
          </Text>
        </Flex>
      ),
    },
    {
      question: 'Apa itu Harga Baca?',
      id: '#read_price',
      answer: (
        <Text as="div">
          Penyedia Penyimpanan dapat memperbarui kuota baca gratis, harga penyimpanan utama yang
          disarankan, dan harga baca. Harga yang disarankan oleh semua Penyedia Penyimpanan akan
          digunakan untuk menentukan harga penyimpanan utama/sekunder dan harga baca global.
        </Text>
      ),
    },
    {
      question: 'Apa itu Waktu Cadangan (Reserve Time)?',
      id: '#reserve_time',
      answer: (
        <Text as="div">
          Biaya penyimpanan di Greenfield ditagih secara berkelanjutan. Biaya dibayarkan dari
          pengguna ke akun penerima dengan laju pembayaran yang tetap. Dengan menyisihkan sebagian
          saldo sebagai cadangan, pengguna tidak perlu membayar terlalu sering. Saat ini, waktu
          cadangan adalah 6 bulan dan dapat diubah melalui tata kelola.
        </Text>
      ),
    },
  ];

  return (
    <PriceResponsiveContainer>
      <H2 id="#faq" marginBottom={'16px'}>
        Pertanyaan Umum (FAQ)
      </H2>
      <QAccordion activeKey={openKeys}>
        {data.map((item, index) => (
          <QAccordionItem key={index} px={0} id={item.id}>
            <QAccordionButton
              onClick={() => toggleOpenKeys(index)}
              h={56}
              fontSize={16}
              fontWeight={600}
              px={0}
            >
              {item.question}
              <QAccordionIcon />
            </QAccordionButton>
            <QAccordionPanel px={0} color={'readable.tertiary'} fontSize={14}>
              {item.answer}
            </QAccordionPanel>
          </QAccordionItem>
        ))}
      </QAccordion>
    </PriceResponsiveContainer>
  );
};
