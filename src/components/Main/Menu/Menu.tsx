import './menu.scss';
import 'tippy.js/dist/tippy.css';
import { CSSProperties, ReactNode, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChartData } from '../../../store/chartData/chartDataSlice';
import { Modal } from '../../index';
import Item from './Item';

export interface menuItem {
  text: string;
  onClick?: () => void;
  insideItems?: {
    text: string;
    onClick?: () => void;
    children?: ReactNode;
  }[];
  popupWidht?: CSSProperties['width'];
  children?: ReactNode;
}

const Menu = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

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
      popupWidht: '134px',
    },
  ];

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
    <aside className={`menu`}>
      <ul className="menu-list">
        <li className="menu-item__name not-inside no-interactive">Меню</li>
        {/* {menuItem.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            insideItems={item?.insideItems}
            popupWidht={item.popupWidht}
            children={item.children}
            onClick={item?.onClick}
          />
        ))} */}
        {menuItem.map(({ text, insideItems }, index) => (
          <Item key={index} name={text} insideItems={insideItems as any} />
        ))}
        <li
          className="menu-item__name not-inside"
          onClick={() => setOpenModal(true)}
        >
          Контакты
        </li>
      </ul>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          onClose={() => setOpenModal(false)}
          className="contakt-modal"
        >
          <h2>Контакты</h2>
          <p>
            Содержание страницы: <i>Иванова Ирина Юрьевна</i>{' '}
            <a href="mailto:nord@isem.irk.ru">nord@isem.irk.ru</a>
          </p>
          <p>
            Тех. реализация: <i>Максаков Никита Владимирович</i>{' '}
            <a href="mailto:nikita.max@isem.irk.ru">nikita.max@isem.irk.ru</a>
          </p>
        </Modal>
      )}
    </aside>
  );
};

export default memo(Menu);
