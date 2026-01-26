import React, { createContext, useState, useContext, useEffect } from "react";

// Create the Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Initialize cart state from localStorage on mount (only on the client side)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      try {
        setCart(storedCart ? JSON.parse(storedCart) : []);
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
        setCart([]);
      }
    }
  }, []);

  // Sync cart state with localStorage whenever cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (cart.length === 0) {
        localStorage.removeItem("cart");
      } else {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }, [cart]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      return existing
        ? prev.map((i) =>
            i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove a product from the cart by ID
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // Increment product quantity by 1
  const incrementQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // Decrement product quantity by 1 (with a minimum quantity of 1)
  const decrementQuantity = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );
  };

  // Calculate the total price of all items in the cart
 const calculateTotalPrice = () => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0); // Return a number
};

  // Clear the cart completely
  const clearCart = () => {
    setCart([]);
  };

  // Return the context provider with the value passed to the children components
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
