export default class exchangeService {
  static convert(countryCode, amount) {
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${countryCode}/${amount}`;
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("There was an error");
        }
        else {
          return response.json(); 
        }
      })
      .catch((error) => {
        return error; 
      });      
  }
}
