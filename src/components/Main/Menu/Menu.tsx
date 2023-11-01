import './menu.scss';
import 'tippy.js/dist/tippy.css';
import { CSSProperties, ReactNode, memo, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChartData } from '../../../store/chartData/chartDataSlice';
import { setEmissionsFuelType } from '../../../store/emissionsType/emissionsTypeSlice';
import { Modal } from '../../index';
import Item from './Item';
import { FuelTypesType } from '../EmissionsChart/data/interface';

export interface menuItem {
  text: string;
  onClick?: () => void;
  type: 'region' | 'emissionsType';
  insideItems?: {
    text: string;
    onClick?: () => void;
    children?: ReactNode;
    index?: number;
  }[];
  popupWidht?: CSSProperties['width'];
  children?: ReactNode;
}

const Menu = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [selectRegion, setSelectRegion] = useState<number>(0);

  const handleOnSelectRegion = (region: 'SFO' | 'DFO', regionId: number) => {
    //установка параметров в query
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('region', region);
    queryParams.set('regionId', String(regionId));
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState(null, '', newUrl);
    //установка параметров в стейт
    dispatch(setChartData(region));
    setSelectRegion(regionId);
  };

  useEffect(() => {
    const queryRegionParams = new URLSearchParams(window.location.search);
    const regionQuery: 'SFO' | 'DFO' | null = queryRegionParams.get(
      'region'
    ) as 'SFO' | 'DFO' | null;
    const regionIdQuery = queryRegionParams.get('regionId');

    if (!!regionQuery && !!regionIdQuery) {
      setSelectRegion(+regionIdQuery);
      dispatch(setChartData(regionQuery));
    }
  }, []);

  const menuItem: menuItem[] = [
    {
      text: 'Выбрать регион',
      type: 'region',
      insideItems: [
        {
          text: 'СФО',
          onClick: () => handleOnSelectRegion('SFO', 0),
          index: 0,
        },
        {
          text: 'ДФО',
          onClick: () => handleOnSelectRegion('DFO', 1),
          index: 1,
        },
      ],
      popupWidht: '134px',
    },
    {
      text: 'Выбросы от:',
      type: 'emissionsType',
      insideItems: [
        {
          text: 'уголь',
          index: 0,
          onClick: () => {
            dispatch(setEmissionsFuelType('уголь'));
          },
        },
        {
          text: 'нефть',
          index: 1,
          onClick: () => {
            dispatch(setEmissionsFuelType('нефть'));
          },
        },
        {
          text: 'газо-конденс.',
          index: 2,
          onClick: () => {
            dispatch(setEmissionsFuelType('газо-конденсатное'));
          },
        },
        {
          text: 'нефтепрод.',
          index: 3,
          onClick: () => {
            dispatch(setEmissionsFuelType('нефтепродукты'));
          },
        },
        {
          text: 'газ',
          index: 4,
          onClick: () => {
            dispatch(setEmissionsFuelType('газ'));
          },
        },
        {
          text: 'ВСЕГО',
          index: 5,
          onClick: () => {
            dispatch(setEmissionsFuelType('ВСЕГО'));
          },
        },
      ],
    },
  ];

  return (
    <aside className={`menu`}>
      <ul className="menu-list">
        <li className="menu-item__name not-inside no-interactive">Меню</li>
        {menuItem.map(({ text, insideItems, type }, index) => (
          <Item
            key={index}
            name={text}
            type={type}
            insideItems={insideItems as any}
            selectRegion={selectRegion}
          />
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
