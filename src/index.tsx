import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { StoreContextC } from './stores/StoreContext';
import { Store } from './stores/Store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContextC.Provider value={new Store()}>
      <App />
    </StoreContextC.Provider>
  </React.StrictMode>
);


