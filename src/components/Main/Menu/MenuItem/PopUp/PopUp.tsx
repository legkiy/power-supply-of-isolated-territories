import { memo } from 'react';
import './popUp.scss';
import classnames from 'classnames';

interface IProps {
  isVisible: boolean;
  insideItems: {
    text: string;
    onClick?: (() => void) | undefined;
  }[];
  width?: string;
}

const PopUp = ({ isVisible, insideItems, width }: IProps) => {
  return (
    <div
      className={classnames('pop-up', { visible: isVisible })}
      style={{ width: isVisible ? width : 0 }}
    >
      <ul className="inner-list">
        {insideItems.map((item, index) => (
          <li onClick={item.onClick}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(PopUp);
