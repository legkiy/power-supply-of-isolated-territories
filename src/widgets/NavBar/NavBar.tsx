import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';
import { Accordion, AccordionButton, Button, LangSwitcher } from '@/share/UI';
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

const localIcons = {
  ru: ru,
  en: en,
};

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [openContact, setOpenContact] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar-content']}>
        <h4 className={styles['nav-title']}>{t('naigate.title')}</h4>

        <Accordion title={t('naigate.selectRegion')} itsButtons>
          <RegionSelector />
        </Accordion>
        <Accordion
          title={
            <img
              src={localIcons[i18n.language as 'ru' | 'en']}
              width={30}
              height={20}
            />
          }
          itsButtons
        >
          <LangSwitcher />
        </Accordion>
        <AccordionButton onClick={() => setOpenContact(true)}>
          {t('contacts.title')}
        </AccordionButton>
        <Dialog open={openContact} onClose={() => setOpenContact(false)}>
          <DialogTitle>{t('contacts.title')}</DialogTitle>
          <DialogContent>
            <p>
              Содержание страницы: <i>Иванова Ирина Юрьевна</i>{' '}
              <a href="mailto:nord@isem.irk.ru">nord@isem.irk.ru</a>
            </p>
            <p>
              Тех. реализация: <i>Максаков Никита Владимирович</i>{' '}
              <a href="mailto:nikita.max@isem.irk.ru">nikita.max@isem.irk.ru</a>
            </p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenContact(false)}>{t('close')}</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default NavBar;
