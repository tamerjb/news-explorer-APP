import { useState } from 'react';
import userApi from './MainApi';
import { useNavigate } from 'react-router-dom';

export const useCurrentUser = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [User, setUser] = useState({});
  const [savedCards, setCards] = useState([]);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false);
    localStorage.removeItem('token');
    setCards([]);
    navigateTo('/');
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
        handleLogout();
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
      if (!cards.message) {
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
        // const user = await checkLocalToken(res.token);
        const user = res.token;
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
    User,
    loggedIn,
    setCurrentUser,
    handleLogout,
    checkLocalToken,
    getSavedCards,
    savedCards,
    saveArticle,
    deleteCardById,
    signinUser,
  };
};
