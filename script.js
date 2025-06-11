const quotes = [
    "Stay hungry, stay foolish.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is what happens when you're busy making other plans.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Believe you can and you're halfway there.",
    "The best way to predict the future is to create it.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You miss 100% of the shots you don't take.",
    "The only way to do great work is to love what you do.",
];



function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerText = quotes[randomIndex];
}
