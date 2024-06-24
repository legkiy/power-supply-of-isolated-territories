import { useAppSelector } from '@/store';
import { Footer, Header, Main } from '@/widgets';
import NavBar from '@/widgets/NavBar/NavBar';
import DevLayout from '../DevLayout/DevLayout';

const BaseLayout = () => {
  const openDevPanel = useAppSelector((state) => state.global.openDevPanel);
  return (
    <>
      <Header />
      <NavBar />
      {openDevPanel ? (
        <DevLayout />
      ) : (
        <>
          <Main />
          <Footer />
        </>
      )}
    </>
  );
};
export default BaseLayout;
