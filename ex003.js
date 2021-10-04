var agora = new Date()
var diasem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
var dia = agora.getDate()
console.log('')
console.log('---------------------------------------------------------')
console.log(`Olá, cliente dos meus servisos!`)
switch(diasem) {
    case 0:
        console.log(`Hoje é Domingo dia ${dia} e são ${hora}:${min} horas.`)
        break
    case 1:
        console.log(`Hoje é Segunda-Feira dia ${dia} e são ${hora}:${min} horas.`)
        break
    case 2:
        console.log(`Hoje é Terça-Feira dia ${dia} e são ${hora}:${min} horas.`)
        break
    case 3:
        console.log(`Hoje é Quarta-Feira dia ${dia} e são ${hora}:${min} horas.`)
        break
    case 4:
        console.log(`Hoje é Quinta-Feira dia ${dia} e são ${hora}:${min} horas.`)
        break
    case 5:
        console.log(`]Hoje é Sexta-Feira dia ${dia} e são ${hora}:${min} horas.`)
        break
    case 6:
        console.log(`Hoje é Sábado dia ${dia} e são ${hora}:${min} horas.`)
        break
    default:
        console.log('ERROR ID 10 T')
        break

}

if(hora >= 20 && hora >= 23){
    console.log('Tenha uma boa noite!')
    console.log('---------------------------------------------------------')
}else if(hora >= 12){
    console.log('Tenha uma boa tarde!')
    console.log('---------------------------------------------------------')
}else if(hora >=6 && hora < 12){
    console.log('Tenha um bom dia!')
    console.log('---------------------------------------------------------')
}else{
    console.log('Tenha uma boa madrugada!')
    console.log('---------------------------------------------------------')
}
