import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/Ativo-2@4x.png'

import '../../css/bootstrap.min.css'


export default function Header(){
  
  const { t, i18n } = useTranslation();
  const [ flagActive, setFlagActive ] = useState('brazil')
  useEffect(() => {
      function changeFlags(){
          const lng = i18n.languages[0];
          console.log('lng', lng)
          if(lng === 'en') setFlagActive('united-states')
          else if (lng === 'es') setFlagActive('spain')
          else setFlagActive('brazil')
      }
      changeFlags()
  }, [i18n.languages])

  function handleClick(e, lang, flag) {
    e.preventDefault();
    i18n.changeLanguage(lang);
}

  return(
    <header id="header" style={{backgroundColor:  "#3d1a64"}}>
      <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg navbar-light" style={{left: 0}}>
                  <a className="navbar-brand" href="/">
                  <img className="logo" src={logo}  alt="logo-f4cil" ></img>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" style={{backgroundColor: "#3d1a64"}} aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavDropdown" style={{backgroundColor: "#3d1a64"}}>
                        <ul class="navbar-nav ml-auto">
                           <li class="nav-item">
                              <Link class="nav-link active" to="/">{t('home')}</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to="/solucoes">{t('solucoes')}</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to="/clientes">{t('clientes')}</Link>
                           </li>
                           <li class="nav-item">
                              <Link class="nav-link" to="/contato">{t('contato')}</Link>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="/sobre-nos">{t('sobreNos')}</a>
                           </li>
                        </ul>
                     </div>
                </nav>
            </div>
            <div class="col-lg-3 text-right">
               <ul class="login d-flex">
                 <li>
                  <div className="lngSelector dropdown show">                     
                      <a className=" dropdown-toggle" href="hide-link"  id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src={`/images/svg/${flagActive}.svg`} width={30} alt="Kiwi standing on oval"></img>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="hide-link" onClick={e => handleClick(e,'pt', 'brazil')}>
                          <img src="/images/svg/brazil.svg" width={30} alt="pt"></img>
                        </a>
                        <a className="dropdown-item" href="hide-link" onClick={e => handleClick(e,'en', 'united-states')}>
                          <img src="/images/svg/united-states.svg" width={30} alt="en"></img>
                        </a>
                        <a className="dropdown-item" href="hide-link" onClick={e => handleClick(e,'es', 'spain')}>
                          <img src="/images/svg/spain.svg" width={30} alt="es"></img>
                        </a>
                      </div>
                    </div>
                 </li>
                  <li class="d-inline active"><Link to="/login" class="login-btn">Login</Link></li>
               </ul>
            </div>
          </div>
      </div>
    </header>
  )
}