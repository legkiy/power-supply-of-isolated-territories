import './menu.scss';
import 'tippy.js/dist/tippy.css';
import MenuItem from './MenuItem/MenuItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChartData } from '../../../store/chartData/chartDataSlice';

interface menuItem {
  text: string;
  insideItems: {
    text: string;
    onClick?: () => void;
  }[];
}

const Menu = () => {
  const dispatch = useDispatch();
  const menuItem: menuItem[] = [
    {
      text: 'Выбрать регион',
      insideItems: [
        {
          text: 'СФО',
          onClick: () => dispatch(setChartData('SFO')),
        },
        {
          text: 'ДФО',
          onClick: () => dispatch(setChartData('DFO')),
        },
      ],
    },
  ];
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
          <MenuItem
            key={index}
            text={item.text}
            insideItems={item.insideItems}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
