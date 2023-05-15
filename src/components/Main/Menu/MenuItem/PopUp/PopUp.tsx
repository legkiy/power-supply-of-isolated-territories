import './popUp.scss';
import classnames from 'classnames';

interface IProps {
  isVisible: boolean;
  insideItems: string[];
}

const PopUp = ({ isVisible, insideItems }: IProps) => {
  console.log(isVisible);

  return (
    <div className={classnames('pop-up', { visible: isVisible })}>
      <ul className="inner-list">
        {insideItems.map((item, index) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PopUp;
