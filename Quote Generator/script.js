const quotes = [
{
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
},
{
    quote: "Success is not final, failure is not fatal.",
    author: "Winston Churchill"
},
{
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
},
{
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
},
{
    quote: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
}
];

function generateQuote(){

    let randomIndex =
    Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText =
    `"${quotes[randomIndex].quote}"`;

    document.getElementById("author").innerText =
    `- ${quotes[randomIndex].author}`;
}

window.onload = generateQuote;