import { useAppSelector } from '@/store';
import { Footer, Header, Main } from '@/widgets';
import NavBar from '@/widgets/NavBar/NavBar';
import { Suspense } from 'react';
import DevLayout from '../DevLayout/DevLayout';
// const DevLayout = lazy(() => import('../DevLayout/DevLayout.tsx'));

const BaseLayout = () => {
  const openDevPanel = useAppSelector((state) => state.global.openDevPanel);

  return (
    <>
      <Header />
      <NavBar />
      {!openDevPanel ? (
        <Suspense fallback={<div>Loading dev page</div>}>
          <DevLayout />
        </Suspense>
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
