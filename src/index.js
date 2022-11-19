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
      console.log(result);
      printError(result);
    }
    else {
      printData(result);
    }
  });
}

function parseInputAmount(amount) {
  let inputAmount = {};
  let parsedAmount = parseFloat(amount); 
  if (!parsedAmount) {
    inputAmount["valid"] = false;
  }
  else {
    inputAmount["valid"] = true; 
    inputAmount["amount"] = parsedAmount;
  }
  return inputAmount;
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
  document.getElementById("display").innerText = data.conversion_result; 
}

function printError(error) {
  document.getElementById("display").innerText = `There was an error ${error.message} oh no!`;
}
