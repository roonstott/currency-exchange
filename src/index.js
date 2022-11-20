// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
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

function parseInputAmount(amount) {
  let parsedAmount = parseFloat(amount); 
  if (!parsedAmount) {
    return false;
  }
  else {
    return true;
  }
}

function errorScreenAmount(amount) {
  let parsedAmount = parseInputAmount(amount);
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
  document.getElementById("display").innerText = null; 
  document.getElementById("number-error").innerText = null;
  document.getElementById("currency-error").innerText = null;  
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
  document.getElementById("display").innerText = `$${amount} US Dollars is equal to ${currency[0]} ${data.conversion_result} ${currency[1]}. The exchange rate was ${data.conversion_rate} ${currency[1]} per US Dollar as of ${data.time_last_update_utc}.`;
}

function printError(error) {
  document.getElementById("display").innerText = error.message;
}

function printUserNumberError(input) {
  document.getElementById("number-error").innerText = `You entered ${input}, which is not recognized as a valid number.`; 
}

function printUserCodeError(input) {
  document.getElementById("number-error").innerText = `You entered ${input}, which is not a recognized country code. Please refer to the link for a list of supported country codes.`;
}
