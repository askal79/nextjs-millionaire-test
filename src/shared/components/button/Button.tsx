import {
  ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren,
} from 'react';
import styles from '@/shared/components/button/button.module.scss';

interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  disabled: boolean;
  onClick?: () => void;
  asLink?: boolean;
}
export const Button = ({ children }: PropsWithChildren<IButtonProps>) => {
  return (
    <button className={`${styles.buttonDefault}`} disabled={true}>
      {children}
    </button>
  );
}
