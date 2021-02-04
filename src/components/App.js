import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import '../index.css';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: '',
    link: '',
    isOpen: false,
  });

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({
      isOpen: false,
    });
  }

  function handleCardClick(card) {
    const { name, link } = card;
    setSelectedCard({
      name: name,
      link: link,
      isOpen: true,
    });
  }

  return (
    <div className="page">
      <Header />
      <div className="container">
        <div className="page">
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          {/* Попап обновления аватара */}
          <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
            children={
              <>
                <label className="popup__field">
                  <input
                    type="url"
                    className="popup__input popup__input_avatar_link"
                    id="link-avatar"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                  />
                  <span
                    className="popup__input-error popup__input-error_visible"
                    id="link-avatar-error"
                  />
                </label>
              </>
            }
          />

          {/* Попап редактирования профиля */}
          <PopupWithForm
            title="Редактировать профиль"
            name="profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            buttonText="Сохранить"
            children={
              <>
                <label className="popup__field">
                  <input
                    type="text"
                    className="popup__input popup__input_profile_name"
                    id="name-input"
                    name="name"
                    placeholder="Имя"
                    minLength={2}
                    maxLength={40}
                    required
                  />
                  <span className="popup__input-error" id="name-input-error" />
                </label>
                <label className="popup__field">
                  <input
                    type="text"
                    className="popup__input popup__input_profile_occupation"
                    id="occupation-input"
                    name="occupation"
                    placeholder="Вид деятельности"
                    minLength={2}
                    maxLength={200}
                    required
                  />
                  <span
                    className="popup__input-error"
                    id="occupation-input-error"
                  />
                </label>
              </>
            }
          />

          {/* Попап добавления карточки */}
          <PopupWithForm
            title="Новое место"
            name="add"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            buttonText="Создать"
            children={
              <>
                <label className="popup__field">
                  <input
                    type="text"
                    className="popup__input popup__input_add_name"
                    id="title-input"
                    name="title"
                    placeholder="Название"
                    minLength={2}
                    maxLength={30}
                    required
                  />
                  <span className="popup__input-error" id="title-input-error" />
                </label>
                <label className="popup__field">
                  <input
                    type="url"
                    className="popup__input popup__input_add_link"
                    id="link-input"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                  />
                  <span
                    className="popup__input-error popup__input-error_visible"
                    id="link-input-error"
                  />
                </label>
              </>
            }
          />
          {/* Попап подтвержения удаления карточки */}
          {/* <PopupWithForm
            title="Вы уверены?"
            name="delete"
            isOpen={false}
            onClose={closeAllPopups}
            children={}
          /> */}
          {/* Попап с картинкой */}
          <ImagePopup
            name={selectedCard.name}
            link={selectedCard.link}
            onClose={closeAllPopups}
            isOpen={selectedCard.isOpen}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
