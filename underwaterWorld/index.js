import Header from "./src/components/Header/Header";
import App from "./src/components/App";
import { fishApi, seaCreaturesApi} from "./src/services/Api";
import Card from "./src/components/Card/Card";


const content = document.getElementById('content');
const headerContent = document.getElementById('headerContent');
const apiContainer = document.getElementById('apiContainer');

const header = Header();
headerContent.prepend(header);

let seaFunctionList = {};
let fishFunctionList = {};

export const seaResponse = async () =>{ 
    if (apiContainer.hasChildNodes()){
        apiContainer.removeChild(apiContainer.childNodes[0]);
    }
    seaFunctionList = await App(seaCreaturesApi, Card);
    apiContainer.append(seaFunctionList);
}

export const fishResponse = async () => {
    if (apiContainer.hasChildNodes()){
        apiContainer.removeChild(apiContainer.childNodes[0]);
    }
    fishFunctionList = await App(fishApi, Card);
    apiContainer.append(fishFunctionList);
}
content.append(apiContainer);




