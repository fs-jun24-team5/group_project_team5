/* eslint-disable react/react-in-jsx-scope */
import { Card } from './components/Card/Card';
import { Header } from './сomponents/Header/Header';
import { Footer } from './components/Footer/Footer';
import './styles.scss';



export const App = () => {
  return (
    <>
      <Header />
      <header>
        <div className="header"></div>
      </header>

      <main className='main'>
        <h1 className="title">Welcome to Nice Gadgets store!</h1>
        <div className="carousel"></div>
        <div className="newPhoneModels">
        <Card/>
        </div>
        <div className="categories">
          <h2 className="categories__title">Shop by category</h2>

          <div className="categories__wrapper">
            <article className="category"></article>
            <article className="category"></article>
            <article className="category"></article>
          </div>
        </div>
        <div className="hotPrices"></div>
      </main>

      <Footer />      
    </>
  );
};
