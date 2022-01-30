const Loader = () => {
    const container = document.createElement('div');
    container.classList.add('loader', 'hidden'); 

    const span1 = document.createElement('span');

    const span2 = document.createElement('span');

    const span3 = document.createElement('span');

    const span4 = document.createElement('span');

    const textLoading = document.createElement('p');
    textLoading.innerHTML = 'Loading...';

    container.append(span1, span2, span3, span4, textLoading);

    return container;
};

export default Loader;