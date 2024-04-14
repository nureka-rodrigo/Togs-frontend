import {createContext, useContext, useState} from "react";
import PropTypes from "prop-types";

// Create a context for the cart
const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {
  },
  removeItemFromCart: () => {
  },
  updateCartItemQuantity: () => {
  },
  getTotalItemsInCart: () => {
  },
  getTotalPrice: () => {
  },
});

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add item to cart
  const addItemToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    // If the item is already in the cart, update its properties
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        ...item,
      };
      setCartItems(updatedCartItems);
      return;
    }

    // If the item is not in the cart, add it
    setCartItems([...cartItems, item]);
  };


  // Function to remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Function to update quantity of item in cart
  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? {...item, quantity} : item
      )
    );
  };

  // Function to get total number of unique items in cart
  const getTotalItemsInCart = () => {
    // Get unique item IDs
    const uniqueItemIds = new Set(cartItems.map((item) => item.id));
    // Return the number of unique item IDs
    return uniqueItemIds.size;
  };


  // Function to get total price of items in cart
  const getTotalPrice = () => {
    // Check if cartItems array is empty
    if (cartItems.length === 0) {
      return 0;
    }

    // Calculate total price
    return cartItems.reduce((total, item) => {
      // Parse the price string to extract the numeric value
      const itemPrice = parseFloat(item.price);
      // Check if itemPrice is a valid number
      if (isNaN(itemPrice)) {
        console.error(`Invalid price for item: ${JSON.stringify(item)}`);
        return total;
      }
      // Add the price of the item multiplied by its quantity to the total
      return total + (itemPrice * item.quantity);
    }, 0);
  };


  // Provide the cart context to child components
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        updateCartItemQuantity,
        getTotalItemsInCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};