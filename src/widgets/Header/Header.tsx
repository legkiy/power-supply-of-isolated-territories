import { FC } from 'react';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';
import { IoArrowBackOutline } from 'react-icons/io5';
import logoWhite from '@/assets/logo-white.png';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useActions } from '@/store';

const Header: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const actions = useActions();

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
          {!matchesMD && t('FSBI')}
          {!matchesMD && <br />}
          {matchesMD ? t('ISEM_short') : t('ISEM')}
        </h2>
      </a>
      {matchesMD && (
        <IconButton
          sx={{
            ml: 'auto',
            p: 2,
          }}
          onClick={() => actions.toggleNavBar()}
        >
          <RxHamburgerMenu color="white" />
        </IconButton>
      )}
    </header>
  );
};
export default Header;
