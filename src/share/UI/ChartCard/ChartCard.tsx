import { FC, HTMLAttributes, ReactNode, memo } from 'react';
import styles from './card.module.scss';

interface ICard extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  children: ReactNode;
  title?: string | ReactNode;
}

const ChartCard: FC<ICard> = ({ children, title, ...props }) => {
  return (
    <div className={styles.card} {...props}>
      {title && typeof title === 'string' ? (
        <h5 className={styles.title}>{title}</h5>
      ) : (
        title
      )}
      <div className={styles['card-body']}>{children}</div>
    </div>
  );
};
export default memo(ChartCard);
