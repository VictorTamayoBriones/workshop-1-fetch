const apiUrl = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app');

const createCard = (img, name, price, description, taste) =>{
    const card = document.createElement('div');
    const cardMain = document.createElement('div');
    const cardDesc = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const avocadoPrice = document.createElement('p');
    const describe = document.createElement('p');
    const avocadoTaste = document.createElement('p');

    card.setAttribute('class', 'card');
    cardDesc.setAttribute('class', 'desc');
    cardMain.setAttribute('class', 'cardMain');
    image.setAttribute('src', `https://platzi-avo.vercel.app/${img}`);
    title.textContent = name;
    avocadoPrice.textContent = formatPrice(price);
    describe.textContent = description
    avocadoTaste.textContent = `Taste: ${taste}`;

    card.append(cardMain, cardDesc);
    cardMain.append(image, title, avocadoPrice)
    cardDesc.append(description, avocadoTaste);

    appNode.appendChild(card);
}

const formatPrice = (price)=>{

    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);

    return newPrice;
}

//conectarnos al server
window.fetch(apiUrl)
    //Procesar la respuesta
    .then((res)=>res.json())
    
    //JSON -> DATA -> RENDERIZAR LA INFO
    .then((resJson)=>{
        resJson.data.forEach(({name, image, price, attributes:{description, taste}}) => {
            //Crear una card con la imagen, titulo y precio
            createCard(image, name, price, description, taste);
        });
    })