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
      printData(result, currency, amount);
    }
  });
}

function parseInputAmount(amount) {
  let parsedAmount = parseFloat(amount); 
  if (!parsedAmount) {
    return false;
  }
  else {
    return true;
  }
}

function errorScreen(amount) {
  let parsedAmount = parseInputAmount(amount);
  if (!parsedAmount) {
    printUserNumberError();
    return false;
  } else {
    return true;
  }
}

// function parseCountryInput(currency) {

// }


//UI Logic------------------------------------------------------------------------

window.addEventListener("load", () => {
  document.getElementById("form").addEventListener("submit", handleSubmit); 
});

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("display").innerText = null; 
  document.getElementById("number-error").innerText = null;
  document.getElementById("currency-error").innerText = null;  
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value;
  document.getElementById("currency").value = null;
  document.getElementById("amount").value = null;
  let screen = errorScreen(amount);
  if (screen) {
    getData(currency, amount);
  }
}

function printData(data, currency, amount) {
  document.getElementById("display").innerText = `$${amount} US Dollars is equal to ${data.conversion_result} in ${currency}. The exchange rate was ${data.conversion_rate} ${currency} per US Dollar as of ${data.time_last_update_utc}.`;
}

function printError(error) {
  document.getElementById("display").innerText = `There was an error ${error.message} oh no!`;
}

function printUserNumberError() {
  document.getElementById("number-error").innerText = "Please enter a valid number"; 
}