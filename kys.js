import React from 'react';
import ReactDOM from 'react-dom';

import Kiitos from './kiitos.js';

const Kys = () => {

const axios = require('axios').default;


  const laheta = () => {

      const nimi = document.getElementById("nimimerkki").value;
      const ruoka = document.getElementById("lempiruoka").value;


      //alert('Kiitos vastauksestasi!');

      const params = new URLSearchParams();
      params.append('nimi', nimi);
      params.append('ruoka', ruoka);


      axios({
        method: 'POST',
        url: 'http://localhost/ghDemo/vie.php',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: params
      });

      document.getElementById("formi").reset();

      //document.getElementById('main').innerHTML = "<h3>Kiitos vastauksestasi!</h3>";

      }



  return (
    <>

    <h3>Kysely</h3>

    <p>Vastaa allaolevalla kaavakkeella kysymykseen: <br/>
    Mikä vaihtoehdoista on lempiruokasi: <br/></p>


    <form id="formi">
    <p>1. Anna nimimerkkisi: </p>
    <input type="text" id="nimimerkki" /><br/>
    <p>2. Valitse vaihtoehdoista lempiruokasi: </p>
    <select id="lempiruoka">

      <option value="Kalakeitto">Kalakeitto</option>
      <option value="Paistettu Lohi">Paistettu lohi</option>
      <option value="Omeletti">Omeletti</option>
      <option value="Lihapullat, Kastike">Lihapullat, kastike</option>
      <option value="Pizza">Pizza</option>
      <option value="Hampurilainen">Hampurilainen</option>
      <option value="Pekoni">Pekoni</option>
      <option value="Currykana">Currykana</option>

      </select><br/>

      <p>Lähetä vastauksesi klikkaamalla Lähetä</p>

      <button type="button" className="nappi" onClick={laheta}>Lähetä</button>

      </form>



</>
);

};

export default Kys;
