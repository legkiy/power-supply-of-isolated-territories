import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';
import { Accordion, LangSwitcher } from '@/share/UI';
import {
  Box,
  Button,
  Divider,
  Drawer,
  FormControlLabel,
  Link,
  Stack,
  Switch,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { RegionSelector } from '..';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ru from '/localeIcon/ru.png';
import en from '/localeIcon/en.png';
import { useState } from 'react';
import theme, { navBarSize } from '@/styles/muiTheme';
import { useActions, useAppSelector } from '@/store';
import { IoArrowBackOutline } from 'react-icons/io5';
import logoWhite from '@/assets/logo-white.png';

const localIcons = {
  ru: ru,
  en: en,
};

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [openContact, setOpenContact] = useState(false);

  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { navBarState, openDevPanel } = useAppSelector((store) => store.global);
  const actions = useActions();

  const menuItems = [
    {
      children: <RegionSelector />,
      title: t('naigate.selectRegion'),
      itsButtons: true,
    },
    {
      children: <LangSwitcher />,
      title: (
        <img
          src={localIcons[i18n.language as 'ru' | 'en']}
          width={30}
          height={20}
        />
      ),
      itsButtons: true,
    },
  ];

  return (
    <Drawer
      variant={matchesLG ? 'temporary' : 'permanent'}
      open={matchesLG ? navBarState : false}
      onClose={() => actions.toggleNavBar()}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: matchesLG ? navBarSize.mobile : navBarSize.desktop,
        },
      }}
      PaperProps={{
        sx: {
          border: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: { xs: 56, sm: 64 },
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          // transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          boxShadow:
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14)',
        }}
      >
        <Link
          href="https://isem.irk.ru/solutions/"
          sx={{
            mx: 'auto',
          }}
        >
          <IoArrowBackOutline size={20} />
          {t('back')}
          <img
            className={styles['header-img']}
            src={logoWhite}
            alt="логотип ИСЭМ"
          />
        </Link>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: 'hsl(215, 15%, 92%)',
        }}
      >
        <Stack>
          <Typography variant="h6" color="white" textAlign="center">
            {t('naigate.title')}
          </Typography>
          <Divider />
          {menuItems.map((item, index) => (
            <Accordion {...item} key={index} />
          ))}
          <FormControlLabel
            label="NASA Panel"
            sx={{ m: 0 }}
            control={
              <Switch
                checked={openDevPanel}
                title="Dev Panel"
                onChange={() => actions.toggleDevPanel()}
              />
            }
          />

          <Button
            onClick={() => setOpenContact(true)}
            sx={{
              color: 'white',
            }}
          >
            <Typography textTransform={'capitalize'}>
              {t('contacts.title')}
            </Typography>
          </Button>
          <Dialog open={openContact} onClose={() => setOpenContact(false)}>
            <DialogTitle>{t('contacts.title')}</DialogTitle>
            <DialogContent>
              <p>
                Содержание страницы: <i>Иванова Ирина Юрьевна</i>{' '}
                <a href="mailto:nord@isem.irk.ru">nord@isem.irk.ru</a>
              </p>
              <p>
                Тех. реализация: <i>Максаков Никита Владимирович</i>{' '}
                <a href="mailto:nikita.max@isem.irk.ru">
                  nikita.max@isem.irk.ru
                </a>
              </p>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setOpenContact(false)}
                variant="contained"
                color="error"
              >
                {t('close')}
              </Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </Box>
    </Drawer>
  );
  // return (
  //   <div className={styles.navbar}>
  //     <div className={styles['navbar-content']}>
  //       <h4 className={styles['nav-title']}>{t('naigate.title')}</h4>

  //       <Accordion title={t('naigate.selectRegion')} itsButtons>
  //         <RegionSelector />
  //       </Accordion>
  //       <Accordion
  //         title={
  //           <img
  //             src={localIcons[i18n.language as 'ru' | 'en']}
  //             width={30}
  //             height={20}
  //           />
  //         }
  //         itsButtons
  //       >
  //         <LangSwitcher />
  //       </Accordion>
  //       <AccordionButton onClick={() => setOpenContact(true)}>
  //         {t('contacts.title')}
  //       </AccordionButton>
  //       <Dialog open={openContact} onClose={() => setOpenContact(false)}>
  //         <DialogTitle>{t('contacts.title')}</DialogTitle>
  //         <DialogContent>
  //           <p>
  //             Содержание страницы: <i>Иванова Ирина Юрьевна</i>{' '}
  //             <a href="mailto:nord@isem.irk.ru">nord@isem.irk.ru</a>
  //           </p>
  //           <p>
  //             Тех. реализация: <i>Максаков Никита Владимирович</i>{' '}
  //             <a href="mailto:nikita.max@isem.irk.ru">nikita.max@isem.irk.ru</a>
  //           </p>
  //         </DialogContent>
  //         <DialogActions>
  //           <Button
  //             onClick={() => setOpenContact(false)}
  //             variant="contained"
  //             color="error"
  //           >
  //             {t('close')}
  //           </Button>
  //         </DialogActions>
  //       </Dialog>
  //     </div>
  //   </div>
  // );
};
export default NavBar;
