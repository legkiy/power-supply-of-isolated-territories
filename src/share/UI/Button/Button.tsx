import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import styles from './button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'outline';
}

const Button: FC<IButton> = ({ children, variant, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, !!variant && styles[variant])}
    >
      {children}
    </button>
  );
};

export default memo(Button);
