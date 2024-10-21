import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Routes from './Routes.js';
import { Template } from './components/MainComponents.js';
import Header from './components/partials/Header/index.js';
import Footer from './components/partials/Footer/index.js';

const Page = (props) => {
  return (
    <BrowserRouter>
     <Template>
      <Header />
      <Routes />
      <Footer />
     </Template>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
