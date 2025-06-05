// inicializando variables
const container = document.getElementById('arena');
const rect = container.getBoundingClientRect();
const colors = ['red', 'blue', 'white', 'pink', 'purple', 'orange'];
const squares = [];
let animation;

// funcion para generar cuadros

function createSquares() {
    squares.length = 0;
    container.innerHTML = ""

    colors.forEach( color => {
        const sq = document.createElement('div');
        sq.className = 'square';
        sq.style.background = color;
        container.appendChild(sq)
        const square = sq.getBoundingClientRect();
        
        const x = Math.random() * (rect.width - square.width);
        const y = Math.random() * (rect.height - square.height);

        sq.style.top = `${y}px`
        sq.style.left = `${x}px`
        console.log(color + ": " + "y: " + y + ", " + "x: " + x)

        squares.push({
            sq,
            x: x,
            y: y,
            with: square.width,
            height: square.height,
            dx: (Math.random() * 4 + 1) * (Math.random() > 0.5 ? 1 : -1),
            dy: (Math.random() * 4 + 1) * (Math.random() > 0.5 ? 1 : -1)
        })
    })
}

function animate() {
    squares.forEach(sq => {
        sq.x += sq.dx
        sq.y += sq.dy

        if (sq.x == 0) {
            sq.dx *= 1 
        } else if ((sq.x - sq.width) > rect.width) {
            sq.x *= -1
        }

        if (sq.y == 0) {
            sq.y *= 1
        } else if ((sq.y - sq.height) > rect.height) {
            sq.y *= -1
        }
    })
}

function start() {
    createSquares();
}

function reset() {
}