import { ButtonGroup, Flex } from '@node-real/uikit';

import { NETWORK_URLS, runtimeEnv } from '@/base/env';
import { DCButton } from '@/components/common/DCButton';

const LINKS = {
  mainnet: {
    fullUrl: NETWORK_URLS.mainnet && `${NETWORK_URLS.mainnet}/pricing-calculator`,
    internalUrl: '/pricing-calculator',
  },
  testnet: {
    fullUrl: NETWORK_URLS.testnet && `${NETWORK_URLS.testnet}/pricing-calculator`,
    internalUrl: '/pricing-calculator',
  },
};

export const NetworkSwitch = () => {
  const network = ['testnet', 'mainnet'].includes(runtimeEnv) ? runtimeEnv : 'testnet';

  const onSwitchClick = (net: 'mainnet' | 'testnet') => {
    if (net === network || !LINKS[net].fullUrl) return;
    window.location.href = LINKS[net].fullUrl;
  };

  return (
    <Flex>
      <ButtonGroup
        size="md"
        variant="scene"
        colorScheme="warning"
        isAttached
        border={'1px solid readable.border'}
        borderRadius={4}
        h={37}
      >
        <DCButton
          h={35}
          borderRadius={3}
          onClick={() => onSwitchClick('mainnet')}
          sx={
            network === 'mainnet'
              ? {}
              : {
                  bgColor: 'bg.bottom',
                  color: 'readable.normal',
                  _hover: {},
                }
          }
        >
          Jaringan Utama
        </DCButton>
        <DCButton
          border="none"
          h={35}
          borderRadius={3}
          onClick={(e) => {
            e.preventDefault();
            onSwitchClick('testnet');
          }}
          sx={
            network === 'testnet'
              ? {}
              : {
                  bgColor: 'bg.bottom',
                  color: 'readable.normal',
                  _hover: {
                    bgColor: 'bg.secondary',
                  },
                }
          }
        >
          Jaringan Uji
        </DCButton>
      </ButtonGroup>
    </Flex>
  );
};
