import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux'

import SideBarLoading from '../../components/Placeholderloadings/SideBarLoading'

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/cliente', state: 'clienteUiMenuOpen'},
      {path:'/usuario', state: 'usuarioUiMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    const { nome, imagemUrl, tipoConta, loading } = this.props;
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../../assets/images/Ativo-1@4x.png")} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg" )} alt="logo" /></a>
        </div>
        {loading ? <SideBarLoading/> : 
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img src={imagemUrl} alt="profile" />
                    </div>
                    <div className="text-left ml-3">
                      <p className="profile-name">{nome}</p>
                      <small className="designation text-muted text-small">Administrador</small>
                      <span className="status-indicator online"></span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                {/* <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt =>evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                  Change Password 
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt =>evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu> */}
              </Dropdown>
              {/* <button className="btn btn-success btn-block">New Project <i className="mdi mdi-plus"></i></button> */}
            </div>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns">Dropdowns</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography">Typography</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/form-elements/basic-elements">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Form Elements</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/tables') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/tables/basic-table">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">Tables</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/icons') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/icons/font-awesome">
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">Icons</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/charts') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/charts/chart-js">
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">Charts</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('userPagesMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.userPagesMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/blank-page') ? 'nav-link active' : 'nav-link' } to="/user-pages/blank-page">Blank Page</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link' } to="/user-pages/register-1">Register</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-404') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-404">404</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/user-pages/error-500') ? 'nav-link active' : 'nav-link' } to="/user-pages/error-500">500</Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={ this.isPathActive('/cliente') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.clienteUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('clienteUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-storefront menu-icon"></i>
              <span className="menu-title">Clientes</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.clienteUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/cliente/todas') ? 'nav-link active' : 'nav-link' } to="/cliente/todas"><i className="mdi mdi-account-group menu-icon"></i>Todos</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/cliente/adiciona') ? 'nav-link active' : 'nav-link' } to="/cliente/adiciona"><i className="mdi mdi-plus-circle menu-icon"></i>Adicionar Clinte</Link></li>
              </ul>
            </Collapse>
          </li>
          {tipoConta !== 'superAdmin' ? 
          <li className={ this.isPathActive('/usuario') ? 'nav-item active' : 'nav-item' }>
            <div className={ this.state.usuarioUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('usuarioUiMenuOpen') } data-toggle="collapse">
              <i className="mdi mdi-account-multiple menu-icon"></i>
              <span className="menu-title">Gerenciar Usuário</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.usuarioUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/usuario/usuarios') ? 'nav-link active' : 'nav-link' } to="/usuario/usuarios"><i className="mdi mdi-account-group menu-icon"></i>Usuários</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/usuario/adiciona') ? 'nav-link active' : 'nav-link' } to="/usuario/adiciona"><i className="mdi mdi-account-plus menu-icon"></i>Adicionar Usuário</Link></li>
                <li className="nav-item"> <Link className={ this.isPathActive('/usuario/meu-perfil') ? 'nav-link active' : 'nav-link' } to="/usuario/meu-perfil"><i className="mdi mdi-account-circle menu-icon"></i>Meu Perfil</Link></li>
              </ul>
            </Collapse>
          </li> : 
          <li className={ this.isPathActive('/usuario') ? 'nav-item active' : 'nav-item' }>
          <div className={ this.state.usuarioUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('usuarioUiMenuOpen') } data-toggle="collapse">
            <i className="mdi mdi-account-multiple menu-icon"></i>
            <span className="menu-title">Conta</span>
            <i className="menu-arrow"></i>
          </div>
            <Collapse in={ this.state.usuarioUiMenuOpen }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={ this.isPathActive('/usuario/meu-perfil') ? 'nav-link active' : 'nav-link' } to="/usuario/meu-perfil"><i className="mdi mdi-account-circle menu-icon"></i>Meu Perfil</Link></li>
              </ul>
            </Collapse>
          </li> }
        </ul> }
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
const mapStateToProps = (state) => ({
  nome: state.user.nome,
  imagemUrl: state.user.imagemUrl,
  tipoConta: state.user.tipoConta,
  loading: state.user.loading
})
export default connect(mapStateToProps)(withRouter(Sidebar));