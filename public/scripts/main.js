window.onload = setInterval(dataHMS, 1000)               //###### CADA 1 SEGUNDO ######

function dataSM() {
  var semanaH = window.document.querySelector('span#semanaH')//dia da semana

  setTimeout(function(){
  var data = new Date()
  var sm = data.getDay()                                 //dia da semana

    switch (sm) {
      case 7:
        semanaH.innerHTML = "Domingo"
        break;
      case 6:
        semanaH.innerHTML = "Sábado"
        break;
      case 5:
        semanaH.innerHTML = "Sexta"
        break;
      case 4:
        semanaH.innerHTML = "Quinta"
        break;
      case 3:
        semanaH.innerHTML = "Quarta"
        break;
      case 2:
        semanaH.innerHTML = "Terça"
        break;
      case 1:
        semanaH.innerHTML = "Segunda"
        break;
      default:
        semanaH.innerHTML = "Entrada de dados do dia da semana errada, \n recarregue a pagina por gentileza :)"
        break;
    }                                                   //passando o dia da semana como parâmetro global
  }, 1000);                                             //###### CADA 1 SEGUNDO ######
  }

function dataHMS() {
  var data = new Date()
  var h = data.getHours()
  var m = data.getMinutes()
  var s = data.getSeconds()
  //var hora = 13                                       //para teste

  var msg  = window.document.querySelector('div#msgH')
  msg.innerHTML = `Agora são ${h} horas, ${m} minutos e ${s} segundos`

  if (h == 23 && m == 59 && s == 59) {                  //###### CADA 1 DIA ######
    dataSM()
  }
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
  //for (let oneID = 1; oneID >= 1; oneID--) {
    //console.log(`${oneID}º Reload inicial concluído`)

    //para rodar 1x no inicio do código !important
    reloadBackground(hr)
    dataSM()
  //}
}

function reloadBackground(hora){
  //console.log('atualizou o background')
  var mtnmH = window.document.querySelector('span#manhaTardeNoiteMadrugadaH')// manhã tarde noite ou madrugada
  var imgH = window.document.querySelector('img#imgH')  //imagem

  if(hora >= 6 && hora < 12){
    //document.body.style.background = '#fff56a'          //dia
    mtnmH.innerHTML = 'Manhã'
    imgH.src = 'images/manha.jpg'
  }else if(hora >= 12 && hora < 18){
    //document.body.style.background = '#ff9e1fda'        //tarde
    mtnmH.innerHTML = 'Tarde'
    imgH.src = 'images/tarde.jpg'
  }else if(hora >= 18 && hora < 23){
    //document.body.style.background = '#1c305a'          //noite
    mtnmH.innerHTML = 'Noite'
    imgH.src = 'images/noite.jpg'
  }else{
    //document.body.style.background = '#000714'          //madrugada
    mtnmH.innerHTML = 'Madrugada'
    imgH.src = 'images/madrugada.jpg'
  }
}