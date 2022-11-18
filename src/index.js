// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import Codes from './code-index.js';
import exchangeService from './services/exchange-service.js';


//UI Logic------------------------------------------------------------------------

window.addEventListener("load", () => {
  document.getElementById("form").addEventListener("submit", handleSubmit); 
});

function handleSubmit(event) {
  event.preventDefault(); 
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value; 
  let data = exchangeService.convert(currency, amount); 
  function printResults(data); 
}

printResults(data) => {
  return new Promise (resolve, reject) {
    if (data.isEr)
  }
}