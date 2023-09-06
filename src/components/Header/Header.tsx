import './header.scss';
import logoWhite from '../../images/logo-white.png';
import { IoArrowBackOutline } from 'react-icons/io5';
import { memo } from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="https://isem.irk.ru/solutions/" className="back-botttom">
        <IoArrowBackOutline />
        Назад
      </a>
      <a href="https://isem.irk.ru/solutions/">
        <img className="header-img" src={logoWhite} alt="логотип ИСЭМ" />
        <h2>
          Федеральное государственное бюджетное учреждение науки
          <br />
          Институт систем энергетики им. Л.А. Мелентьева Сибирского отделения
          Российской академии наук
        </h2>
      </a>
    </header>
  );
};

export default memo(Header);
