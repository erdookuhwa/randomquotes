const quote = document.querySelector('#quote')
const button = document.querySelector('.btn')

// quotes array
const quotes = [
    'Do something today that your future self will thank you for',
    'Don\'t worry, be happy!',
    'Your limitation is only your imagination',
    'No one can make you feel inferior without your permission',
    'Do more of what makes you happy',
    'Never Never Never Give up!',
    'Fall in love with life',
    'Enjoy the little things',
    'So many of our dreams at first seem impossible. Then they seem improbable. And then, when we summon the will, they soon become inevitable'
]

function showRandomQuote() {
    for (let i=0; i<quotes.length; i++) {
        quote.innerHTML = quotes[ Math.floor(Math.random() * quotes.length)]
    }
}

button.addEventListener('click', showRandomQuote)