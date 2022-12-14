import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Codes from './code-index.js';
import ExchangeService from './services/exchange-service.js';


//Business Logic ------------------------------------------------------------------

async function getData(currency, amount) {
  let request = await ExchangeService.convert(currency[0], amount);
  if (request instanceof Error) {
    printError(request);
  } else {
    printData(request, currency, amount);
  }
}

function errorScreenAmount(amount) {
  let parsedAmount = parseFloat(amount);
  if (!parsedAmount) {
    printUserNumberError(amount);
    return false;
  } else {
    return true;
  }
}

function errorScreenCode(code) {
  const cleanCode = code.trim().toUpperCase();
  let checkedCode = Codes.checkCurrency(cleanCode); 
  if (checkedCode) {
    return checkedCode; 
  } else {
    printUserCodeError(cleanCode);
    return false; 
  }
}


//UI Logic------------------------------------------------------------------------

window.addEventListener("load", () => {
  document.getElementById("form").addEventListener("submit", handleSubmit); 
});

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("display-1").innerText = null; 
  document.getElementById("display-2").innerText = null;
  document.getElementById("display-3").innerText = null;  
  const currency = document.getElementById("currency").value;
  const amount = document.getElementById("amount").value;
  document.getElementById("currency").value = null;
  document.getElementById("amount").value = null;
  let screenedAmount = errorScreenAmount(amount);
  let screenedCode = errorScreenCode(currency);
  if (screenedAmount && screenedCode) {
    getData(screenedCode, amount);
  }
}

function printData(data, currency, amount) {
  document.getElementById("display-1").innerText = `$${amount} US Dollars is equal to ${data.conversion_result} ${currency[1]} (${currency[0]}).`;

  document.getElementById("display-2").innerText = `The exchange rate is ${data.conversion_rate} ${currency[1]} per 1 US Dollar`;

  document.getElementById("display-3").innerText = `Last updated: ${data.time_last_update_utc}.`;
}

function printError(error) {
  document.getElementById("display-1").innerText = error.message;
}

function printUserNumberError(input) {
  document.getElementById("display-1").innerText = `You entered "${input}" which is not recognized as a valid number.`; 
}

function printUserCodeError(input) {
  document.getElementById("display-1").innerText = `You entered "${input}" which is not a recognized country code. Please refer to the link for a list of supported country codes.`;
}
