import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import styles from './accordionButton.module.scss';

interface IAccordionButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const AccordionButton: FC<IAccordionButton> = ({ children, ...props }) => {
  return (
    <button className={styles['accordion-button']} {...props}>
      {children}
    </button>
  );
};
export default memo(AccordionButton);
