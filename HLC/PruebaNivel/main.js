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
        image.style.height = "auto";
        image.style.marginTop = (screen.height / 2) + "px"
        image.style.marginBottom = (screen.height / 2) + "px"
        
        console.log(image.style.marginTop);
        

        console.log('Entro en el primero');

    } else {

        document.body.style.backgroundColor = "black";
        // image.style.width = width / height;
        image.style.width = height/width;
        image.style.height = screen.height + "px";

        image.style.display = "block"
        image.style.marginLeft = "auto"
        image.style.marginRight = "auto"
        console.log('Entro en el segundo');
    }


})


//Tener en cuenta la proporcion de la pantalla, respecto a la proporcion de la imagen. Proporcion = ancho/alto 
function randomSize() {

    image.style.width = (Math.random() * screen.width + 100) + 'px';
    image.style.height = (Math.random() * screen.height + 100) + 'px';
    console.log(image.style.width + " width");
    console.log(image.style.height + " height");
}

