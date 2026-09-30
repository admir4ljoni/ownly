import { assetPrefix } from '@/base/env';
import { Box, BoxProps, Image } from '@node-real/uikit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ILogo extends BoxProps {
  href: string;
  alt?: string;
  title?: string;
  target?: string;
}

export const Logo: React.FC<ILogo> = (props) => {
  const { href, target = '', title = '', ...restProps } = props;
  const { basePath } = useRouter();
  const logo = <BrandLogo h={32} />;

  return (
    <Box {...restProps}>
      {basePath ? (
        <a href={href} target={target} title={title}>
          {logo}
        </a>
      ) : (
        <Link href={href} target={target} title={title}>
          {logo}
        </Link>
      )}
    </Box>
  );
};

interface IBrandLogo extends React.ComponentProps<typeof Image> {
  variant?: 'horizontal' | 'stacked';
  dark?: boolean;
}

export const BrandLogo: React.FC<IBrandLogo> = ({
  variant = 'horizontal',
  dark = false,
  ...restProps
}) => {
  const name = variant === 'horizontal' ? 'ownly-logo-horizontal' : 'ownly-logo';
  return (
    <Image
      alt="Ownly"
      src={`${assetPrefix}/images/${name}${dark ? '-dark' : ''}.svg`}
      display="block"
      {...restProps}
    />
  );
};
