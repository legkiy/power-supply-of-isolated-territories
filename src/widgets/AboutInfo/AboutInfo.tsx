import { useTranslation } from 'react-i18next';
import styles from './aboutInfo.module.scss';
import { FC } from 'react';

const AboutInfo: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles['about-info']}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};
export default AboutInfo;
