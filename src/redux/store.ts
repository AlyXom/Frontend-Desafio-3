import { configureStore } from "@reduxjs/toolkit"
import heartAndCart from "../redux/slices/heartAndCart.slice"

export const store = configureStore({
  reducer: {
    heartandcart: heartAndCart
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch