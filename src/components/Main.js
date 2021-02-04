import React, { useEffect, useState } from 'react';
import api from '../utils/Api.js';
import Card from './Card';
import editAvatarButton from '../images/editAvatar.svg';

function Main(props) {
  const { onEditProfile, onEditAvatar, onAddPlace } = props;
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setUserAvatar(user.avatar);
        setUserDescription(user.about);
        setUserName(user.name);
      })
      .catch((err) => {
        console.log(err);
      });
    api
      .getInitialCards()
      .then((items) => {
        setCards(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__edit-avatar">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <img
              src={editAvatarButton}
              alt="Изменить аватар"
              className="profile__edit-image"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__occupation">{userDescription}</p>
            </div>
            <button
              type="button"
              className="profile__edit-button"
              onClick={onEditProfile}
            />
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="grid-items">
          {cards.map((item) => (
            <Card key={item._id} item={item} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
