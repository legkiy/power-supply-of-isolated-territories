import { useTranslation } from 'react-i18next';
import styles from './navbar.module.scss';
import { Accordion, LangSwitcher } from '@/share/UI';
import { RegionSelector } from '..';
import ru from '/localeIcon/ru.png';
import en from '/localeIcon/en.png';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const localIcons = {
    ru: ru,
    en: en,
  };

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
      </div>
    </div>
  );
};
export default NavBar;
