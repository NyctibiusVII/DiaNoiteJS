function carregar(){
    var msg = window.document.querySelector('div#msg')
    var imgH = window.document.querySelector('img#imgH')
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
}  