'Use strict';

const texto =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis erat at metus imperdiet mattis vitae a massa. Nullam sit amet nisl fermentum, congue quam sed, posuere quam. In non volutpat orci. Duis arcu tortor, eleifend porta nunc eget, iaculis vestibulum orci. Nam fringilla tincidunt tellus, non rutrum dolor fringilla ac.  Suspendisse potenti. Duis laoreet euismod nunc, non lobortis mauris tempus quis. Sed quis elementum felis, nec porta leo. Quisque quis ante quis metus rhoncus tristique. Integer viverra enim nec ex feugiat auctor. Vestibulum molestie metus eu nibh vulputate semper  Proin vestibulum luctus lectus. Aliquam accumsan ex in tortor efficitur accumsan. Praesent sed leo sapien. Donec at libero tincidunt, pretium elit ut, cursus sapien. Proin ac nibh aliquam, ultrices diam sagittis, sagittis ante. Vestibulum viverra molestie enim non sodales. Pellentesque sit amet blandit orci.  Cras a elementum mi, tempus bibendum velit. Quisque posuere purus eget ex consequat vehicula. Aliquam purus arcu, aliquam ac lectus vel, porta sodales lacus. Fusce eu diam sit amet felis dapibus consequat. Ut ut pellentesque dui. Suspendisse eget dolor ullamcorper, facilisis sapien id, sodales massa. Aliquam erat volutpat. Nam iaculis vehicula justo, vel ultricies tellus dignissim nec. Quisque a mi lacus. Mauris fermentum erat sit amet sem porta dignissim. Curabitur iaculis vitae turpis fringilla finibus. Fusce mollis ullamcorper neque, ac luctus dolor sodales eget.';

// Espacificamos cual es el caracter a partir del cual debemos dividir nuestra cadena de texto, en este caso el caracter es un 
// espacio en blanco.

const espacio = " "

const arr = texto.split(espacio)

// Una vez recogido el array y dividido por paralabras procedemos a ordenarlo con el metodo sort().
// Hacemos uso de una función flecha para pasar dos valores y que se devuelva el menor para la ordenación.
// Si quisieramos ordenarlos de mayor a menor seria b.lenght - a.length

arr.sort((a,b) => a.length - b.length)

console.log(arr)