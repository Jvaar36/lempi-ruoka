const Stat = () => {

  const axios = require('axios').default;

  axios.get('http://localhost/ghDemo/shae.php')
          .then(function(response) {

            document.getElementById("stat").innerHTML = response.data;

          });

  return (
    <>

    <h3>Statistiikkaa</h3>

    <div id="stat"></div>

</>
);

};

export default Stat;
