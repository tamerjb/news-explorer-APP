import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './NewsCard.css';
import { useIsHome } from '../../contexts/IsHomeContext';
import { useAuth } from '../../contexts/CurrentUserContext';
import { usePopup } from '../../contexts/PopupsContext';

const NewsCard = ({ card }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive(!isActive);
    setIsSaved(!isSaved);
  };
  const { isHome } = useIsHome();
  const { loggedIn } = useAuth();
  const { openPopup } = usePopup();

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };
  const handleMouseEnter = () => {
    setShowToolTip(true);
  };

  const handleButtonClick = () => {
    isHome && !loggedIn && openPopup('signin');
    isHome && loggedIn && handleClick();
    !isHome && console.log('delete card');
  };

  // 👇️ check if element contains class on mount

  return (
    <article className='news-card'>
      <div
        className='news-card__image-container'
        style={{
          backgroundImage: `url(${card.image})`,
        }}></div>
      <div className='news-card__text-container'>
        <p className='news-card__date'>{card.date}</p>
        <h3 className='news-card__title'>{card.title}</h3>
        <p className='news-card__text'>{card.text}</p>
        <p className='news-card__source'>{card.source}</p>
      </div>
      {showToolTip && (
        <button className='news-card__tootltip'>
          {loggedIn && !isHome
            ? 'Remove from saved'
            : 'Sign in to save articles'}
        </button>
      )}
      {isHome && (
        <button
          className={`news-card__button ${
            !isActive
              ? 'news-card__button_type_save'
              : 'news-card__button_type_save_active'
          }`}
          aria-label='save article'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleButtonClick}></button>
      )}
      {!isHome && (
        <button
          className='news-card__button news-card__button_type_trash'
          aria-label='delete article'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleButtonClick}></button>
      )}

      {!isHome && <p className='news-card__keyword'>{card.keyword}</p>}
    </article>
  );
};

export default NewsCard;
