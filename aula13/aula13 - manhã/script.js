
function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data =new Date()

var hora = data.getHours()

msg.innerHTML =`agora e exatamente <strong> ${hora} </strong> horas!`
}
if (hora >= 0 && hora < 12 ) {
    //'BOM DIA !'
    img.src = 'manha3.jpg'

} else if ( hora >= 12 &&  hora < 18 ) {
//BOA TARDE!
img.src ='tarde.jpg'
} else {
    //BOA NOITE !   
     document.body.style.background = '#e2cd9f'
    img.src ='noite.jpg'
}

