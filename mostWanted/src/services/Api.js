const getWantedPeople = async () => {
    const response = await fetch('https://api.fbi.gov/wanted/v1/list');

    const data = await response.json();

    return data.items.map((item) => {
        return{
            src: item.images[0].original,
            fullName: item.title,
            description: item.description,
            warning: item.warning_message,
        }
    });
};

export default getWantedPeople;