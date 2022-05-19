import React from 'react'
import { Provider } from "react-redux";
import { BeaconProvider } from 'contexts/BeaconContext'
import store from "./store";

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <BeaconProvider>
        { children }
      </BeaconProvider>
    </Provider>
  )
}

export default Providers
