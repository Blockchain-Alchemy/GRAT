import { configureStore } from '@reduxjs/toolkit'
import blocklyReducer from "./reducers/blocklyReducer";

export default configureStore({
  reducer: {
    blocklyReducer,
  }
})
