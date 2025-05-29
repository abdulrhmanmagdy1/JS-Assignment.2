
// Array of quotes

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Life is what happens to you while you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King Jr."
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You learn more from failure than from success. Don't let it stop you.",
        author: "Confucius"
    },
    {
        text: "If you are working on something that you really care about, you don't have to be pushed.",
        author: "Steve Jobs"
    },
    {
        text: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Go confidently in the direction of your dreams.",
        author: "Henry David Thoreau"
    },
    {
        text: "Fall seven times and stand up eight.",
        author: "Japanese Proverb"
    },
    {
        text: "Everything has beauty, but not everyone can see.",
        author: "Confucius"
    }
];

// DOM elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const quoteCounter = document.getElementById('quoteCounter');
const quoteContainer = document.getElementById('quoteContainer');



var lastQuoteIndex = -1;
var quoteCount = 0;


// Function to get a random quote ===> avoiding repetition

function getRandomQuote() {
    if (quotes.length === 1) {
        return quotes[0];
    }

    var randomIndex;

    // Keep generating random index 
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    return quotes[randomIndex];
}

// Function to display a new quote

function displayNewQuote() {
    newQuoteBtn.disabled = true;
    newQuoteBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';


    const quote = getRandomQuote();

    setTimeout(() => {
        // Update the quote text and author
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;

       
        // Update the counter
        quoteCount++;
        quoteCounter.textContent = quoteCount;

        // Reset button state
        newQuoteBtn.disabled = false;
        newQuoteBtn.innerHTML = '<i class="bi bi-arrow-repeat me-2"></i>New Quote';

        
    }, 600);
}

// Event listener for the button
newQuoteBtn.addEventListener('click', displayNewQuote);

