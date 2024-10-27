import { configureStore } from "@reduxjs/toolkit"
import heartAndCart from "../redux/slices/heartAndCart.slice"
import modalstate from "../redux/slices/modalState"
import filterSlice from "./slices/filterSlice"
import temporaryCart from "./slices/temporaryCart"

export const store = configureStore({
  reducer: {
    heartandcart: heartAndCart,
    modalstate: modalstate,
    filterSlice: filterSlice,
    temporaryCart: temporaryCart
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch