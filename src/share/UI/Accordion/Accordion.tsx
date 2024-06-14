import { FC, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import styles from './accordion.module.scss';
import clsx from 'clsx';

interface IAccordion {
  title: React.ReactNode;
  children: React.ReactNode;
  itsButtons?: boolean;
}

const Accordion: FC<IAccordion> = ({ title, children, itsButtons = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [setHeight, setHeightState] = useState(0);

  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setIsOpen((prev) => !prev);
    setHeightState(isOpen ? 0 : content.current?.scrollHeight || 0);
  }

  return (
    <div className={styles['accordion-section']}>
      <button
        className={clsx(styles.accordion, { [styles.active]: isOpen })}
        onClick={toggleAccordion}
      >
        <p className={styles['accordion-title']}>{title}</p>
        <FaChevronDown
          className={clsx(styles.chevron, {
            [styles['chevron-open']]: isOpen,
          })}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}px` }}
        className={clsx(styles['accordion-content'], {
          [styles['accordion-content-active']]: isOpen,
          [styles['its-buttons']]: itsButtons && isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
