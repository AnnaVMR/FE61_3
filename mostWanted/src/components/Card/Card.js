const Card = (props) => {
    const container = document.createElement('div');
    container.classList.add('card');

    const containerImg = document.createElement('div');
    containerImg.classList.add('cardImg');

    const containerText = document.createElement('div');
    containerText.classList.add('cardText');

    const img = document.createElement ('img');
    img.src = props.src;

    const fullName = document.createElement('p');
    fullName.innerText = props.fullName;

    const warning = document.createElement('div');
    warning.innerText = props.warning;

    const description = document.createElement('p');
    description.innerText = props.description;


    containerImg.append(img, fullName);

    containerText.append(warning, description);

    container.append(containerImg, containerText);

    return container;

};

export default Card;