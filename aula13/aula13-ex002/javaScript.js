function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
   
    if (  fano.value.length == 0 || fano.value > ano)
      {   window.alert('[ERRO] verifique os dados e tente novamente!')
    }
      else{
       var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if( fsex[0].checked) {

            genero ='homem'
         if(idade >=0 && idade <10) {
                 //crianca
                 img.setAttribute('src','fotobebeM.jpg')
            }
           else if(idade < 21){
           //jovem
           if(idade > 50 ){
            //idoso
           }
          } 
          
         if (fsex [1].checked) {
            genero = 'munher'
       if(idade >= 0 && idade <10) {
          //  img.setAttribute('src','fotobebeF.jpg')
        }
      else (idade < 21) 
        
      

      if (idade > 50 ){
     //idoso
      
      }  
    }
      res.style.textAlign='center'
      res.innerHTML = `<strong> detectamos ${genero} com ${idade} anos! </strong>`
    res.appendChild(img)
    }
    
   }
  }