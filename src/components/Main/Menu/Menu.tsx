import './menu.scss';
import 'tippy.js/dist/tippy.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  const menuItem = ['test_1', 'test_2', 'test_3', 'test_4'];
  return (
    <aside className="menu">
      <ul className="menu-list">
        <li className="menu-item">Меню</li>
        {menuItem.map((item, index) => (
          <MenuItem key={index} text={item} insideItems={['1', '2']}/>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
