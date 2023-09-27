import classNames from 'classnames';
import { menuItem } from '../Menu';
import PopUp from './PopUp/PopUp';
import './menuItem.scss';
import { CSSProperties, ReactNode, memo, useState } from 'react';
interface IProps {
  className?: string;
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

const MenuItem = ({
  className,
  text,
  insideItems,
  popupWidht,
  children,
  onClick,
}: IProps) => {
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
      onClick={onClick}
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
      {children}
    </li>
  );
};

export default memo(MenuItem);
