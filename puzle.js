 const piezas = document.querySelectorAll('.pieza');
        const huecos = document.querySelectorAll('.hueco');
        const tablero = document.getElementById('tablero');

        let piezaSeleccionada = null;

        piezas.forEach(pieza => {
            pieza.addEventListener('dragstart', (e) => {
                piezaSeleccionada = pieza;
            });
        });