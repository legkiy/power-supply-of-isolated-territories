import './menu.scss';
import 'tippy.js/dist/tippy.css';
import MenuItem from './MenuItem/MenuItem';
import { useEffect, useState } from 'react';

const Menu = () => {
  const menuItem = ['test_1', 'test_2', 'test_3', 'test_4'];
  const [isSticky, setIsSticky] = useState(false);
  // useEffect(() => {
  //   function handleScroll() {
  //     const element = document.querySelector('.menu-list');
  //     const elementPosition = element?.getBoundingClientRect().top || 0;
  //     console.log(elementPosition);

  //     const windowPosition = window.innerHeight;
  //     console.log(windowPosition);

  //     if (elementPosition < 0) {
  //       setIsSticky(true);
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, ['.menu-list']);
  // console.log(isSticky);

  return (
    <aside className={`menu ${isSticky && 'sticky'}`}>
      <ul className="menu-list">
        <li className="menu-item">Меню</li>
        {menuItem.map((item, index) => (
          <MenuItem key={index} text={item} insideItems={['1', '2']} />
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
