import { useState } from 'react';
import newsApi from '../utils/NewsApi';
export const useCards = () => {
  const [keyword, setKeyword] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const _setNotFound = () => {
    setNotFound(true);
    setCards([]);
  };

  const _setIsLoading = () => {
    setIsLoading(true);
    setNotFound(false);
    setCards([]);
  };
  const _removeIsLoading = () => setIsLoading(false);

  const getCardsByKeyWord = async (keyword) => {
    _setIsLoading();
    try {
      const res = await newsApi.getArticles(keyword);
      if (res.articles) {
        setCards(res.articles);
        setKeyword(keyword);
      } else {
        _setNotFound();
      }
      return res;
    } catch (err) {
      return console.log(err);
    } finally {
      _removeIsLoading();
    }
  };

  return {
    cards,
    getCardsByKeyWord,
    notFound,
    isLoading,
    keyword,
  };
};
