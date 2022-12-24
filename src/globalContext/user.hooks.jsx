import { useState } from 'react';
import userApi from '../utils/userActionApi';

export const useCurrentUser = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setUser] = useState({});
  const [savedCards, setCards] = useState([]);
  const [isSucess, setSucess] = useState(false);

  const handlesetSucess = (x) => {
    setSucess(x)

  };




  const logoutCurrentUser = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCards([]);
  };
  const setCurrentUser = (values) => {
    setUser({ ...values });
  };

  const checkLocalToken = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const user = await userApi.checkToken(token);
        setUser(user);
        return user;
      } else {
        logoutCurrentUser();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveArticle = async (article) => {
    try {
      const res = await userApi.saveArticle(article);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const getSavedCards = async () => {
    try {
      const cards = await userApi.getUserArticles();
      if (cards) {
        setCards(cards);
        return;
      } else {
        setCards([]);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCardById = async (id) => {
    try {
      const res = await userApi.deleteArticleById(id);
      const newSavedCardsArr = savedCards.filter(
        (card) => card._id !== res._id
      );
      setCards(newSavedCardsArr);
      return res;
    } catch (err) {
      console.log(err);
    }
  };

  const signinUser = async (values) => {
    try {
      const res = await userApi.signin(values);
      if (res.token) {
        localStorage.setItem('token', res.token);
        const user = await checkLocalToken(res.token);
        setCurrentUser(user);
        setLoggedIn(true);
        return user;
      } else {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    currentUser,
    isLoggedIn,
    setCurrentUser,
    logoutCurrentUser,
    checkLocalToken,
    getSavedCards,
    savedCards,
    saveArticle,
    deleteCardById,
    signinUser,
    isSucess,handlesetSucess
  };
};
