import './menu.scss';
import 'tippy.js/dist/tippy.css';
import MenuItem from './MenuItem/MenuItem';
import { CSSProperties, ReactNode, memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChartData } from '../../../store/chartData/chartDataSlice';
import Modal from '../Modal/Modal';

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
    {
      text: 'Contacts',
      children: (
        <Modal openModal={openModal} setOpenModal={setOpenModal}>
          dsads
        </Modal>
      ),
      onClick: () => setOpenModal(true),
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
        <li className="menu-item">Меню</li>
        {menuItem.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            insideItems={item?.insideItems}
            popupWidht={item.popupWidht}
            children={item.children}
            onClick={item?.onClick}
          />
        ))}
      </ul>
      {/* <div onClick={() => setOpenModal(true)}>
        contact
        {<Modal openModal={openModal} setOpenModal={setOpenModal} />}
      </div> */}
      <MenuItem text="Контакты" className="contakts" popupWidht={'300px'} />
    </aside>
  );
};

export default memo(Menu);
