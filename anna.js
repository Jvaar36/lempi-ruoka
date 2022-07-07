const Anna = () => {

const axios = require('axios').default;

  const anna = () => {

    const nimi = document.getElementById("nimimerkki").value;
    const palaute = document.getElementById("palaute").value;


    //alert('Kiitos palautteestasi!');

    const params = new URLSearchParams();
    params.append('nimi', nimi);
    params.append('palaute', palaute);


    axios({
      method: 'POST',
      url: 'http://localhost/ghDemo/pal.php',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: params
    });

  }

  return (
    <>

    <h3>Anna palautetta</h3>

    <p>Täytä nimimerkkisi, anna <br/>palautteesi ja klikkaa lähetä: </p>

    <form>
    <p>1. Nimimerkkisi: </p>
    <input type="text" id="nimimerkki" /><br/>
    <p>2. Palaute: </p>

    <textarea id="palaute" /><br/><br/>

    <button className="nappi" onClick={anna}>Lähetä</button>

    </form>


</>
);

};

export default Anna;
