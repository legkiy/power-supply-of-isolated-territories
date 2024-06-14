import { Footer, Header, Main } from '@/widgets';
import styles from './baseLayout.module.scss';
import NavBar from '@/widgets/NavBar/NavBar';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className={styles['separeted-main']}>
        <NavBar />
        <Main />
      </div>
      <Footer />
    </>
  );
};
export default BaseLayout;
