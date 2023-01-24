const hor = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')
const mili = document.getElementById('milisegudos')

const btnStart = document.getElementById('start')
const btnStop = document.getElementById('stop')
const btnResetar = document.getElementById('reset')


//guardar valores
let startTimer
let ms = "00"
let sg = "00"
let mi = "00"
let hr = "00"


// função para disparar o timer
function start() {
    startTimer = setInterval(function () {
        ms++
        if (ms < 10) {
            ms = "0" + ms
        }
        // logica de milisegundos > segundos
        if (ms === 100) {
            sg++

            if (sg < 10) {
                sg = "0" + sg
            }

            ms = 0
        }
        // logica de segundos > minutos
        if (sg === 60) {
            mi++

            if (mi < 10) {
                mi = "0" + mi
            }

            sg = 0
        }
        // logica de minutos > horar
        if (mi === 60) {
            hr++
            if (hr < 10) {
                hr = "0" + hr

            }

            mi = 0
        }


        btnStart.classList.add("ativo") // ativar botão start

        atualizaValor()
    }, 10)
}
// função parar timer
function stop() {
    clearInterval(startTimer) // "clearInterval" limpa o setInterval(nome do setInterval)
    btnStop.classList.add("ativo") // ativa o botão "Stop"

}
// função resetar timer 
function reset() {
    clearInterval(startTimer)
    ms = "00"
    sg = "00"
    mi = "00"
    hr = "00"

    atualizaValor()
    btnStart.classList.remove("ativo")
    btnStop.classList.remove("ativo")
}



// função para atualizar valor do cronômetro
function atualizaValor() {
    mili.innerHTML = ms
    seg.innerHTML = sg
    min.innerHTML = mi
    hor.innerHTML = hr
}



// adicionar eventos aos botões ("nome do evento" , função)
btnStart.addEventListener("click", start)
btnStop.addEventListener("click", stop)
btnResetar.addEventListener("click", reset)



