const getApiList = async (apiRequest) => {
    console.log(apiRequest);
    const response = await fetch(apiRequest);
    console.log(response);
    const data = await response.json();
    console.log(data);

    return Object.values(data).map((item) => {
        return{
            src: item.image_uri,
            name: item.name['name-USen'],
            catchPhrase: item['catch-phrase'],
            museumPhrase: item['museum-phrase'],
            location: item.availability.location ? item.availability.location : ' ',
            price: item.price,
        }
    });

};


export default getApiList;

export const seaCreaturesApi = 'http://acnhapi.com/v1/sea/';
export const fishApi = 'http://acnhapi.com/v1/fish/';