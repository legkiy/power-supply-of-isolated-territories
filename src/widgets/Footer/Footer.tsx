import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './footer.module.scss';

const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.footer}>
      <p>{t('footerTitle')}</p>
    </div>
  );
};
export default Footer;
