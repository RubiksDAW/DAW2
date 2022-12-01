
'use strict'
const botonFoto = document.getElementById('bttn-foto');
const boton_foto = document.getElementsByClassName('bttn-foto');
console.log(boton_foto);
const imagen = document.getElementById('imagen')
let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'djjnl6f14',
    uploadPreset: 'ml_default'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.value = result.info.secure_url;
        console.log(imagen);
    }
});

botonFoto.addEventListener('click', () => {
    widget_cloudinary.open();
}, false);