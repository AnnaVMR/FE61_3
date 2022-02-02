import CardList from './CardList/CardList.js';
import getWantedPeople from '../services/Api';

const App = async () => {
    const container = document.createElement('div');

    container.classList.add('wrapper');
   
    const cardList = CardList({
        cards: await getWantedPeople(),
    });

    container.append(cardList);
    
    
    return container;
};

export default App;