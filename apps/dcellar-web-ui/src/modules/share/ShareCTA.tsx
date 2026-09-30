import styled from '@emotion/styled';
import { Image, Text } from '@node-real/uikit';
import Link from 'next/link';

import { DCButton } from '@/components/common/DCButton';
import { assetPrefix } from '@/base/env';

export const ShareCTA = () => {
  return (
    <Content>
      <Image alt="Ownly" src={`${assetPrefix}/images/ownly-mark.svg`} w={40} />
      <Text fontWeight={600} fontSize={16} lineHeight="19px" m={24}>
        Start your journey of BNB Greenfield decentralized data network with Ownly Now.🥳
      </Text>
      <Link href="/buckets" legacyBehavior passHref replace>
        <DCButton
          gaClickName="dc.shared_ui.preview.get_stated.click"
          variant="second"
          w={126}
          as="a"
          mb={12}
          padding={0}
        >
          Get Started
        </DCButton>
      </Link>
    </Content>
  );
};

const Content = styled.div`
  background: #f5f5f5;
  border-left: 1px solid #e6e8ea;
  width: 269px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  flex-shrink: 0;
`;
