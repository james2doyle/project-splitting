const moneyFormat = function (number, currency = 'USD', language = 'en-US') {
  const { lang } = navigator || { language };

  return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(number);
};

export default moneyFormat;
