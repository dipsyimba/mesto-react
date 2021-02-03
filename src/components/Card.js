import trash from '../images/remove.svg';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.item);
  }
  return (
    <li className="grid-item">
      <img
        src={props.item.link}
        alt="фото"
        className="grid-item__image"
        onClick={handleClick}
      />
      <div className="grid-item__info">
        <h3 className="grid-item__name">{props.item.name}</h3>
        <div className="grid-item__likes">
          <button type="button" className="grid-item__like" />
          <p className="grid-item__count">{props.item.likes.length}</p>
        </div>
      </div>
      <button type="button" className="grid-item__trash">
        <img src={trash} alt="Корзина" />
      </button>
    </li>
  );
}

export default Card;
