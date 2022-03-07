function hamburguesa () {
  var menu = document.getElementById ('btn_principal')
  if (menu.style.display == 'block') {
      menu.style.display = 'none'}
    else {
      menu.style.display = 'block'
    }
}

function contactoOver(elemento) {
    var cajaOver = document.getElementById (elemento)
  cajaOver.style.backgroundColor = '#9900ff'
}

function contactoOut(elemento) {
  var cajaOut = document.getElementById (elemento)
  cajaOut.style.backgroundColor = '#00b3b3' 
}