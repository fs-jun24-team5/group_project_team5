/* eslint-disable react/react-in-jsx-scope */
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles.scss';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className='appContainer'>
      <Header />

      <div className="section">
        <div className="outletContainer">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};
