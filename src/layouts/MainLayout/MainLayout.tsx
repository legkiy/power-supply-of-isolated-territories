import { Footer, Header, Main } from '@/widgets';
import styles from './mainLayout.module.scss';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles['center-content']}>
        <Main />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
