import { IconFont } from '@/components/IconFont';
import { ResourceTags_Tag } from '@bnb-chain/greenfield-cosmos-types/greenfield/storage/types';
import {
  Box,
  ButtonProps,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  QDrawerBody,
  QDrawerFooter,
  QDrawerHeader,
  Text,
} from '@node-real/uikit';
import { memo, useState } from 'react';
import { DCButton } from '../DCButton';
import { countBytes } from '@/utils/coder';

export const DEFAULT_TAG = { key: '', value: '' };

interface ManageTagsProps {
  onSave: (updateTags: ResourceTags_Tag[]) => void;
  onCancel: () => void;
  tags: ResourceTags_Tag[];
}

export const ManageTags = memo<ManageTagsProps>(function ManageTags({ onSave, onCancel, tags }) {
  const [internalTags, setInternalTags] = useState(tags);

  const isInvalid = (type: 'key' | 'value', value: string): string | false => {
    const bytesLength = countBytes(value);
    const limits: { [key: string]: number } = {
      key: 32,
      value: 64,
    };

    if (bytesLength > limits[type]) {
      return `Tidak boleh lebih dari ${limits[type]} byte.`;
    }

    return false;
  };

  const onInputChange = (type: 'key' | 'value', value: string, index: number) => {
    const newTags = internalTags.toSpliced(index, 1, {
      ...internalTags[index],
      [type]: value,
    });
    setInternalTags(newTags);
  };

  const onAddTag = () => {
    if (internalTags.length < 4) {
      setInternalTags([...internalTags, DEFAULT_TAG]);
    }
  };

  const onRemoveTag = (index: number) => {
    setInternalTags(internalTags.filter((_, curIndex) => curIndex !== index));
  };

  return (
    <>
      <QDrawerHeader flexDir={'column'}>
        <Flex cursor={'pointer'} alignItems={'center'} onClick={onCancel} gap={8}>
          <IconFont type="back" />
          Kelola Label
        </Flex>
        <Box className="ui-drawer-sub">
          Penyimpanan adalah wadah untuk data yang disimpan di BNB Greenfield. Nama penyimpanan harus
          unik secara global.
        </Box>
      </QDrawerHeader>
      <QDrawerBody>
        <Flex gap={12} flexDir={'column'}>
          {internalTags &&
            internalTags.map((item, index) => (
              <Flex key={index} gap={16} alignItems={'start'}>
                <FormControl w={172} isInvalid={!!isInvalid('key', item.key)} alignItems={'start'}>
                  <Input
                    value={item.key}
                    onChange={(e) => onInputChange('key', e.target.value, index)}
                    placeholder="Kunci"
                  />
                  {isInvalid('key', item.key) && (
                    <FormErrorMessage>{isInvalid('key', item.key)}</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl
                  flex={1}
                  alignItems={'start'}
                  isInvalid={!!isInvalid('value', item.value)}
                >
                  <Input
                    value={item.value}
                    onChange={(e) => onInputChange('value', e.target.value, index)}
                    placeholder="Nilai"
                  />
                  {isInvalid('value', item.value) && (
                    <FormErrorMessage>{isInvalid('value', item.value)}</FormErrorMessage>
                  )}
                </FormControl>
                <IconFont type="delete" w={24} onClick={() => onRemoveTag(index)} />
              </Flex>
            ))}
          <AddTagItem onClick={onAddTag} disabled={internalTags.length >= 4} />
        </Flex>
      </QDrawerBody>
      <QDrawerFooter>
        <DCButton variant="ghost" w={'100%'} onClick={onCancel}>
          Batal
        </DCButton>
        <DCButton variant="brand" w={'100%'} onClick={() => onSave(internalTags)}>
          Simpan
        </DCButton>
      </QDrawerFooter>
    </>
  );
});

interface EditTagsProps {
  tagsData: ResourceTags_Tag[];
  onClick: () => void;
  containerStyle?: ButtonProps;
  disabled?: false;
}

export const EditTags = memo<EditTagsProps>(function EditTags({
  tagsData,
  onClick,
  disabled = false,
  containerStyle = {},
}) {
  const validTags = tagsData.filter((item) => item.key && item.value);

  const TagContent = () => {
    if (validTags && validTags.length > 0) {
      return (
        <>
          <Text as="span">Ubah Label</Text>
          <Text
            as="span"
            _hover={{
              color: 'inherit',
            }}
          >
            ({validTags.length})
          </Text>
        </>
      );
    }
    return <>Tambah Label</>;
  };

  return (
    <DCButton
      variant="ghost"
      width={'fit-content'}
      h={31}
      fontSize={12}
      fontWeight={500}
      gap={4}
      color={'readable.secondary'}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      {...containerStyle}
    >
      <TagContent />
    </DCButton>
  );
});

interface AddTagItemProps {
  onClick: () => void;
  disabled?: boolean;
}

export const AddTagItem = memo<AddTagItemProps>(function AddTagItem({ onClick, disabled = false }) {
  return (
    <DCButton
      variant="ghost"
      width={'fit-content'}
      h={31}
      fontSize={12}
      fontWeight={500}
      color={'readable.secondary'}
      disabled={disabled}
      onClick={onClick}
    >
      Tambah Label
    </DCButton>
  );
});

export const getValidTags = (tags: ResourceTags_Tag[]) => {
  if (!tags) return [];
  return tags.filter((item) => item.key && item.value);
};
