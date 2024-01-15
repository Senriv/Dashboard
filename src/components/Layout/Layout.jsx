import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

function Layout() {
  return (
    <>
      <Header />
      <main className='main'>
        <p className='main__greetings'>Hello Evano 👋🏼,</p>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
