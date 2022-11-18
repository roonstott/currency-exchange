// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

let codes = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SOS", "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"];

let currencies = [ "UAE Dirham", "Afghan Afghani", "Albanian Lek", "Armenian Dram", "Netherlands Antillian Guilder", "Angolan Kwanza", "Argentine Peso", "Australian Dollar", "Aruban Florin", "Azerbaijani Manat", "Bosnia and Herzegovina Mark", "Barbados Dollar", "Bangladeshi Taka", "Bulgarian Lev", "Bahraini Dinar", "Burundian Franc", "Bermudian Dollar", "Brunei Dollar", "Bolivian Boliviano", "Brazilian Real", "Bahamian Dollar", "Bhutanese Ngultrum", "Botswana Pula", "Belarusian Ruble", "Belize Dollar", "Canadian Dollar", "Congolese Franc", "Swiss Franc", "Chilean Peso", "Chinese Renminbi", "Colombian Peso", "Costa Rican Colon", "Cuban Peso", "Cape Verdean Escudo", "Czech Koruna", "Djiboutian Franc", "Danish Krone", "Dominican Peso", "Algerian Dinar", "Egyptian Pound", "Eritrean Nakfa", "Ethiopian Birr", "Euro", "Fiji Dollar", "Falkland Islands Pound", "Faroese Króna", "Pound Sterling", "Georgian Lari", "Guernsey Pound", "Ghanaian Cedi", "Gibraltar Pound", "Gambian Dalasi", "Guinean Franc", "Guatemalan Quetzal", "Guyanese Dollar", "Hong Kong Dollar", "Honduran Lempira", "Croatian Kuna", "Haitian Gourde", "Hungarian Forint", "Indonesian Rupiah", "Israeli New Shekel", "Manx Pound", "Indian Rupee", "Iraqi Dinar", "Iranian Rial", "Icelandic Króna", "Jersey Pound", "Jamaican Dollar", "Jordanian Dinar", "Japanese Yen", "Kenyan Shilling", "Kyrgyzstani Som", "Cambodian Riel", "Kiribati Dollar", "Comorian Franc", "South Korean Won", "Kuwaiti Dinar", "Cayman Islands Dollar", "Kazakhstani Tenge", "Lao Kip", "Lebanese Pound", "Sri Lanka Rupee", "Liberian Dollar", "Lesotho Loti", "Libyan Dinar", "Moroccan Dirham", "Moldovan Leu", "Malagasy Ariary", "Macedonian Denar", "Burmese Kyat", "Mongolian Tögrög", "Macanese Pataca", "Mauritanian Ouguiya", "Mauritian Rupee", "Maldivian Rufiyaa", "Malawian Kwacha", "Mexican Peso", "Malaysian Ringgit", "Mozambican Metical", "Namibian Dollar", "Nigerian Naira", "Nicaraguan Córdoba", "Norwegian Krone", "Nepalese Rupee", "New Zealand Dollar", "Omani Rial", "Panamanian Balboa", "Peruvian Sol", "Papua New Guinean Kina", "Philippine Peso", "Pakistani Rupee", "Polish Złoty", "Paraguayan Guaraní", "Qatari Riyal", "Romanian Leu", "Serbian Dinar", "Russian Ruble", "Rwandan Franc", "Saudi Riyal", "Solomon Islands Dollar", "Seychellois Rupee", "Sudanese Pound", "Swedish Krona", "Singapore Dollar", "Saint Helena Pound", "Sierra Leonean Leone", "Somali Shilling", "Surinamese Dollar", "South Sudanese Pound", "São Tomé and Príncipe Dobra", "Syrian Pound", "Eswatini Lilangeni", "Thai Baht", "Tajikistani Somoni", "Turkmenistan Manat", "Tunisian Dinar", "Tongan Paʻanga", "Turkish Lira", "Trinidad and Tobago Dollar", "Tuvaluan Dollar", "New Taiwan Dollar", "Tanzanian Shilling", "Ukrainian Hryvnia", "Ugandan Shilling", "United States Dollar", "Uruguayan Peso", "Uzbekistani So'm", "Venezuelan Bolívar Soberano", "Vietnamese Đồng", "Vanuatu Vatu", "Samoan Tālā", "Central African CFA Franc", "East Caribbean Dollar", "Special Drawing Rights", "West African CFA franc", "CFP Franc", "Yemeni Rial", "South African Rand", "Zambian Kwacha", "Zimbabwean Dollar"];

let codesObj = {
  AED: 'UAE Dirham',
  AFN: 'Afghan Afghani',
  ALL: 'Albanian Lek',
  AMD: 'Armenian Dram',
  ANG: 'Netherlands Antillian Guilder',
  AOA: 'Angolan Kwanza',
  ARS: 'Argentine Peso',
  AUD: 'Australian Dollar',
  AWG: 'Aruban Florin',
  AZN: 'Azerbaijani Manat',
  BAM: 'Bosnia and Herzegovina Mark',
  BBD: 'Barbados Dollar',
  BDT: 'Bangladeshi Taka',
  BGN: 'Bulgarian Lev',
  BHD: 'Bahraini Dinar',
  BIF: 'Burundian Franc',
  BMD: 'Bermudian Dollar',
  BND: 'Brunei Dollar',
  BOB: 'Bolivian Boliviano',
  BRL: 'Brazilian Real',
  BSD: 'Bahamian Dollar',
  BTN: 'Bhutanese Ngultrum',
  BWP: 'Botswana Pula',
  BYN: 'Belarusian Ruble',
  BZD: 'Belize Dollar',
  CAD: 'Canadian Dollar',
  CDF: 'Congolese Franc',
  CHF: 'Swiss Franc',
  CLP: 'Chilean Peso',
  CNY: 'Chinese Renminbi',
  COP: 'Colombian Peso',
  CRC: 'Costa Rican Colon',
  CUP: 'Cuban Peso',
  CVE: 'Cape Verdean Escudo',
  CZK: 'Czech Koruna',
  DJF: 'Djiboutian Franc',
  DKK: 'Danish Krone',
  DOP: 'Dominican Peso',
  DZD: 'Algerian Dinar',
  EGP: 'Egyptian Pound',
  ERN: 'Eritrean Nakfa',
  ETB: 'Ethiopian Birr',
  EUR: 'Euro',
  FJD: 'Fiji Dollar',
  FKP: 'Falkland Islands Pound',
  FOK: 'Faroese Króna',
  GBP: 'Pound Sterling',
  GEL: 'Georgian Lari',
  GGP: 'Guernsey Pound',
  GHS: 'Ghanaian Cedi',
  GIP: 'Gibraltar Pound',
  GMD: 'Gambian Dalasi',
  GNF: 'Guinean Franc',
  GTQ: 'Guatemalan Quetzal',
  GYD: 'Guyanese Dollar',
  HKD: 'Hong Kong Dollar',
  HNL: 'Honduran Lempira',
  HRK: 'Croatian Kuna',
  HTG: 'Haitian Gourde',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Shekel',
  IMP: 'Manx Pound',
  INR: 'Indian Rupee',
  IQD: 'Iraqi Dinar',
  IRR: 'Iranian Rial',
  ISK: 'Icelandic Króna',
  JEP: 'Jersey Pound',
  JMD: 'Jamaican Dollar',
  JOD: 'Jordanian Dinar',
  JPY: 'Japanese Yen',
  KES: 'Kenyan Shilling',
  KGS: 'Kyrgyzstani Som',
  KHR: 'Cambodian Riel',
  KID: 'Kiribati Dollar',
  KMF: 'Comorian Franc',
  KRW: 'South Korean Won',
  KWD: 'Kuwaiti Dinar',
  KYD: 'Cayman Islands Dollar',
  KZT: 'Kazakhstani Tenge',
  LAK: 'Lao Kip',
  LBP: 'Lebanese Pound',
  LKR: 'Sri Lanka Rupee',
  LRD: 'Liberian Dollar',
  LSL: 'Lesotho Loti',
  LYD: 'Libyan Dinar',
  MAD: 'Moroccan Dirham',
  MDL: 'Moldovan Leu',
  MGA: 'Malagasy Ariary',
  MKD: 'Macedonian Denar',
  MMK: 'Burmese Kyat',
  MNT: 'Mongolian Tögrög',
  MOP: 'Macanese Pataca',
  MRU: 'Mauritanian Ouguiya',
  MUR: 'Mauritian Rupee',
  MVR: 'Maldivian Rufiyaa',
  MWK: 'Malawian Kwacha',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  MZN: 'Mozambican Metical',
  NAD: 'Namibian Dollar',
  NGN: 'Nigerian Naira',
  NIO: 'Nicaraguan Córdoba',
  NOK: 'Norwegian Krone',
  NPR: 'Nepalese Rupee',
  NZD: 'New Zealand Dollar',
  OMR: 'Omani Rial',
  PAB: 'Panamanian Balboa',
  PEN: 'Peruvian Sol',
  PGK: 'Papua New Guinean Kina',
  PHP: 'Philippine Peso',
  PKR: 'Pakistani Rupee',
  PLN: 'Polish Złoty',
  PYG: 'Paraguayan Guaraní',
  QAR: 'Qatari Riyal',
  RON: 'Romanian Leu',
  RSD: 'Serbian Dinar',
  RUB: 'Russian Ruble',
  RWF: 'Rwandan Franc',
  SAR: 'Saudi Riyal',
  SBD: 'Solomon Islands Dollar',
  SCR: 'Seychellois Rupee',
  SDG: 'Sudanese Pound',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  SHP: 'Saint Helena Pound',
  SLE: 'Sierra Leonean Leone',
  SOS: 'Somali Shilling',
  SRD: 'Surinamese Dollar',
  SSP: 'South Sudanese Pound',
  STN: 'São Tomé and Príncipe Dobra',
  SYP: 'Syrian Pound',
  SZL: 'Eswatini Lilangeni',
  THB: 'Thai Baht',
  TJS: 'Tajikistani Somoni',
  TMT: 'Turkmenistan Manat',
  TND: 'Tunisian Dinar',
  TOP: 'Tongan Paʻanga',
  TRY: 'Turkish Lira',
  TTD: 'Trinidad and Tobago Dollar',
  TVD: 'Tuvaluan Dollar',
  TWD: 'New Taiwan Dollar',
  TZS: 'Tanzanian Shilling',
  UAH: 'Ukrainian Hryvnia',
  UGX: 'Ugandan Shilling',
  USD: 'United States Dollar',
  UYU: 'Uruguayan Peso',
  UZS: "Uzbekistani So'm",
  VES: 'Venezuelan Bolívar Soberano',
  VND: 'Vietnamese Đồng',
  VUV: 'Vanuatu Vatu',
  WST: 'Samoan Tālā',
  XAF: 'Central African CFA Franc',
  XCD: 'East Caribbean Dollar',
  XDR: 'Special Drawing Rights',
  XOF: 'West African CFA franc',
  XPF: 'CFP Franc',
  YER: 'Yemeni Rial',
  ZAR: 'South African Rand',
  ZMW: 'Zambian Kwacha',
  ZWL: 'Zimbabwean Dollar'
}

let currenciesObj = {
  'UAE Dirham': 'AED',
  'Afghan Afghani': 'AFN',
  'Albanian Lek': 'ALL',
  'Armenian Dram': 'AMD',
  'Netherlands Antillian Guilder': 'ANG',
  'Angolan Kwanza': 'AOA',
  'Argentine Peso': 'ARS',
  'Australian Dollar': 'AUD',
  'Aruban Florin': 'AWG',
  'Azerbaijani Manat': 'AZN',
  'Bosnia and Herzegovina Mark': 'BAM',
  'Barbados Dollar': 'BBD',
  'Bangladeshi Taka': 'BDT',
  'Bulgarian Lev': 'BGN',
  'Bahraini Dinar': 'BHD',
  'Burundian Franc': 'BIF',
  'Bermudian Dollar': 'BMD',
  'Brunei Dollar': 'BND',
  'Bolivian Boliviano': 'BOB',
  'Brazilian Real': 'BRL',
  'Bahamian Dollar': 'BSD',
  'Bhutanese Ngultrum': 'BTN',
  'Botswana Pula': 'BWP',
  'Belarusian Ruble': 'BYN',
  'Belize Dollar': 'BZD',
  'Canadian Dollar': 'CAD',
  'Congolese Franc': 'CDF',
  'Swiss Franc': 'CHF',
  'Chilean Peso': 'CLP',
  'Chinese Renminbi': 'CNY',
  'Colombian Peso': 'COP',
  'Costa Rican Colon': 'CRC',
  'Cuban Peso': 'CUP',
  'Cape Verdean Escudo': 'CVE',
  'Czech Koruna': 'CZK',
  'Djiboutian Franc': 'DJF',
  'Danish Krone': 'DKK',
  'Dominican Peso': 'DOP',
  'Algerian Dinar': 'DZD',
  'Egyptian Pound': 'EGP',
  'Eritrean Nakfa': 'ERN',
  'Ethiopian Birr': 'ETB',
  'Euro': 'EUR',
  'Fiji Dollar': 'FJD',
  'Falkland Islands Pound': 'FKP',
  'Faroese Króna': 'FOK',
  'Pound Sterling': 'GBP',
  'Georgian Lari': 'GEL',
  'Guernsey Pound': 'GGP',
  'Ghanaian Cedi': 'GHS',
  'Gibraltar Pound': 'GIP',
  'Gambian Dalasi': 'GMD',
  'Guinean Franc': 'GNF',
  'Guatemalan Quetzal': 'GTQ',
  'Guyanese Dollar': 'GYD',
  'Hong Kong Dollar': 'HKD',
  'Honduran Lempira': 'HNL',
  'Croatian Kuna': 'HRK',
  'Haitian Gourde': 'HTG',
  'Hungarian Forint': 'HUF',
  'Indonesian Rupiah': 'IDR',
  'Israeli New Shekel': 'ILS',
  'Manx Pound': 'IMP',
  'Indian Rupee': 'INR',
  'Iraqi Dinar': 'IQD',
  'Iranian Rial': 'IRR',
  'Icelandic Króna': 'ISK',
  'Jersey Pound': 'JEP',
  'Jamaican Dollar': 'JMD',
  'Jordanian Dinar': 'JOD',
  'Japanese Yen': 'JPY',
  'Kenyan Shilling': 'KES',
  'Kyrgyzstani Som': 'KGS',
  'Cambodian Riel': 'KHR',
  'Kiribati Dollar': 'KID',
  'Comorian Franc': 'KMF',
  'South Korean Won': 'KRW',
  'Kuwaiti Dinar': 'KWD',
  'Cayman Islands Dollar': 'KYD',
  'Kazakhstani Tenge': 'KZT',
  'Lao Kip': 'LAK',
  'Lebanese Pound': 'LBP',
  'Sri Lanka Rupee': 'LKR',
  'Liberian Dollar': 'LRD',
  'Lesotho Loti': 'LSL',
  'Libyan Dinar': 'LYD',
  'Moroccan Dirham': 'MAD',
  'Moldovan Leu': 'MDL',
  'Malagasy Ariary': 'MGA',
  'Macedonian Denar': 'MKD',
  'Burmese Kyat': 'MMK',
  'Mongolian Tögrög': 'MNT',
  'Macanese Pataca': 'MOP',
  'Mauritanian Ouguiya': 'MRU',
  'Mauritian Rupee': 'MUR',
  'Maldivian Rufiyaa': 'MVR',
  'Malawian Kwacha': 'MWK',
  'Mexican Peso': 'MXN',
  'Malaysian Ringgit': 'MYR',
  'Mozambican Metical': 'MZN',
  'Namibian Dollar': 'NAD',
  'Nigerian Naira': 'NGN',
  'Nicaraguan Córdoba': 'NIO',
  'Norwegian Krone': 'NOK',
  'Nepalese Rupee': 'NPR',
  'New Zealand Dollar': 'NZD',
  'Omani Rial': 'OMR',
  'Panamanian Balboa': 'PAB',
  'Peruvian Sol': 'PEN',
  'Papua New Guinean Kina': 'PGK',
  'Philippine Peso': 'PHP',
  'Pakistani Rupee': 'PKR',
  'Polish Złoty': 'PLN',
  'Paraguayan Guaraní': 'PYG',
  'Qatari Riyal': 'QAR',
  'Romanian Leu': 'RON',
  'Serbian Dinar': 'RSD',
  'Russian Ruble': 'RUB',
  'Rwandan Franc': 'RWF',
  'Saudi Riyal': 'SAR',
  'Solomon Islands Dollar': 'SBD',
  'Seychellois Rupee': 'SCR',
  'Sudanese Pound': 'SDG',
  'Swedish Krona': 'SEK',
  'Singapore Dollar': 'SGD',
  'Saint Helena Pound': 'SHP',
  'Sierra Leonean Leone': 'SLE',
  'Somali Shilling': 'SOS',
  'Surinamese Dollar': 'SRD',
  'South Sudanese Pound': 'SSP',
  'São Tomé and Príncipe Dobra': 'STN',
  'Syrian Pound': 'SYP',
  'Eswatini Lilangeni': 'SZL',
  'Thai Baht': 'THB',
  'Tajikistani Somoni': 'TJS',
  'Turkmenistan Manat': 'TMT',
  'Tunisian Dinar': 'TND',
  'Tongan Paʻanga': 'TOP',
  'Turkish Lira': 'TRY',
  'Trinidad and Tobago Dollar': 'TTD',
  'Tuvaluan Dollar': 'TVD',
  'New Taiwan Dollar': 'TWD',
  'Tanzanian Shilling': 'TZS',
  'Ukrainian Hryvnia': 'UAH',
  'Ugandan Shilling': 'UGX',
  'United States Dollar': 'USD',
  'Uruguayan Peso': 'UYU',
  "Uzbekistani So'm": 'UZS',
  'Venezuelan Bolívar Soberano': 'VES',
  'Vietnamese Đồng': 'VND',
  'Vanuatu Vatu': 'VUV',
  'Samoan Tālā': 'WST',
  'Central African CFA Franc': 'XAF',
  'East Caribbean Dollar': 'XCD',
  'Special Drawing Rights': 'XDR',
  'West African CFA franc': 'XOF',
  'CFP Franc': 'XPF',
  'Yemeni Rial': 'YER',
  'South African Rand': 'ZAR',
  'Zambian Kwacha': 'ZMW',
  'Zimbabwean Dollar': 'ZWL'
};

console.log(currenciesObj["United States Dollar"]); 