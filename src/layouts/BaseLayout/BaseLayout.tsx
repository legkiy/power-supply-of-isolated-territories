import { Footer, Header, Main } from '@/widgets';
import NavBar from '@/widgets/NavBar/NavBar';

const BaseLayout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />

      {/* <div className={styles['separeted-main']}>
      <NavBar />
        <Main />
      </div>
      <Footer /> */}
    </>
  );
};
export default BaseLayout;
