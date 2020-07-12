import React, { useEffect }from 'react';
import Router from './router'
import { PageView, initGA } from './components/Tracking';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux'
import store from './redux/store'



// import './css/bootstrap.min.css'
import './css/typography.css'
import './css/style.css'
import './css/responsive.css'
import './css/slick.css'

function App() {
  initGA('UA-106127269-9');
  useEffect(() => {
    PageView();
  })
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Router/>
      </HelmetProvider>
    </Provider>
    
  );
}

export default App;
