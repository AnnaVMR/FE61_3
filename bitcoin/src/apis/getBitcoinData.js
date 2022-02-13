import axios from 'axios';

const getBitcoinData = async (query) => {
  const response = await axios.get(query);

  return response.data;
};

export default getBitcoinData;

export const bitcoinDataUsd = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=usd&days=1&interval=hourly';
export const bitcoinDataRub = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?id=bitcoin&vs_currency=rub&days=1&interval=hourly';
