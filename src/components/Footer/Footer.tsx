import { memo } from 'react';
import './footer.scss';
import local from 'src/locale';

const Footer = () => {
  return (
    <div className="footer">
      <p>{local.footerTitle}</p>
    </div>
  );
};
export default memo(Footer);
