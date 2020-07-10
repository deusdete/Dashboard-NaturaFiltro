import React, { useEffect, useState  } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.scss';
import Routes from '../routes';
import Navbar from '../pages/shared/Navbar';
import Sidebar from '../pages/shared/Sidebar';
import Footer from '../pages/shared/Footer';

import api from '../../services/api';

// Redux
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { logoutUser, getUserData} from '../../redux/actions/userAction';
import { SET_AUTHENTICATED } from '../../redux/types';



function AdminLayout(props){
  const [ isFullPageLayout, setIsFullPageLayout ] = useState(false);
  const token = localStorage.FBIdToken;
  let navbarComponent = !isFullPageLayout ? <Navbar/> : '';
  let sidebarComponent = !isFullPageLayout ? <Sidebar/> : '';
  let footerComponent = !isFullPageLayout ? <Footer/> : '';

  // useEffect(() => {
  //   onRouteChanged();
  //   if(token){
  //     const tokenDecote = jwtDecode(token);
  //     console.log(tokenDecote);
  //     if(tokenDecote.exp * 1000 < Date.now()){
  //       store.dispatch(logoutUser());
  //       window.location.href= "/user-pages/login-1";
  //     }else{
  //       store.dispatch({type: SET_AUTHENTICATED});
  //       api.defaults.headers.Authorization = token;
  //       console.log('getUserData...')
  //       store.dispatch(getUserData())
  //     }
  //   }else{
  //     console.log('Não tem Token')
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
    onRouteChanged();
  })

  // if (this.props.location !== prevProps.location) {
  //   this.onRouteChanged();
  // }

  function onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setIsFullPageLayout(true)
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        setIsFullPageLayout(false)
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }

  return (
    <Provider store={store}>
      <div className="container-scroller">
        { navbarComponent }
        <div className="container-fluid page-body-wrapper">
          { sidebarComponent }
          <div className="main-panel">
            <div className="content-wrapper">
              <Routes/>
            </div>
            { footerComponent }
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default withRouter(AdminLayout);
