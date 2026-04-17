import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Nav from './components/Navbar';
import PlaceHolder from './components/Pholder';
import Presentacion from './components/Card';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Presentacion/>
    <div className='placeholdersCentral'>
      <PlaceHolder/>
      <PlaceHolder/>
      <PlaceHolder/>
      <PlaceHolder/>
      <PlaceHolder/>
      <PlaceHolder/>
      <PlaceHolder/>
      <PlaceHolder/>
    </div>
  </React.StrictMode>,
)
