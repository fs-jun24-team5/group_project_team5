import React from 'react';
import logo from '../../assets/images/footer_images/Logo.png';
import backToTopIcon from '../../assets/images/footer_images/Slider-button.png';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.bottomBar}>
          <a href="#" className={styles.bottomBar__link}>
            <img className={styles.bottomBar__logo} src={logo} alt="NICE GADGETS logo" />
          </a>
        </div>

        <div className={styles.footer__links}>
          <a
            href="https://github.com/fs-jun24-team5/group_project_team5/tree/main"
            className={styles.footer__links__item}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>

          <a href="#" className={styles.footer__links__item}>
            CONTACTS
          </a>

          <a href="#" className={styles.footer__links__item}>
            RIGHTS
          </a>
        </div>

        <div className={styles.footer__backToTop}>
          <div className={styles.footer__backToTop__title}>Back to top</div>
          <div>
            <button onClick={handleBackToTop} className={styles.footer__backToTop__button}>
              <img
                src={backToTopIcon}
                alt="Back to top"
                className={styles.footer__backToTop__icon}
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
