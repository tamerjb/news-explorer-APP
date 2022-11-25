import { useState, useEffect } from 'react';
import userApi from './MainApi';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePopup } from '../contexts/PopupsContext';

export const useCurrentUser = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [User, setUser] = useState({});
  const [savedCards, setCards] = useState([]);
  const popupContext = usePopup();

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
    const res = await userApi.signin(values);
    const user = res.user;
    console.log('user', user);
    setCurrentUser(user);
    setLoggedIn(true);

    // try {
    //   const res = await userApi.signin(values);
    //           const user = res.user;
    //           console.log('user', user);
    //           setCurrentUser(user);
    //           setLoggedIn(true);
    //   console.log('res', res);

    //   if (res) {
    //     // localStorage.setItem('token', res.token);
    //     // const user = await checkLocalToken(res.token);
    //     const user = res.user;
    //     console.log('user', user);
    //     setCurrentUser(user);
    //     setLoggedIn(true);
    //     return user;
    //   } else {
    //     return res;
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
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
