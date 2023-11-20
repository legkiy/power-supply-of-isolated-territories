import { FC, LiHTMLAttributes, ReactNode, memo, useState } from 'react';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import { setEmissionsFuelType } from '../../../../store/emissionsType/emissionsTypeSlice';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { FuelTypesType } from '../../EmissionsChart/data/interface';

interface IItem {
  name: string | ReactNode;
  type?: 'region' | 'emissionsType';
  insideItems: {
    text: string | ReactNode;
    onClick: () => void;
    props?: LiHTMLAttributes<HTMLLIElement>;
    index?: number;
  }[];
  selectRegion: number;
  selectEmissions: number;
}
const Item: FC<IItem> = ({
  name,
  type,
  insideItems,
  selectRegion,
  selectEmissions,
}) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState<boolean>(false);

  const handleOnClick = (
    item: number,
    onClick: () => void,
    el?: IItem['insideItems'][0]
  ) => {
    // if (type === 'emissionsType') {
    //   dispatch(setEmissionsFuelType(el?.text as FuelTypesType));
    // }
    onClick();
  };
  return (
    <li
      className={classNames('menu-item', {
        'menu-item__show-expand': expand,
      })}
    >
      <div
        className="menu-item__name"
        onClick={() => setExpand((prev) => !prev)}
      >
        <p>{name}</p>
        <IoIosArrowDown
          className={classNames('menu-item__arrow', {
            'menu-item__arrow__revers': expand,
          })}
        />
      </div>
      <ul
        className={classNames('menu-item__collaps', {
          'menu-item__expand': expand,
        })}
      >
        {insideItems.map((el, index) => (
          <li
            key={index}
            onClick={() => handleOnClick(index, el.onClick, el)}
            className={classNames('menu-item__inside', {
              'menu-item__inside__select':
                type === 'region'
                  ? selectRegion === index
                  : el.index === selectEmissions,
            })}
          >
            {el.text}
          </li>
        ))}
      </ul>
    </li>
  );
};
export default memo(Item);
