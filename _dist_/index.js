const apiUrl = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.querySelector('#app');

const createCard = (img, name, price) =>{
    const card = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const avocadoPrice = document.createElement('p');
    
    card.setAttribute('class', 'card');
    image.setAttribute('src', `https://platzi-avo.vercel.app/${img}`);
    title.textContent = name;
    avocadoPrice.textContent = price;

    card.append(image, title, avocadoPrice);
    appNode.appendChild(card);
}

//conectarnos al server
window.fetch(apiUrl)
    //Procesar la respuesta
    .then((res)=>res.json())
    
    //JSON -> DATA -> RENDERIZAR LA INFO
    .then((resJson)=>{
        resJson.data.forEach(({name, image, price}) => {
            //Crear una card con la imagen, titulo y precio
            createCard(image, name, price);
        });
    })