import PopUp from './PopUp/PopUp';
import './menuItem.scss';
import { memo, useState } from 'react';
interface IProps {
  text: string;
  insideItems: any[];
}

const MenuItem = ({ text, insideItems }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseOut = () => {
    setIsVisible(false);
  };

  return (
    <li
      className="menu-item"
      onMouseOver={() => handleMouseOver()}
      onMouseOut={handleMouseOut}
    >
      {text}
      <PopUp isVisible={isVisible} insideItems={insideItems} width="150px" />
    </li>
  );
};

export default memo(MenuItem);
