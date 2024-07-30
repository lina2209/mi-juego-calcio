const questions = [
    {
        question: "¿Qué es el calcio?",
        options: ["Un mineral esencial para el cuerpo", "Un tipo de vitamina", "Una proteína", "Una grasa"],
        correct: 0
    },
    {
        question: "¿Cuál es la principal función del calcio?",
        options: ["Fortalecer los huesos y dientes", "Mejorar la visión", "Aumentar la energía", "Regular el sueño"],
        correct: 0
    },
    // Agrega más preguntas aquí
];

let currentQuestion = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('quiz').style.display = 'none';
        document.getElementById('result').innerText = '¡Felicidades, has completado la trivia!';
        return;
    }
    const q = questions[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.innerText = q.options[index];
        option.setAttribute('data-index', index);
    });
}

function checkAnswer(element, selected) {
    const q = questions[currentQuestion];
    if (selected == q.correct) {
        alert('¡Correcto!');
    } else {
        alert('Incorrecto. La respuesta correcta es: ' + q.options[q.correct]);
    }
    currentQuestion++;
    loadQuestion();
}

window.onload = loadQuestion