import { Footer, Header, Main } from '@/widgets';
import styles from './baseLayout.module.scss';
import NavBar from '@/widgets/NavBar/NavBar';
import { Box } from '@mui/material';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      {/* <div className={styles['separeted-main']}>
      <NavBar />
        <Main />
      </div>
      <Footer /> */}
    </>
  );
};
export default BaseLayout;
