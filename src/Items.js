import React, { useState, useEffect, useCallback } from 'react';
import { Heading4 } from 'ui-components';
import { ProductDetails } from './ProductDetails';
import { API_ROOT } from './env';

import * as S from "./Items.styles";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const cartItems = await fetch(`${API_ROOT.DEV}/cart/1/items`).then(res => res.json());

    setLoading(false);
    setItems(cartItems);
  }, []);

  const removeFromCart = (item) => {
    const updatedItemsInCart = items.filter(p => p.id !== item.id);
    setItems(updatedItemsInCart);

    const removeFromCartEvent = new CustomEvent('REMOVE_FROM_CART', { detail: { itemId: item.id } });
    window.dispatchEvent(removeFromCartEvent);
  }

  const totalPrice = useCallback(() => {
    const price = items.reduce((total, { item }) => {
      return total = total + item.price;
    }, 0);
    return price.toFixed(2);
  });

  return (
    <>
      {
        items.length > 0 && !loading && (
          <ul>
            <S.ItemHeaderRow>
              <S.PriceText>Price</S.PriceText>
            </S.ItemHeaderRow>
            {items.map((item, index) => (
              <S.ItemRow key={`${item.id}_${index}`}>
                <ProductDetails productId={item.item.id} onClickRemove={() => removeFromCart(item)} />                
              </S.ItemRow>
            ))}
            <S.ItemHeaderRow>
              <S.PriceText id="cart-total">Total: {totalPrice()}</S.PriceText>
            </S.ItemHeaderRow>
          </ul>
        )
      }
      {
        items.length === 0 && !loading && (
          <S.CartEmpty>
            <Heading4>No item in the cart</Heading4>
          </S.CartEmpty>
        )
      }
    </>
  );
}
