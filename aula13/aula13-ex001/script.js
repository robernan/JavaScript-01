//alert('ola!')
function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var dia = window.document.getElementById('dia')
var data =new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
var segundos = data.getSeconds()
var diaSem = data.getDay()


msg.innerHTML =`agora e exatamente 
<strong> ${hora} horas e ${minuto} minutos
</strong> !`

if ( hora >= 0 && hora < 12 ) {
    sauda.innerHTML='BOM DIA !'
    img.src = 'manha3.jpg'
    document.body.style.background ='#DFFD5E'
} 
else if ( hora >= 12 &&  hora < 18 ) {
    //BOA TARDE!
    document.bpdy.style.background='#E6C77A'
    img.src = 'tarde.jpg'
} 
else {
   
     document.body.style.background = '#61667A'
    img.src ='noite2.jpg'
}


switch(diaSem) {

    case 0:  
      dia.innerHTML =  'hoje e domingo'
        break
    case 1:
        dia.innerHTML = 'hoje e segunda-feira'
        break
    case 2:
        dia.innerHTML = 'hoje e terça-feira'
        break
    case 3:
        dia.innerHTML = 'hoje e quarta-feira'
        break
    case 4:
        dia.innerHTML =  'hoje e quinta-feira'
        break
    case 5:
        dia.innerHTML = 'hoje e sexta-feira' 
        break
    case 6:
        dia.innerHTML =   'hoje e sabado'
        break

    default:
            dia.innerHTML =   '[erro] dia invalido!'

    }
}