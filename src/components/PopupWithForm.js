function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}
    >
      <div className="popup__container">
        <h3 className="popup__title">{props.title}</h3>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name="edit-profile"
        >
          {props.children}
          <button
            type="submit"
            className="popup__button popup__btn-save"
            name="submit"
            value="Сохранить"
          >
            {props.buttonText}
          </button>
          <button
            type="reset"
            className="popup__btn-close"
            onClick={props.onClose}
          />
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
