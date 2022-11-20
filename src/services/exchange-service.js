export default class ExchangeService {
  static async convert(countryCode, amount) {
    let url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${countryCode}/${amount}`;
    let response = await fetch(url);
    let data = await response.json();
    try {
      if (!response.ok || !response) {
        const errorMessage = `There was an error. Status: ${response.status} Error Type: ${data["error-type"]}`;
        throw new Error(errorMessage);
      } else {
        return data;
      }
    } catch (error) {
      return error;
    }
  }
}
