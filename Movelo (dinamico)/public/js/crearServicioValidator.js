window.addEventListener('load', function() {
 
    let formCrearServicio = document.querySelector('.formulario-servicio')
    let inputOrigen = document.querySelector('.origen')
    let inputDestino = document.querySelector('.destino')
    let inputDescripcion = document.querySelector('.descripcion')



    let ulErroresCrearServicio = document.querySelector('.erroresCrearServicio')

    formCrearServicio.addEventListener('submit', (e) => {
        e.preventDefault();

        let errores = []
        console.log(inputOrigen.value.length)

        if(inputOrigen.value.length <= 2) {
            inputOrigen.classList.remove('is-valid')
            inputOrigen.classList.add('is-invalid')
            errores.push('Debes introducir una ciudad de origen valida')
        } else {
            inputOrigen.classList.remove('is-invalid')
            inputOrigen.classList.add('is-valid')
        }

        if(inputDestino.value.length <= 2) {
            inputDestino.classList.remove('is-valid')
            inputDestino.classList.add('is-invalid')
            errores.push('Debes introducir una ciudad de destino valida')
        } else {
            inputDestino.classList.remove('is-invalid')
            inputDestino.classList.add('is-valid')
        }

        if(inputDescripcion.value.length <= 20) {
            inputDescripcion.classList.remove('is-valid')
            inputDescripcion.classList.add('is-invalid')
            errores.push('Descripción demasiado corta (20 caracteres mínimo)')
        } else {
            inputDescripcion.classList.remove('is-invalid')
            inputDescripcion.classList.add('is-valid')
        }

        ulErroresCrearServicio.innerHTML = ''
        if(errores.length > 0) {
            ulErroresCrearServicio.classList.add('alert-warning')
            for(let i = 0; i < errores.length; i++) {
                ulErroresCrearServicio.innerHTML += '<p>' + errores[i] + '</p>'
            }
        } else {
            formCrearServicio.submit()
        }


})
})

