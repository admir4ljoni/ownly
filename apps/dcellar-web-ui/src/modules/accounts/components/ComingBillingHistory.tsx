import { DCTable } from '@/components/common/DCTable';
import { ListEmpty } from '@/components/common/DCTable/ListEmpty';
import { Text } from '@node-real/uikit';
import { ColumnProps } from 'antd/es/table';
import { memo, useCallback } from 'react';

const emptyArr: string[] = [];
const columns: ColumnProps<any>[] = [
  {
    title: 'Waktu',
    key: 'timestamp',
  },
  {
    title: 'Jenis',
    key: 'address',
  },
  {
    title: 'Total Biaya',
    key: 'totalCost',
  },
  {
    title: 'Laju Pembayaran',
    key: 'netflowRate',
  },
].map((col) => ({ ...col, dataIndex: col.key }));

export const ComingBillingHistory = memo(function ComingBillingHistory() {
  const renderEmpty = useCallback(
    () => (
      <ListEmpty type="discontinue" title="" desc="" empty={true} h={274}>
        <Text mt={16} fontSize={14} color={'readable.tertiary'}>
          Segera Hadir...
        </Text>
      </ListEmpty>
    ),
    [],
  );

  return (
    <DCTable
      rowKey="key"
      columns={columns}
      dataSource={emptyArr}
      renderEmpty={renderEmpty}
      pageSize={0}
      canNext={false}
      canPrev={false}
      pagination={false}
    />
  );
});
