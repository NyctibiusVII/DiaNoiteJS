function carregar(){
    var msg = window.document.querySelector('div#msg')
    var imgH = window.document.querySelector('img#imgH')
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    //var hora = 13 //para teste
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

    if(hora >= 6 && hora < 12){
        //dia
      document.body.style.background = '#fff56a'
      imgH.src = 'img/manha.jpg'
    }else if(hora >= 12 && hora < 18){
        //tarde
      document.body.style.background = '#ff9e1fda'
      imgH.src = 'img/tarde.jpg'    
    }else if(hora >= 18 && hora < 23){
        //noite
      document.body.style.background = '#1c305a'
      imgH.src = 'img/noite.jpg'    
    }else{
        //madrugada
      document.body.style.background = '#000714'
      imgH.src = 'img/madrugada.jpg' 
    }
}  