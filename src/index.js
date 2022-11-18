// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
// import Codes from './code-index.js';
import ExchangeService from './services/exchange-service.js';


//Business Logic ------------------------------------------------------------------

function getData(currency, amount) {
  let request = ExchangeService.convert(currency, amount); 
  request.then( (result) => {
    if (result instanceof Error) {
      return result.message; 
    }
    else {
      printData(result.conversion_result);
    }
  });
}



//UI Logic------------------------------------------------------------------------

window.addEventListener("load", () => {
  document.getElementById("form").addEventListener("submit", handleSubmit); 
});

function handleSubmit(event) {
  event.preventDefault(); 
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value;
  getData(currency, amount);
}

function printData(data) {
  document.getElementById("display").innerText = data;  
}