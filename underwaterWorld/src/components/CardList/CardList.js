import Card from '../Card/Card';

const CardList = (props) =>{
    const container = document.createElement('div');

    container.classList.add('cardList');

    const cardItems = props.cards.map((item) => {
        return Card(item);
    });

    container.append(...cardItems);

    return container;
};

export default CardList;
