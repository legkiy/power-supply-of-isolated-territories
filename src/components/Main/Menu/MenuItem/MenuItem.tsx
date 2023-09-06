import classNames from 'classnames';
import { menuItem } from '../Menu';
import PopUp from './PopUp/PopUp';
import './menuItem.scss';
import { CSSProperties, memo, useState } from 'react';
interface IProps {
  className?: string;
  text: string;
  insideItems: menuItem['insideItems'];
  popupWidht?: CSSProperties['width'];
}

const MenuItem = ({ className, text, insideItems, popupWidht }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <li
      className={classNames('menu-item', className)}
      onMouseOver={() => handleMouseOver()}
      onMouseOut={handleMouseOut}
    >
      {text}
      {text === 'Контакты' ? (
        ''
      ) : (
        <PopUp
          isVisible={isVisible}
          insideItems={insideItems}
          width={popupWidht}
        />
      )}
    </li>
  );
};

export default memo(MenuItem);
