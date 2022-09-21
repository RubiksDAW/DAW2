let boton = document.querySelector('#boton');
let image = document.querySelector('#img');

console.log(screen.availWidth);

boton.addEventListener('click', e => {

    e.preventDefault();

    let width = Number((image.style.width).replace('px', ''));
    let height = Number((image.style.height).replace('px', ''));

    if (width > height) {

        document.body.style.backgroundColor = "black";
        image.style.width = screen.width + "px";
        console.log(image.style.width);
        // 1/3 (screen.heigth)
        // image.style.height = 1080*(height/width) + "px";
        image.style.height = ((1/3)*(screen.height)) + "px"
        // image.style.marginTop = (screen.height / 2) + "px"
        image.style.marginTop = ((1/4)*(screen.height)) + "px"
        // image.style.marginBottom = (screen.height / 2) + "px"
        
        console.log(image.style.marginTop);

        console.log('Entro en el primero');

    } else {

        document.body.style.backgroundColor = "black";
        // image.style.width = width / height;
        image.style.width = ((1/3) * (screen.width)) + "px"
        image.style.height = screen.height + "px";
        console.log(screen.height);
        image.style.display = "block"
        image.style.marginLeft = "auto"
        image.style.marginRight = "auto"
        console.log('Entro en el segundo');
    }


})

function reset() {

    image.style.width = (Math.random() * screen.width + 100) + 'px';
    image.style.height = (Math.random() * screen.height + 100) + 'px';
    document.body.style.backgroundColor = "white";
    image.style.marginTop = 0;
    image.style.marginBottom = 0;
    image.style.marginLeft = 0;
    image.style.marginRight = 0;

}
//Tener en cuenta la proporcion de la pantalla, respecto a la proporcion de la imagen. Proporcion = ancho/alto 
function randomSize() {

    image.style.width = (Math.random() * screen.width + 100) + 'px';
    image.style.height = (Math.random() * screen.height + 100) + 'px';
    console.log(image.style.width + " width");
    console.log(image.style.height + " height");

}

