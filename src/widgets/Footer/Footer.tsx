import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      {t('footerTitle')}
    </div>
  );
};
export default Footer;
