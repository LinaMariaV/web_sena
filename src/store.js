import { configureStore } from '@reduxjs/toolkit'
import authStorage from './storages/auth'



export default configureStore({
  reducer: {
    auth: authStorage,
  },
})