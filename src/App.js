import React from 'react';
import Router from './router'
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux'
import store from './redux/store'

// import './css/bootstrap.min.css'
import './css/typography.css'
import './css/style.css'
import './css/responsive.css'
import './css/slick.css'

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router/>
      </HelmetProvider>
    </Provider>
    
  );
}

export default App;
