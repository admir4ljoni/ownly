import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@node-real/uikit';
import Link from 'next/link';

type Props = { name: string };

export const AccountBreadCrumb = ({ name = 'Detail Akun' }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/accounts" as={Link}>
          Akun
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">{name}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
