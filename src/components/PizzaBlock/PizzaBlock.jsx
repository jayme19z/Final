import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct } from "../../redux/slices/cardSlice";

function PizzaBlock({ id, imageUrl, name, types, sizes, widht, price }) {

  const [activeSize, setActiveSize] = React.useState(0);
  const [activeWidht, setActiveWidht] = React.useState(0);

  const typeNames = ["тонкое", "традиционное"];
  const dispatch = useDispatch();

  const cartProduct = useSelector((state) =>
    state.card.items.find((obj) => obj.id === id)
  );

  const addCount = cartProduct ? cartProduct.count : 0;

  // 🔥 1. Динамические цены для размеров
  const sizePrices = {
    26: 2000,
    30: 3000,
    40: 4000,
  };

  // 🔥 2. Определяем активный размер и цену
  const currentSize = sizes[activeSize];
  const currentPrice = sizePrices[currentSize];

  const onClickAddPriceAll = () => {
    const item = {
      id,
      name,
      price: currentPrice, // 🔥 3. Передаём динамическую цену
      imageUrl,
      sizes: currentSize,
      widht: typeNames[activeWidht],
    };
    dispatch(addProduct(item));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {widht.map((widht, i) => (
            <li
              key={i}
              onClick={() => setActiveWidht(i)}
              className={activeWidht === i ? "active" : ""}
            >
              {widht}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active" : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        {/* 🔥 4. Выводим динамическую цену */}
        <div className="pizza-block__price"> {currentPrice} тг.</div>

        <button
          onClick={onClickAddPriceAll}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addCount > 0 && <i>{addCount}</i>}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
