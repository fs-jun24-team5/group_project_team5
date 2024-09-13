import './Footer.scss';
import logo from '../../assets/images/Logo.png';
import backToTopIcon from '../../assets/icons/Slider-button.png';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="bottom-bar">
          <a href="#" className="bottom-bar__link">
            <img className="bottom-bar__logo" src={logo} alt="NICE GADGETS logo" />
          </a>
        </div>

        <div className="footer__links">
          <a href="https://github.com/fs-jun24-team5/group_project_team5/tree/main" className="footer__links__item">
            GITHUB
          </a>

          <a href="#" className="footer__links__item">
            CONTACTS
          </a>

          <a href="#" className="footer__links__item">
            RIGHTS
          </a>
        </div>
        <div className="footer__back-to-top">
          <div>Back to top</div>
        <div>
          <a href="#root" className="bottom-bar__link">
            <img src={backToTopIcon} alt="" className="footer__back-to-top__icon" />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};
