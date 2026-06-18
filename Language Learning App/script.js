const flashcards = [
    {word:"Hello", translation:"नमस्ते"},
    {word:"Thank You", translation:"धन्यवाद"},
    {word:"Good Morning", translation:"सुप्रभात"},
    {word:"Water", translation:"पानी"},
    {word:"Book", translation:"किताब"}
];

let currentCard = 0;
let score = 0;

function showCard(){
    document.getElementById("word").innerText =
    flashcards[currentCard].word;

    document.getElementById("translation").innerText =
    flashcards[currentCard].translation;
}

function nextCard(){
    currentCard =
    (currentCard + 1) % flashcards.length;

    showCard();
}

function prevCard(){
    currentCard =
    (currentCard - 1 + flashcards.length)
    % flashcards.length;

    showCard();
}

function speakWord(){

    let speech =
    new SpeechSynthesisUtterance(
        flashcards[currentCard].word
    );

    speechSynthesis.speak(speech);
}

function loadQuiz(){

    document.getElementById("quizQuestion")
    .innerText =
    "Translate: " +
    flashcards[currentCard].word;
}

function checkAnswer(){

    let answer =
    document.getElementById("answer")
    .value.trim();

    if(answer === flashcards[currentCard].translation){

        score++;

        document.getElementById("result")
        .innerText = "Correct!";
    }
    else{

        document.getElementById("result")
        .innerText =
        "Wrong! Answer: " +
        flashcards[currentCard].translation;
    }

    document.getElementById("score")
    .innerText = score;

    localStorage.setItem("score", score);

    nextCard();
    loadQuiz();

    document.getElementById("answer").value="";
}

score =
parseInt(localStorage.getItem("score")) || 0;

document.getElementById("score")
.innerText = score;

showCard();
loadQuiz();