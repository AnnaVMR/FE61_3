import {seaResponse, fishResponse} from "../../../index";

const Header = () => {
    const container = document.createElement('div');
    container.classList.add('header');

    const textHeader = document.createElement('span');
    textHeader.innerText = 'Under the Water';

    const fishButton = document.createElement('button');

    const fishDiv = document.createElement('div')
    fishDiv.classList.add('btn');

    const span1 = document.createElement('span');

    const span2 = document.createElement('span');

    const span3 = document.createElement('span');

    const span4 = document.createElement('span');

    const textFish = document.createElement('p');
    textFish.innerHTML = 'Fish';

    fishDiv.append(span1, span2, span3, span4, textFish);

    fishButton.append(fishDiv);

    
    fishButton.onclick = () => fishResponse();
    

    const seaButton = document.createElement('button');

    const seaDiv = document.createElement('div');
    seaDiv.classList.add('btn');
    const span5 = document.createElement('span');

    const span6 = document.createElement('span');

    const span7 = document.createElement('span');

    const span8 = document.createElement('span');

    const textSea = document.createElement('p');
    textSea.innerHTML = 'Sea Creatures';

    seaDiv.append(span5, span6, span7, span8, textSea);

    seaButton.append(seaDiv);

    seaButton.onclick = () => seaResponse();
   
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttonDiv');
    buttonsContainer.append(fishButton, seaButton);

    container.append(textHeader, buttonsContainer);

    return container;
}

export default Header;