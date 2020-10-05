import React, { useEffect }from 'react';
import Admin from './painel/layout/Admin'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <Admin/>
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
