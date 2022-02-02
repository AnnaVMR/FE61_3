import CardList from "./CardList/CardList";
import Loader from "./Loader/Loader";
import getApiList from "../services/Api";

const loader = Loader();

const App = async (apiRequest, card) =>{
    console.log(apiRequest, loader.classList);

    const content = document.getElementById('content');

    content.append(loader);

    loader.classList.remove('hidden');
       
    try {
        content.lastChild.classlist?.add('hidden');

        const container = document.createElement('div');
    
            const cardList = CardList({
                
                cards: await getApiList(apiRequest)
    
            }, card);

        container.append(cardList);

        console.log(cardList);

        return container;

    } catch (error) {

        alert('There is no one alive');
        
        console.error(error);

    } finally {
   
        
        loader.classList.add('hidden');
        
        content.lastChild.classlist?.remove('hidden');
    }
}

export default App;