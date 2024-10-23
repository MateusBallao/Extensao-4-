const quizzes = {
    matematica: [
        { question: "Qual é o valor de 5 + 3 x 2?", options: ["16", "11", "13", "21"], answer: "11" },
        { question: "Qual é a fórmula para a área de um triângulo?", options: ["A = b x h", "A = (b x h) / 2", "A = b + h", "A = 2 x (b + h)"], answer: "A = (b x h) / 2" },
        { question: "Qual é o valor de x na equação 2x - 4 = 10?", options: ["7", "6", "5", "8"], answer: "7" },
        { question: "Qual é o próximo número na sequência: 2, 4, 8, 16, ...?", options: ["24", "30", "32", "40"], answer: "32" },
        { question: "Qual é a raiz quadrada de 144?", options: ["12", "14", "16", "18"], answer: "12" },
        { question: "O que é um número primo?", options: ["Um número que só é divisível por ele mesmo e 1", "Um número que pode ser dividido por 2", "Um número que tem apenas dois divisores", "Um número que é múltiplo de 10"], answer: "Um número que só é divisível por ele mesmo e 1" },
        { question: "Qual é a área de um círculo com raio de 7 cm? (Use π ≈ 3,14)", options: ["100 cm²", "154 cm²", "138,56 cm²", "153,86 cm²"], answer: "153,86 cm²" },
        { question: "Qual é a soma dos ângulos internos de um triângulo?", options: ["90°", "180°", "360°", "270°"], answer: "180°" },
        { question: "Qual é o valor de 8! (fatorial de 8)?", options: ["720", "5040", "40320", "362880"], answer: "40320" },
        { question: "O que é um ângulo reto?", options: ["Um ângulo que mede 180°", "Um ângulo que mede 60°", "Um ângulo que mede 45°", "Um ângulo que mede 90°"], answer: "Um ângulo que mede 90°" },
    ],
    historia: [
        { question: "Quem foi o primeiro presidente dos Estados Unidos?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
        { question: "Em que ano começou a Revolução Francesa?", options: ["1776", "1804", "1812", "1789"], answer: "1789" },
        { question: "Qual foi a principal causa da Primeira Guerra Mundial?", options: ["Economia", "Nacionalismo", "Religião", "Colonização"], answer: "Nacionalismo" },
        { question: "Quem foi o líder do Império Mongol no século XIII?", options: ["Alexandre, o Grande", "Attila", "Kublai Khan", "Genghis Khan"], answer: "Genghis Khan" },
        { question: "Qual foi o evento que marcou o fim da Idade Média e o início da Idade Moderna?", options: ["A descoberta da América", "A queda do Império Romano", "A Revolução Industrial", "A invenção da imprensa"], answer: "A descoberta da América" },
        { question: "Quem foi o imperador romano que legalizou o cristianismo?", options: ["Nero", "Augusto", "Júlio César", "Constantino"], answer: "Constantino" },
        { question: "Qual foi a principal rota comercial que ligava a Europa à Ásia durante a Idade Média?", options: ["Rota do Ouro", "Rota da Seda", "Rota do Especiarias", "Rota do Mar do Norte"], answer: "Rota da Seda" },
        { question: "Qual foi o evento histórico que ocorreu em 1969 e marcou um grande avanço na exploração espacial?", options: ["A primeira viagem ao espaço", "O lançamento do satélite Sputnik", "A chegada do homem à Lua", "A missão Apollo 13"], answer: "A chegada do homem à Lua" },
        { question: "Quem foi o líder sul-africano que lutou contra o apartheid e se tornou presidente?", options: ["Desmond Tutu", "Frederik de Klerk", "Steve Biko", "Nelson Mandela"], answer: "Nelson Mandela" },
        { question: "Qual foi a principal consequência da Revolução Industrial para a sociedade?", options: ["Declínio das universidades", "Urbanização", "Aumento do feudalismo", "Queda dos impérios coloniais"], answer: "Urbanização" },
    ],
    ciencias: [
        { question: "Qual é a unidade básica da vida?", options: ["Átomo", "Célula", "Molécula", "Organismo"], answer: "Célula" },
        { question: "Qual é o principal gás responsável pelo efeito estufa?", options: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Metano"], answer: "Dióxido de carbono" },
        { question: "Qual é o processo pelo qual as plantas produzem seu alimento?", options: ["Respiração", "Fotossíntese", "Digestão", "Osmose"], answer: "Fotossíntese" },
        { question: "Qual é o órgão responsável pela produção de insulina no corpo humano?", options: ["Coração", "Fígado", "Pâncreas", "Rim"], answer: "Pâncreas" },
        { question: "Qual é a fórmula da água?", options: ["CO₂", "O₂", "H₂O", "NaCl"], answer: "H₂O" },
        { question: "Qual é a camada mais externa da Terra?", options: ["Crosta", "Manto", "Núcleo", "Astenosfera"], answer: "Crosta" },
        { question: "Qual é a principal função do sistema circulatório?", options: ["Transportar oxigênio e nutrientes", "Regular a temperatura", "Produzir hormônios", "Filtrar resíduos"], answer: "Transportar oxigênio e nutrientes" },
        { question: "Qual é a diferença entre um vírus e uma bactéria?", options: ["Vírus são mais complexos que bactérias", "Bactérias têm estrutura celular, vírus não", "Vírus são multicelulares, bactérias são unicelulares", "Bactérias são causadoras de doenças, vírus não"], answer: "Bactérias têm estrutura celular, vírus não" },
        { question: "Qual é a partícula subatômica com carga positiva?", options: ["Próton", "Elétron", "Neutrão", "Nêutron"], answer: "Próton" },
        { question: "Qual é o processo pelo qual a água se transforma em vapor?", options: ["Condensação", "Solidificação", "Sublimação", "Evaporação"], answer: "Evaporação" },
    ],
    geografia: [
        { question: "Qual é o maior oceano do mundo?", options: ["Oceano Atlântico", "Oceano Pacífico", "Oceano Índico", "Oceano Ártico"], answer: "Oceano Pacífico" },
        { question: "Qual é o ponto mais alto da Terra?", options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Aconcágua"], answer: "Monte Everest" },
        { question: "Qual é o maior deserto do mundo?", options: ["Deserto do Saara", "Deserto de Gobi", "Deserto de Atacama", "Deserto da Antártica"], answer: "Deserto da Antártica" },
        { question: "Em que continente está localizado o Rio Amazonas?", options: ["Ásia", "Ásia", "América do Sul", "Europa"], answer: "América do Sul" },
        { question: "Qual país é conhecido como o 'País do Sol Nascente'?", options: ["China", "Japão", "Coreia do Sul", "Índia"], answer: "Japão" },
        { question: "Qual é o maior país em termos de área geográfica?", options: ["Estados Unidos", "China", "Rússia", "Brasil"], answer: "Rússia" },
        { question: "Qual cidade é conhecida como a 'Cidade Luz'?", options: ["Londres", "Paris", "Nova York", "Roma"], answer: "Paris" },
        { question: "Qual é o rio que atravessa o Egito?", options: ["Rio Nilo", "Rio Amazonas", "Rio Mississippi", "Rio Yangtze"], answer: "Rio Nilo" },
        { question: "Qual é o clima predominante na região da Antártida?", options: ["Tropical", "Ártico", "Desértico", "Temperado"], answer: "Ártico" },
        { question: "Qual é a capital da Austrália?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
    ],
    literatura: [
        { question: "Quem escreveu 'Dom Quixote'?", options: ["Miguel de Cervantes","Gabriel García Márquez",  "Julio Cortázar", "Jorge Luis Borges"], answer: "Miguel de Cervantes" },
        { question: "Qual é o título do famoso romance de Jane Austen que fala sobre o orgulho e o preconceito?", options: ["Emma", "Orgulho e Preconceito", "Mansfield Park", "Persuasão"], answer: "Orgulho e Preconceito" },
        { question: "Quem é o autor de '1984' e 'A Revolução dos Bichos'?", options: ["Aldous Huxley",  "H.G. Wells", "Ray Bradbury", "George Orwell"], answer: "George Orwell" },
        { question: "Qual é o nome do autor que criou a série de livros sobre Harry Potter?", options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Philip Pullman"], answer: "J.K. Rowling" },
        { question: "Qual obra é considerada a principal obra de William Shakespeare?", options: ["Romeu e Julieta", "Macbeth", "Hamlet", "Otelo"], answer: "Hamlet" },
        { question: "Quem escreveu 'O Senhor dos Anéis'?", options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "J.D. Salinger"], answer: "J.R.R. Tolkien" },
        { question: "Qual é a principal temática do romance 'Moby Dick'?", options: ["A busca por uma grande paixão", "A luta entre o homem e a natureza", "A política e o poder", "A guerra e a paz"], answer: "A luta entre o homem e a natureza" },
        { question: "Quem é o autor da obra 'O Pequeno Príncipe'?", options: ["Antoine de Saint-Exupéry", "Jules Verne", "Charles Dickens", "Victor Hugo"], answer: "Antoine de Saint-Exupéry" },
        { question: "Qual é o título da obra de Gabriel García Márquez que ganhou o Prêmio Nobel de Literatura?", options: ["Crônica de uma Morte Anunciada", "Cem Anos de Solidão", "O Amor nos Tempos do Cólera", "O General em Seu Labirinto"], answer: "Cem Anos de Solidão" },
        { question: "Qual é o nome do personagem principal da obra 'O Grande Gatsby'?", options: ["Jay Gatsby", "Tom Buchanan", "Nick Carraway", "Daisy Buchanan"], answer: "Jay Gatsby" },
    ]
};

let currentQuestionIndex = 0;

function startQuiz(subject) {
    currentSubject = subject;
    const quizContainer = document.getElementById('quiz-container');
    const subjectSelection = document.getElementById('subject-selection');
    const quizQuestions = document.getElementById('quiz-questions');
    
    subjectSelection.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    // Clear previous questions
    quizQuestions.innerHTML = '';

    // Generate questions for selected subject
    quizzes[subject].forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <input type="radio" name="q${index}" value="${option}" id="q${index}o${i}">
                <label for="q${index}o${i}">${option}</label><br>
            `).join('')}
        `;
        quizQuestions.appendChild(questionDiv);
    });

    updateProgress();
    displayCurrentQuestion();

    const submitButton = document.getElementById('submit-button');
    submitButton.onclick = () => submitQuiz(currentSubject);

    document.getElementById('prev-button').onclick = prevQuestion;
    document.getElementById('next-button').onclick = nextQuestion;
}

function updateProgress() {
    const totalQuestions = quizzes[currentSubject].length;
    const progress = (currentQuestionIndex / totalQuestions) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
    document.getElementById('current-question').innerText = currentQuestionIndex + 1;
    document.getElementById('total-questions').innerText = totalQuestions;

    document.getElementById('prev-button').disabled = currentQuestionIndex === 0;
    document.getElementById('next-button').disabled = currentQuestionIndex === totalQuestions - 1;
}

function nextQuestion() {
    const totalQuestions = quizzes[currentSubject].length;
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        updateProgress();
        displayCurrentQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateProgress();
        displayCurrentQuestion();
    }
}

function displayCurrentQuestion() {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        question.style.display = index === currentQuestionIndex ? 'block' : 'none';
    });

    const submitButton = document.getElementById('submit-button');
    submitButton.style.display = currentQuestionIndex === quizzes[currentSubject].length - 1 ? 'block' : 'none';
}

function submitQuiz(subject) {
    let score = 0;
    const userAnswers = {};

    quizzes[subject].forEach((q, qIndex) => {
        const selectedOption = document.querySelector(`input[name="q${qIndex}"]:checked`);
        if (selectedOption) {
            userAnswers[qIndex] = selectedOption.value;
        } else {
            userAnswers[qIndex] = null; // No answer selected
        }
    });

    const result = document.getElementById('result');
    let correctAnswers = 0;
    let incorrectAnswers = {};

    quizzes[subject].forEach((q, qIndex) => {
        const selectedOption = document.querySelector(`input[name="q${qIndex}"]:checked`);

        if (userAnswers[qIndex] === q.answer) {
            correctAnswers++;
        } else {
            incorrectAnswers[qIndex] = {
                question: q.question,
                selected: userAnswers[qIndex],
                correct: q.answer
            };
        }
    });

    result.innerHTML = `<p>Você acertou ${correctAnswers} de ${quizzes[subject].length} perguntas.</p>`;
    result.innerHTML += '<h3>Respostas Incorretas:</h3>';

    Object.keys(incorrectAnswers).forEach(qIndex => {
        const incorrect = incorrectAnswers[qIndex];
        result.innerHTML += `
            <p>${incorrect.question}</p>
            <ul>
                <li><strong>Resposta correta:</strong> ${incorrect.correct}</li>
                <li><strong>Sua resposta:</strong> ${incorrect.selected}</li>
            </ul>
        `;
    });
}
