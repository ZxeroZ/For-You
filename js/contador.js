function updateCountdown() {
    const now = new Date(); // Fecha y hora actual
    const year = now.getFullYear();
    const month = now.getMonth(); // Mes actual (0-indexado)
    const targetDate = new Date(year, month, 21); // 21 del mes actual

    if (now > targetDate) {
        // Si la fecha actual es después del 21 del mes, ajusta la fecha al próximo mes
        targetDate.setMonth(month + 1);
    }

    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${days} días`;
    document.getElementById('hours').textContent = `${hours} horas`;
    document.getElementById('minutes').textContent = `${minutes} minutos`;
    document.getElementById('seconds').textContent = `${seconds} segundos`;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Inicializar el contador al cargar la página
updateCountdown();


document.addEventListener('DOMContentLoaded', function() {
    const sky = document.getElementById('sky');
    const numStars = 200; // Puedes ajustar el número de estrellas según desees

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Posicionar estrellas aleatoriamente en toda la pantalla
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Cambiar tamaño y opacidad para un efecto más realista
        star.style.width = `${Math.random() * 3}px`; // Estrellas de entre 1px y 3px
        star.style.height = star.style.width; // Hacer que el alto y ancho sean iguales
        star.style.opacity = Math.random(); // Estrellas con diferentes niveles de opacidad

        sky.appendChild(star);
    }
});
