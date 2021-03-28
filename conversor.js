
function currencyConverter() {
   
    var currencyTypeFrom = document.querySelector('.tipoMoeda').value;
    
    var currencyValueFrom = Number(document.querySelector('#moeda-atual').value);
   
    var currencyTypeTo = document.querySelector('.currency-type-to').value;
  
    if (currencyTypeFrom == "brl") {
      if (currencyTypeTo == "usd") {
        convertedCurrency = currencyValueFrom / 5.51;
      }
      else if (currencyTypeTo == "eur") {
        convertedCurrency = currencyValueFrom / 6.58;
      }
      else {
        convertedCurrency = currencyValueFrom;
      }
    }
    else if (currencyTypeFrom == "usd") {
      if (currencyTypeTo == "brl") {
        convertedCurrency = currencyValueFrom * 5.51;
      }
      else if (currencyTypeTo == "eur") {
        convertedCurrency = currencyValueFrom / 1.19;
      }
      else {
        convertedCurrency = currencyValueFrom;
      }
    }
    else {
      if (currencyTypeTo == "brl") {
        convertedCurrency = currencyValueFrom * 6.58;
      }
      else if (currencyTypeTo == "usd") {
        convertedCurrency = currencyValueFrom * 1.19;
      }
      else {
        convertedCurrency = currencyValueFrom;
      }
    }
  
    document.querySelector('#moeda-para').innerHTML = convertedCurrency.toFixed(2);
  };
  
  var convertedCurrency = 0;
  // Impressão do resultado da conversão para o usuário
  document.querySelector('#moeda-para').innerHTML = convertedCurrency.toFixed(2);
  // Declaração do botão Converter
  const converterBotton = document.querySelector('button');
  // Ativação da função Converter Moeda por meio do clique no botão
  converterBotton.onclick = currencyConverter;