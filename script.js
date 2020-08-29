window.onload = setInterval(dataHMS, 1000)

function dataHMS() {
  var data = new Date()
  var h = data.getHours()
  var m = data.getMinutes()
  var s = data.getSeconds()
  //var hora = 13                                       //para teste

  var msg  = window.document.querySelector('div#msg')
  msg.innerHTML = `Agora são ${h} horas, ${m} minutos e ${s} segundos`

  if (m == 59 && s == 59) {                             //###### CADA 1 HORA ######
    reloadBackground(h)                                 //passando a hora como parâmetro ao executar a function reloadBackground
  }
  /*if (seg == 59) {                                    //###### CADA 1 MINUTO ######
    reloadBackground()
    //window.location.reload(1)
  }*/

  return h                                              //passando a hora como parâmetro global
}

var hr = dataHMS()                                      //o return da function dataHMS é guardada
oneX(hr)                                                //passando a hora como parâmetro ao executar a function oneX
function oneX(hr){
  for (let oneRB = 1; oneRB >= 1; oneRB--) {
    console.log(`${oneRB}º Reload inicial concluído`)
    reloadBackground(hr)                                //para rodar 1x no inicio do código !important
  }
}

function reloadBackground(hora){
  //console.log('atualizou o background')
  var imgH = window.document.querySelector('img#imgH')
  if(hora >= 6 && hora < 12){  
    document.body.style.background = '#fff56a'          //dia
    imgH.src = 'img/manha.jpg'
  }else if(hora >= 12 && hora < 18){
    document.body.style.background = '#ff9e1fda'        //tarde
    imgH.src = 'img/tarde.jpg'    
  }else if(hora >= 18 && hora < 23){
    document.body.style.background = '#1c305a'          //noite
    imgH.src = 'img/noite.jpg'    
  }else{ 
    document.body.style.background = '#000714'          //madrugada
    imgH.src = 'img/madrugada.jpg' 
  }
}