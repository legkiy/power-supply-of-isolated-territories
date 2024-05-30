import { useTranslation } from 'react-i18next';
import { LOCALES } from '../../../i18n';
import styles from './langSwitcher.module.scss';
import { FC } from 'react';
import { AccordionButton } from '@/share/UI';
import ru from '/localeIcon/ru.png';
import en from '/localeIcon/en.png';

const LangSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const localIcons = {
    ru: ru,
    en: en,
  };

  return (
    <div className={styles['lang-switcher']}>
      {LOCALES.map((lang) => (
        <AccordionButton
          onClick={() => {
            if (i18n.language === lang) return;
            i18n.changeLanguage(lang);
          }}
          disabled={i18n.language === lang}
          key={lang}
        >
          <img src={localIcons[lang]} width={30} height={20} alt={lang} />
        </AccordionButton>
      ))}
    </div>
  );
};
export default LangSwitcher;
