import React from 'react';
import ReactDOM from 'react-dom';

import Anna from './anna.js';

const axios = require('axios').default;



const Pal = () => {

  axios.get('http://localhost/ghDemo/phae.php')
          .then(function(response) {

            document.getElementById("palautteet").innerHTML = response.data;

          });





  const anna = () => {

    document.getElementById('main').innerHTML = "<div id='pal'></div>";

    ReactDOM.render(<Anna />, document.getElementById('pal'));

  }

  return (
    <>

    <h3>Palaute</h3>

    <p>Antaaksesi palautetta, klikkaa napista: </p>

    <button className="nappi" onClick={anna}>Anna palautetta</button><br/><br/>

    <hr/>

    <h3>Annetut palautteet</h3>

    <div id="palautteet"></div>

</>
);

};

export default Pal;
