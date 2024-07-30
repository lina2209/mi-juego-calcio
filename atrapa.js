const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

const player = {
    x: canvas.width / 2 - 25,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    color: 'blue'
};

let items = [];
const itemTypes = {
    calcium: { color: 'green', points: 10 },
    junk: { color: 'red', points: -5 }
};

let score = 0;
const itemSpeed = 2;
const itemFrequency = 1000; // 1 segundo
let lastItemTime = 0;

function drawPlayer() {
    context.fillStyle = player.color;
    context.fillRect(player.x, player.y, player.width, player.height);
}

function drawItems() {
    items.forEach(item => {
        context.fillStyle = itemTypes[item.type].color;
        context.fillRect(item.x, item.y, 30, 30);
    });
}

function updateItems() {
    const currentTime = Date.now();
    if (currentTime - lastItemTime > itemFrequency) {
        lastItemTime = currentTime;
        const type = Math.random() < 0.7 ? 'calcium' : 'junk'; // 70% calcio, 30% chatarra
        items.push({
            x: Math.random() * (canvas.width - 30),
            y: 0,
            type
        });
    }

    items.forEach(item => {
        item.y += itemSpeed;
    });

    items = items.filter(item => item.y <= canvas.height);
}

function checkCollisions() {
    items.forEach((item, index) => {
        // Depuración para verificar los límites
        console.log(`Item Bounds - x: ${item.x}, x+30: ${item.x + 30}, y: ${item.y}, y+30: ${item.y + 30}`);
        console.log(`Player Bounds - x: ${player.x}, x+${player.width}: ${player.x + player.width}, y: ${player.y}, y+${player.height}: ${player.y + player.height}`);

        // Comprobar colisión
        if (
            item.x < player.x + player.width &&
            item.x + 30 > player.x &&
            item.y < player.y + player.height &&
            item.y + 30 > player.y
        ) {
            console.log("Colisión detectada");
            score += itemTypes[item.type].points;
            items.splice(index, 1);
        }
    });
}

function drawScore() {
    context.fillStyle = 'black';
    context.font = '20px Arial';
    context.fillText(`Puntaje: ${score}`, 10, 20);
}

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawItems();
    updateItems();
    checkCollisions();
    drawScore();
    requestAnimationFrame(gameLoop);
}

// Manejador de eventos para mover al jugador
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' && player.x > 0) {
        player.x -= 10;
    } else if (event.key === 'ArrowRight' && player.x < canvas.width - player.width) {
        player.x += 10;
    }
});

// Llama a gameLoop para iniciar el juego
gameLoop();