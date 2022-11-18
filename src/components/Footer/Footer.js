import React from 'react';
import './Footer.css';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copy'>© 2021 Supersite, Powered by News API</p>
      <nav className='footer__links'>
        <ul className='footer__text-links'>
          <li>
            <a href='/' className='footer__link footer__link-text'>
              Home
            </a>
          </li>
          <li>
            <a
              className='footer__link footer__link-text'
              href='https://practicum.com/en-isr/?gclid=Cj0KCQjwteOaBhDuARIsADBqRei8MiQBscI1NAhS1poy6Y0PCLiF0F7Ww6GySvKWf4QNApcLEm5xBT8aAsMgEALw_wcB'
              target={'_blank'}
              rel='noreferrer'>
              Practicum
            </a>
          </li>
        </ul>
        <ul className='footer__image-links'>
          <li>
            <a
              className='footer__link footer__link-img'
              href='https://github.com/tamerjb'
              target={'_blank'}
              rel='noreferrer'>
              <img className='footer__image' src={github} alt='github' />
            </a>
          </li>
          <li>
            <a
              className='footer__link footer__link-img'
              href='https://www.linkedin.com/in/tamerjb/'
              target={'_blank'}
              rel='noreferrer'>
              <img className='footer__image' src={linkedin} alt='linkedin' />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
