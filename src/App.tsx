import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles.scss';
import { Outlet } from 'react-router-dom';
import { getHotDeals, getNewModels } from "./api/function";

export const App: React.FC = () => {
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



const main = async () => {
  try {
    const hotDeals = await getHotDeals();
    console.log("Hot Deals:", hotDeals);
    
    const newModels = await getNewModels();
    console.log("New Models:", newModels);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


main();
