const puzzle = document.getElementById('puzzle');
const pieces = [];
let emptyIndex = 15;

for (let i = 0; i < 15; i++) {
    const piece = document.createElement('div');
    piece.className = 'piece';
    piece.innerText = i + 1;
    piece.addEventListener('click', () => movePiece(i));
    pieces.push(piece);
    puzzle.appendChild(piece);
}

pieces.push(document.createElement('div'));
puzzle.appendChild(pieces[15]);

function movePiece(index) {
    if (index === emptyIndex - 1 || index === emptyIndex + 1 || index === emptyIndex - 4 || index === emptyIndex + 4) {
        puzzle.insertBefore(pieces[emptyIndex], pieces[index]);
        puzzle.insertBefore(pieces[index], pieces[emptyIndex]);
        [pieces[index], pieces[emptyIndex]] = [pieces[emptyIndex], pieces[index]];
        emptyIndex = index;
    }
}

function shuffle() {
    for (let i = 0; i < 100; i++) {
        const randomIndex = Math.floor(Math.random() * 15);
        movePiece(randomIndex);
    }
}

shuffle();