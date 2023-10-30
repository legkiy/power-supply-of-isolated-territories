import { FC, LiHTMLAttributes, memo, useState } from 'react';
import classNames from 'classnames';
import { IoIosArrowDown } from 'react-icons/io';
import './Item.scss';

interface IItem {
  name: string;
  insideItems: {
    text: string;
    onClick: () => void;
    props?: LiHTMLAttributes<HTMLLIElement>;
    index?: number;
  }[];
  selectRegion: number;
}
const Item: FC<IItem> = ({ name, insideItems, selectRegion }) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleOnClick = (item: number, onClick: () => void) => {
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
            onClick={() => handleOnClick(index, el.onClick)}
            className={classNames('menu-item__inside', {
              'menu-item__inside__select': selectRegion === index,
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
