import { Animates } from '@/components/AnimatePng';
import { ErrorDisplay } from '@/components/ErrorDisplay';
import { DCButton } from '@/components/common/DCButton';
import { DotLoading } from '@/components/common/DotLoading';
import { DEFAULT_TAG, EditTags, getValidTags } from '@/components/common/ManageTags';
import { InputItem } from '@/components/formitems/InputItem';
import { TextareaItem } from '@/components/formitems/TextareaItem';
import { useOffChainAuth } from '@/context/off-chain-auth/useOffChainAuth';
import { broadcastMulTxs } from '@/facade/common';
import { E_OFF_CHAIN_AUTH } from '@/facade/error';
import { getCreateGroupTx, getUpdateGroupTagsTx } from '@/facade/group';
import { Fees } from '@/modules/group/components/Fees';
import { BUTTON_GOT_IT, UNKNOWN_ERROR, WALLET_CONFIRM } from '@/modules/object/constant';
import { useAppDispatch, useAppSelector } from '@/store';
import { setSignatureAction } from '@/store/slices/global';
import {
  selectGroupList,
  setGroupTagsEditData,
  setGroupOperation,
  setupGroupList,
} from '@/store/slices/group';
import { MsgCreateGroup } from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/tx';
import { MsgCreateGroupTypeUrl, MsgSetTagTypeUrl, TxResponse } from '@bnb-chain/greenfield-js-sdk';
import {
  Flex,
  FormControl,
  FormLabel,
  QDrawerBody,
  QDrawerFooter,
  QDrawerHeader,
  Text,
  toast,
} from '@node-real/uikit';
import { useUnmount } from 'ahooks';
import { memo, useState } from 'react';
import { useAccount } from 'wagmi';

interface CreateGroupOperationProps {
  onClose?: () => void;
}

export const CreateGroupOperation = memo<CreateGroupOperationProps>(function CreateGroup({
  onClose = () => {},
}) {
  const dispatch = useAppDispatch();
  const loginAccount = useAppSelector((root) => root.persist.loginAccount);
  const groupEditTagsData = useAppSelector((root) => root.group.groupEditTagsData);
  const groupList = useAppSelector(selectGroupList(loginAccount));

  const [error, setError] = useState({ name: '', desc: '' });
  const [form, setForm] = useState({ name: '', desc: '' });
  const [balanceAvailable, setBalanceAvailable] = useState(true);
  const [loading, setLoading] = useState(false);

  const { connector } = useAccount();
  const { setOpenAuthModal } = useOffChainAuth();

  const validTags = getValidTags(groupEditTagsData);
  const isSetTags = validTags.length > 0;
  const valid = !(error.name || error.desc);
  const fees = [
    {
      label: 'Biaya jaringan',
      types: isSetTags ? [MsgCreateGroupTypeUrl, MsgSetTagTypeUrl] : [MsgCreateGroupTypeUrl],
    },
  ];

  const validateForm = (values: Record<'name' | 'desc', string>) => {
    const { name, desc } = values;
    const _error = { ...error };
    const nlen = new Blob([name]).size;
    if (!nlen) {
      _error.name = 'Silakan masukkan nama grup.';
    } else if (nlen < 3 || nlen > 63) {
      _error.name = 'Panjang harus antara 3 dan 63 karakter.';
    } else if (groupList?.some((i) => i.groupName === name)) {
      _error.name = 'Nama ini sudah Anda gunakan, coba nama lain.';
    } else {
      _error.name = '';
    }
    if (new Blob([desc]).size >= 500) {
      _error.desc = 'Silakan masukkan kurang dari 500 karakter.';
    } else {
      _error.desc = '';
    }
    setError(_error);
    return _error;
  };

  const errorHandler = (error: string) => {
    setLoading(false);
    switch (error) {
      case E_OFF_CHAIN_AUTH:
        setOpenAuthModal();
        return;
      default:
        dispatch(
          setSignatureAction({
            title: 'Gagal Membuat',
            icon: 'status-failed',
            desc: 'Maaf, terjadi kesalahan saat menandatangani dengan dompet.',
            buttonText: BUTTON_GOT_IT,
            errorText: 'Pesan kesalahan: ' + error,
          }),
        );
    }
  };

  const onFormValueChange = (value: string, key: string) => {
    const newValues = { ...form, [key]: value };
    validateForm(newValues);
    setForm(newValues);
  };

  const onCreateGroup = async () => {
    const error = validateForm(form);
    if (error.name || error.desc) return;
    setLoading(true);
    const payload: MsgCreateGroup = {
      creator: loginAccount,
      groupName: form.name,
      extra: form.desc,
    };
    dispatch(
      setSignatureAction({ icon: Animates.group, title: 'Membuat Grup', desc: WALLET_CONFIRM }),
    );

    const txs: TxResponse[] = [];
    const [groupTx, error1] = await getCreateGroupTx(payload);
    if (!groupTx) return errorHandler(error1);

    txs.push(groupTx);

    if (isSetTags) {
      const [tagsTx, error2] = await getUpdateGroupTagsTx({
        address: payload.creator,
        groupName: payload.groupName,
        tags: validTags,
      });
      if (!tagsTx) return errorHandler(error2);

      txs.push(tagsTx);
    }

    const [txRes, error3] = await broadcastMulTxs({
      txs: txs,
      address: payload.creator,
      connector: connector!,
    });
    setLoading(false);
    if (!txRes || txRes.code !== 0) return errorHandler(error3 || UNKNOWN_ERROR);
    dispatch(setSignatureAction({}));
    toast.success({ description: 'Grup berhasil dibuat!' });
    dispatch(setupGroupList(loginAccount));
    onClose();
  };

  const onEditGroupTags = () => {
    dispatch(setGroupOperation({ level: 1, operation: ['', 'edit_tags'] }));
  };

  useUnmount(() => dispatch(setGroupTagsEditData([DEFAULT_TAG])));

  return (
    <>
      <QDrawerHeader flexDirection="column">
        Buat Grup
        <Text className="ui-drawer-sub">
          Grup adalah kumpulan akun yang memiliki izin yang sama.
        </Text>
      </QDrawerHeader>
      <QDrawerBody>
        <FormControl mb={16} isInvalid={!!error.name}>
          <FormLabel>
            <Text fontSize={14} fontWeight={500} mb={8}>
              Nama
            </Text>
            <InputItem
              onKeyDown={(e) => e.key === 'Enter' && onCreateGroup()}
              value={form.name}
              placeholder="Masukkan nama grup"
              onChange={(e) => onFormValueChange(e.target.value, 'name')}
              tips={{
                title: 'Aturan Penamaan',
                rules: [
                  'Nama grup tidak boleh sama dengan grup lain milik pengguna yang sama.',
                  'Panjang harus antara 1 dan 63 karakter.',
                ],
              }}
            />
          </FormLabel>
          <ErrorDisplay errorMsgs={[error.name]} />
        </FormControl>
        <FormControl mb={16} isInvalid={!!error.desc}>
          <FormLabel>
            <Text fontSize={14} fontWeight={500} mb={8}>
              Deskripsi
            </Text>
            <TextareaItem
              onKeyDown={(e) => e.key === 'Enter' && onCreateGroup()}
              value={form.desc}
              h={100}
              resize="none"
              placeholder="Masukkan deskripsi grup Anda. (Opsional)"
              onChange={(e) => onFormValueChange(e.target.value, 'desc')}
            />
          </FormLabel>
          <ErrorDisplay errorMsgs={[error.desc]} />
        </FormControl>
        <FormControl mb={16}>
          <FormLabel>
            <Text fontWeight={500} mb={8}>
              Label
            </Text>
            <EditTags onClick={onEditGroupTags} tagsData={groupEditTagsData} />
          </FormLabel>
        </FormControl>
      </QDrawerBody>
      <QDrawerFooter
        flexDirection={'column'}
        marginTop={'12px'}
        borderTop={'1px solid readable.border'}
        gap={'8px'}
      >
        <Fees fees={fees} setBalanceAvailable={setBalanceAvailable} />
        <Flex width={'100%'} flexDirection={'column'}>
          <DCButton
            size={'lg'}
            w="100%"
            justifyContent={'center'}
            gaClickName="dc.file.upload_modal.confirm.click"
            disabled={!balanceAvailable || !valid || loading}
            onClick={onCreateGroup}
          >
            {loading ? (
              <>
                Memuat
                <DotLoading />
              </>
            ) : (
              'Buat'
            )}
          </DCButton>
        </Flex>
      </QDrawerFooter>
    </>
  );
});
