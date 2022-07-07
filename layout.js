import React from 'react';
import { Outlet, Link } from "react-router-dom";
import ReactDOM from 'react-dom';

import Stat from './stat.js';
import './etusivu.css';



const Layout = () => {



  return (
  <>

  <div id="container">

  <div id="header">
  <div id="navbar">
  <h1>Lempiruoka</h1>


  <nav>
    <ul>
    <li>
      <Link to="/">Etusivu</Link>
      </li>
      <li>
        <Link to="/Kys">Kysely</Link>
    </li>
    <li>
      <Link to="/Tul">Tulokset</Link>
  </li>
  <li>
    <Link to="/Pal">Palaute</Link>
</li>
    </ul>
    </nav>
    </div>
</div>

<div id="main">

<Outlet>
  </Outlet>



</div>

<div id="sidebar">

<Stat/>

</div>

<div id="footer">

<h3>ghDemo footer</h3>
</div>

</div>


</>
  )

};

export default Layout;
