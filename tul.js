const Tul = () => {

  const axios = require('axios').default;

  axios.get('http://localhost/ghDemo/hae.php')
          .then(function(response) {

            document.getElementById("tulokset").innerHTML = response.data;

          });

  return (
    <>

    <h3>Tulokset</h3>

    <p>Annetut vastaukset lempiruoista taulukkona:</p>

    <div id="tulokset"></div>

</>
);

};

export default Tul;
