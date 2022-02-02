import showToast from 'native-toast';

const Card = (props) =>{
    const container = document.createElement('div');
    container.classList.add('card');

    const logoNamePrice = document.createElement('div');
    logoNamePrice.classList.add('logoNamePrice');

    const img = document.createElement('img');
    img.src = props.src;

    const name = document.createElement('p');
    name.setAttribute('name', ' ');
    name.innerHTML = `<span> Name: ${props.name}</span> `;

    const priceButton = document.createElement('button');
    priceButton.innerText = 'Price';
    
    priceButton.onclick = () => priceMessage();

    const priceMessage = () => {  
        // alert( );    
        showToast({
        message: `Our price: ${props.price}`,
        position: 'center',
        timeout: 30000,
        type: 'message',
        closeOnClick: true,});
    };

    logoNamePrice.append(img, name, priceButton);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('cardInfoStyle');
    

    const cardHeader = document.createElement('span');
    cardHeader.innerHTML = `<p> Information about ${props.name}</p>`;

    const cardLocation = document.createElement('div');
    cardLocation.innerHTML = `<p>Availability: ${props.location}</p> `;

    const catchPhrase = document.createElement('div');
    catchPhrase.innerHTML = `<p>Catch-phrase: </p> ${props.catchPhrase}`;

    const museumPhrase = document.createElement('div');
    museumPhrase.innerHTML = `<p>Museum-phrase: </p> ${props.museumPhrase}`;

    cardInfo.append(cardHeader, cardLocation, catchPhrase, museumPhrase);

    container.append(logoNamePrice, cardInfo);
   
    return container;
}

export default Card;