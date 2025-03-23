import {
  PropsWithChildren,
} from 'react';
import styles from '@/shared/components/Button/button.module.scss';
import Link from 'next/link';

interface IButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  asLink?: boolean;
  href?: string
}
export const Button = ({ children, asLink, href }: PropsWithChildren<IButtonProps>) => {
  return (
    asLink
      ?
      <Link className={`${styles.buttonDefault}`} href={href as string}>
      {children}
    </Link>
      :
    <button className={`${styles.buttonDefault}`}>
      {children}
    </button>
  );
}
