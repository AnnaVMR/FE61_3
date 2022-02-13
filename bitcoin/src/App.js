import getBitcoinData from './apis/getBitcoinData';
import LineChart from './components/LineChart';

const App = async (query) => {
  const container = document.createElement('div');
  container.id = 'charts';

  const data = await getBitcoinData(query);

  const lineChart = LineChart({ data: data.prices });

  container.append(lineChart);

  return container;
};

export default App;
