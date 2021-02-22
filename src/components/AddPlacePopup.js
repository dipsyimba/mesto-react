import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;
  const inputRefName = React.useRef();
  const inputRefLink = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: inputRefName.current.value,
      link: inputRefLink.current.value,
    });
  }
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Создать"
      onClickSubmit={handleSubmit}
      children={
        <>
          <label className="popup__field">
            <input
              ref={inputRefName}
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
              ref={inputRefLink}
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
  );
}

export default AddPlacePopup;
