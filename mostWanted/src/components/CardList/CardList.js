import Card from "../Card/Card";

const CardList = (props) => {
    const container = document.createElement('div');

    container.classList.add('cardList');

    const cardElements = props.cards.map((card) => {
        return Card(card);
    });

    container.append(...cardElements);

    return container;
};
export default CardList;