const apiUrl = "https://platzi-avo.vercel.app/api/avo";

const createContainer = ()=>{
    const container = document.createElement('div');
    container.setAttribute('class', 'avocados');
    document.body.appendChild(container);
}

const createCard = (img, name, price) =>{
    const card = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h2');
    const avocadoPrice = document.createElement('p');
    
    card.setAttribute('class', 'card');
    image.setAttribute('src', img);
    
    title.textContent(name);
    avocadoPrice.textContent(price);
    
    card.append(image, title, avocadoPrice);
    document.body.appendChild(card);   
}

//conectarnos al server
window.fetch(apiUrl)
    //Procesar la respuesta
    .then((res)=>res.json())
    //crear un container de avocados
    // createContainer()

    //JSON -> DATA -> RENDERIZAR LA INFO
    .then((resJson)=>{
        resJson.data.forEach(({name, image, price}) => {
            //Crear una card con la imagen, titulo y precio
            createCard(image, name, price);
        });
    })