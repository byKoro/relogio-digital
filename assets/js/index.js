const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")
const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const ano = document.getElementById("ano")

const relogio = setInterval(function time(){
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    let day = data.getDate()
    let month = data.getMonth() + 1
    let year = data.getFullYear()
    
    if (hora < 10) {hora = '0' + hora}
    if (minuto < 10) {minuto = '0' + minuto}
    if (segundo < 10) {segundo = '0' + segundo}
    if (day < 10) {day = '0' + day}
    if (month < 10) {month = '0' + month}

    dia.textContent = day
    mes.textContent = month
    ano.textContent = year
    horas.textContent = hora
    minutos.textContent = minuto
    segundos.textContent = segundo 
}) 