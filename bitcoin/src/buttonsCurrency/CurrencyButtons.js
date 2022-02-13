import App from '../App';
import { bitcoinDataUsd, bitcoinDataRub } from '../apis/getBitcoinData';
// eslint-disable-next-line import/no-cycle
import root from '../../index';

const CurrencyButtons = () => {
  const container = document.createElement('div');
  container.classList.add('currency');

  const currencyHeader = document.createElement('p');
  currencyHeader.innerText = 'Specify currency:';

  const currencyButtonsDiv = document.createElement('div');
  currencyButtonsDiv.classList.add('currencyButtonsDiv');

  const usdButton = document.createElement('button');
  usdButton.innerText = 'USD';
  usdButton.classList.add('buttons');
  usdButton.onclick = async () => {
    if (document.getElementById('charts') != null) {
      root.removeChild(document.getElementById('charts'));
    }
    const app = await App(bitcoinDataUsd);

    root.append(app);
  };

  const rubButton = document.createElement('button');
  rubButton.innerText = 'RUB';
  rubButton.classList.add('buttons');
  rubButton.onclick = async () => {
    if (document.getElementById('charts') != null) {
      root.removeChild(document.getElementById('charts'));
    }
    const app = await App(bitcoinDataRub);

    root.append(app);
  };

  currencyButtonsDiv.append(usdButton, rubButton);

  container.append(currencyHeader, currencyButtonsDiv);

  return container;
};

export default CurrencyButtons;
