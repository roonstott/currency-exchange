# _Currency Converter_

#### By _**Robert Onstott**_

#### _The currency converter makes an API call to ExchangeRate-API https://www.exchangerate-api.com/ in order to return a currency conversion from US Dollars to most other global currencies._

## Technologies Used

* _Node.js/NPM_
* _Webpack_
* _ES Lint_
* _Github_
* _Babel_

## Description

_This program allows a user to specify the amount of US Dollars that they would like to convert, and the global currency that they would like to convert into. It uses that input to make an API call to ExchangeRate-API https://www.exchangerate-api.com/. Currencies must be inputted in the form of a three character ISO 427 country code, but it is not case sensitive. The site also has a link with a reference to all supported country codes._

## Setup/Installation Requirements

* _Clone the repository from github_
* _Use NPM to install the dependencies_
  `$ npm install`
* _Build the webpack module_
  `$ npm run build`
* _Create a .env file in the root directory_
  `$ touch .env`
* _Go to the ExchangeRate API webpage https://www.exchangerate-api.com/ _
* _Click the 'Get Free Key' button on the top right corner of the page_
* _Follow the instructions to create an account and generate a free key._
* _Go to the .env file and enter: 'API_KEY= {your API key}' without any spaces or other characters_
  `API_KEY= {your API key}`
* _To see the site in a local live server, you can use the webpack liveserver_
  `$ npm run start`

## Known Bugs

* No known bugs

## License

_MIT_

Copyright (c) _Nov 2022_ _Robert Onstott_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.