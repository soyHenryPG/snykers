import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products/productsSlice";
import users from "./features/users/usersSlice"
import orders from "./features/orders/ordersSlice"
import reviews from "./features/reviews/reviewsSlice";
import nodemailer from "./features/nodemailer/nodeMailerSlice"


export const store = configureStore({
  reducer: {
    products: products,
    users: users,
    orders: orders,
    reviews: reviews,
    nodemailer: nodemailer,
  },
});
