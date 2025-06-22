import { createSlice } from "@reduxjs/toolkit";

const MySlice = createSlice({
  name: "user",
  initialState: {
    theme: true, // Initial state for theme
    adminInfo: null,
    adminToken: null,
    userInfo: null,
    userToken: null,
    hasRefreshed: false,

    cartItems: [], // Array of cart items
    totalQuantity: 0, // Total number of items in the cart
    totalAmount: 0, // Total price of items in the cart

    DeliveryDetail: {
      firstName: '',
      lastName: '',
      phone: '',
      confirmPhone: '',
      email: '',
      address: '',
      state: '',
      city: '',
    },
  },
  reducers: {
    adminLogin: (state, { payload }) => {
      state.adminInfo = payload.adminInfo;
      state.adminToken = payload.adminToken;
    },
    adminLogout: (state) => {
      state.adminInfo = null;
      state.adminToken = null;
    },
    updateAdminInfo: (state, { payload }) => {
      if (state.adminInfo) {
        state.adminInfo = { ...state.adminInfo, ...payload };
      }
    },

    // user reducers
    userLogin: (state, { payload }) => {
      state.userInfo = payload.userInfo;
      state.userToken = payload.userToken;
    },
    userLogout: (state) => {
      state.userInfo = null;
      state.userToken = null;
    },
    updateUserInfo: (state, { payload }) => {
      if (state.userInfo) {
        state.userInfo = { ...state.userInfo, ...payload };
      }
    },

    // Add to Cart
    addToCart: (state, { payload }) => {
      const existingItem = state.cartItems.find(item => item.id === payload.id);
      if (existingItem) {
        existingItem.quantity += payload.quantity;
        existingItem.subtotal = existingItem.price * existingItem.quantity;
      } else {
        state.cartItems.push({ ...payload, subtotal: payload.price * payload.quantity });
      }
      state.totalQuantity += payload.quantity;
      state.totalAmount += payload.price * payload.quantity;
    },

    // Update cart quantity
    updateCartQuantity: (state, { payload }) => {
      const item = state.cartItems.find(item => item.id === payload.id);
      if (item) {
        const oldSubtotal = item.subtotal;
        item.quantity = payload.quantity;
        item.subtotal = item.price * item.quantity;

        // Recalculate totals
        state.totalQuantity += payload.quantity - item.quantity; // Adjust totalQuantity
        state.totalAmount += item.subtotal - oldSubtotal; // Adjust totalAmount
      }
    },

    // Remove from cart
    removeFromCart: (state, { payload: id }) => {
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.subtotal;
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },
    updateField: (state, action) => {
      state.DeliveryDetail[action.payload.field] = action.payload.value;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },

    // Toggle the theme state
    toggleTheme: (state) => {
      state.theme = !state.theme; // Toggle between true and false
    },

    setRefreshed: (state, action) => {
      state.hasRefreshed = action.payload;
    },

  },
});

export const {
  adminLogin,
  adminLogout,
  updateAdminInfo,
  userLogin,
  clearCart,
  userLogout,
  updateUserInfo,
  updateField,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  toggleTheme, // Export the toggleTheme action
  setRefreshed,
} = MySlice.actions;

export default MySlice.reducer;
