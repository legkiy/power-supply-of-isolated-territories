import { FC } from 'react';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';
import { IoArrowBackOutline } from 'react-icons/io5';
import logoWhite from '@/assets/logo-white.png';
import {
  AppBar,
  Box,
  IconButton,
  Link,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useActions } from '@/store';

const Header: FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSMD = useMediaQuery(theme.breakpoints.down('smd'));

  const actions = useActions();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href="https://isem.irk.ru/solutions/">
          {matchesLG && (
            <>
              <IoArrowBackOutline />
              {t('back')}
              <img
                className={styles['header-img']}
                src={logoWhite}
                alt="логотип ИСЭМ"
              />
            </>
          )}

          <Box
            sx={{
              ml: !matchesLG ? 15 : 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {!matchesSMD && (
              <>
                {t('FSBI')}
                <br />
              </>
            )}
            {matchesMD ? t('ISEM_short') : t('ISEM')}
          </Box>
        </Link>
        {matchesLG && (
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
      </Toolbar>
    </AppBar>
  );
};
export default Header;
