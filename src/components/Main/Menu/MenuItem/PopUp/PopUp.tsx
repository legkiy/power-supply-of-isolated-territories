import './popUp.scss';
import classnames from 'classnames';

interface IProps {
  isVisible: boolean;
  insideItems: {
    text: string;
    onClick?: (() => void) | undefined;
  }[];
}

const PopUp = ({ isVisible, insideItems }: IProps) => {
  return (
    <div className={classnames('pop-up', { visible: isVisible })}>
      <ul className="inner-list">
        {insideItems.map((item, index) => (
          <li onClick={item.onClick}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopUp;
