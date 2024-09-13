/* eslint-disable react/react-in-jsx-scope */
import { Footer } from './components/Footer/Footer';
import './styles.scss';


export const App = () => {
  return (
    <>
      <header>
        <div className="header"></div>
      </header>

      <main className='main'>
        <h1 className="title">Welcome to Nice Gadgets store!</h1>
        <div className="carousel"></div>
        <div className="newPhoneModels"></div>
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

      <footer>
        <div className="footer"></div>
      </footer>
      <Footer />
    </>
  );
};
