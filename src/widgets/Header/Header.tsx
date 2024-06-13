import { FC } from 'react';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';
import { IoArrowBackOutline } from 'react-icons/io5';
import logoWhite from '@/assets/logo-white.png';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <a
        href="https://isem.irk.ru/solutions/"
        className={styles['back-botttom']}
      >
        <IoArrowBackOutline />
        {t('back')}
      </a>
      <a href="https://isem.irk.ru/solutions/">
        <img
          className={styles['header-img']}
          src={logoWhite}
          alt="логотип ИСЭМ"
        />
        <h2>
          {t('FSBI')}
          <br />
          {t('ISEM')}
        </h2>
      </a>
    </header>
  );
};
export default Header;
