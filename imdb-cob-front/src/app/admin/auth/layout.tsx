import { ReactNode } from 'react';
import Style from './style.module.css';

export const AdminAuthLayout = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  return <div className={Style.adminLayout}>{children}</div>;
};

export default AdminAuthLayout;
