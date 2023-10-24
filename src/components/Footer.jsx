import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TenderIcon from './icons/TenderIcon';

function Footer() {

  const {t} = useTranslation();

  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-row" id="footer-first-row">

          <div className="footer-col">
          <Link to="/" className="brand" ><TenderIcon width="129" height="38"/></Link>
          </div>

          <div className="footer-col">

            <ul>
              <li><p className="footer-heading">{t('company_footer')}</p></li>
              <li><Link to="/about" >{t('about_nav')}</Link></li>
              <li>{t('careers_footer')}</li>
            </ul>
          </div>

          <div className="footer-col">
            <ul>
              <li><p className="footer-heading">{t('service_footer')}</p></li>
              <li><Link to="/" >{t('home_nav')}</Link></li>
              <li><Link to="/getTenderList" >{t('search_nav')}</Link></li>
              <li><Link to="/getTenderList" >{t('tenders_nav')}</Link></li>
              <li><Link to="/PostTender" >{t('place_a_tender_nav')}</Link></li>
              <li><Link to="/contact" >{t('contacts_nav')}</Link></li>
            </ul>
          </div>  

          <div className="footer-col">
            <ul>
              <li><p className="footer-heading">{t('contacts_footer')}</p></li>
              <li>mail1</li>
              <li>mail2</li>
              <li>mail3</li>
              <li>mail4</li>
              <li><p className="footer-heading">{t('address_footer')}</p></li>
              <li>...</li>
            </ul>
              

          </div>

        </div>

        <div className="footer-row" id='footer-second-row'>
           <hr/>
            <div className="footer-col">
               <p>...</p>
            </div>

            <div className="footer-col" id="social">
              <ul>
                <li>LINK1</li>
                <li>LINK1</li>
                <li>LINK1</li>
                <li>LINK1</li>
              </ul>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer