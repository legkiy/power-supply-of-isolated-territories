import './header.scss';
import logoWhite from '../../images/logo-white.png';
import { IoArrowBackOutline } from 'react-icons/io5';
import { memo } from 'react';
import local from '../../locale';

const Header = () => {
  return (
    <header className="header">
      <a href="https://isem.irk.ru/solutions/" className="back-botttom">
        <IoArrowBackOutline />
        {local.back}
      </a>
      <a href="https://isem.irk.ru/solutions/">
        <img className="header-img" src={logoWhite} alt="логотип ИСЭМ" />
        <h2>
          {local.FSBI}
          <br />
          {local.ISEM}
        </h2>
      </a>
    </header>
  );
};

export default memo(Header);
