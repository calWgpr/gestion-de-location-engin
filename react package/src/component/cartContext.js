// CartContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext({
  cart: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {},
  clearCart: () => {},
  getCartFromSession:()=>{},
  storeCartInSession:(item)=>{},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromSession()); // Load initial cart

  useEffect(() => {
    const storedCart = getCartFromSession();
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
       
    storeCartInSession(cart);
  
  };
  useEffect(()=>{
    storeCartInSession(cart);
  },[cart])

const removeFromCart = (item) => {
  setCart(prevCart =>
    prevCart.filter(cartItem => JSON.stringify(cartItem) !== JSON.stringify(item))
  );
  storeCartInSession(cart);
  console.log('remove')
};


  const clearCart = () => {
    setCart([]);
    storeCartInSession([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartFromSession, storeCartInSession }}>
      {children}
    </CartContext.Provider>
  );
  // Helper functions for session storage
function storeCartInSession(cart) {
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

function getCartFromSession() {
  const cartString = sessionStorage.getItem('cart');
  return cartString ? JSON.parse(cartString) : [];
}
};



export const useCart = () => useContext(CartContext);
