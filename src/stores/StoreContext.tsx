import { createContext } from "react";
import { Store } from './Store';
import React from "react";

export const StoreContextC = createContext(new Store())

export const useStore = () => {
    const store = React.useContext(StoreContextC);
    if (!store) {
      throw new Error('useStore must be used within a StoreProvider.');
    }
    return store;
}