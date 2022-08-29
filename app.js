const onoffBtn = document.querySelector('.onoff')
const lights = document.querySelectorAll('.light')
const intervalBtn = document.querySelector('.interval-button')
const input = document.querySelector('#input-interval')
let aux = 0;
const lightsOn = () => {
    // cor das bolinhas
    const color = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple']
    for (let i = 0; i < lights.length; i++) {
        let glow = document.querySelector('.light-'+i)
        lights[i].style.backgroundColor = color[i]
        glow.style.animation = 'glow-' + i + ' 3s infinite'
    }
}

onoffBtn.addEventListener('click', () => {
    const onoff = document.querySelector('.onoff-container')
    if (aux == 0) {
        onoff.style.justifyContent = "flex-end"
        for (let i = 0; i < lights.length; i++) {
            let glow = document.querySelector('.light-'+i)
            glow.style.animation = 'none'
            lights[i].style.backgroundColor = 'rgb(101, 101, 101)'
            onoffBtn.textContent = 'OFF'
        }
        input.value = ' '
        aux++
    } else {
        onoff.style.justifyContent = "flex-start"
        lightsOn()
        onoffBtn.textContent = 'ON'
        aux--
    }
})

intervalBtn.addEventListener('click', () => {
    if (aux == 0) {
        for (let i = 0; i < lights.length; i++) {
            let glow = document.querySelector('.light-'+i)
            glow.style.animation = 'glow-' + i + ' '+ input.value +'s infinite'
        }
    }
})

lightsOn()