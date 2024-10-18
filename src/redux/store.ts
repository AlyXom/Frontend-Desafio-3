import { configureStore } from "@reduxjs/toolkit"
import heartAndCart from "../redux/slices/heartAndCart.slice"
import modalstate from "../redux/slices/modalState"

export const store = configureStore({
  reducer: {
    heartandcart: heartAndCart,
    modalstate: modalstate
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch