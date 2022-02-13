// eslint-disable-next-line import/no-cycle
import CurrencyButtons from './src/buttonsCurrency/CurrencyButtons';

const root = document.getElementById('root');

const currencyButtons = CurrencyButtons();
root.prepend(currencyButtons);

// App().then((html) => root.append(html));

export default root;
