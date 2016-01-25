(() => {
    const makeQuote = (quote, author, year) => ({ quote, author, year });

    const quotes = [
      makeQuote('All those moments will be lost in time… like tears in rain.', 'Roy Batty/Rutger Hauer in Blade Runner', 1982),
      makeQuote('Bond. James Bond.', 'Sean Connery in Dr No', 1962),
      makeQuote('But then I realised maybe that\'s what hell is: the entire rest of eternity spent in f_____g Bruges. And I really really hoped I wouldn\'t die.', 'Colin Farrell in In Bruges', 2008),
      makeQuote('Do I look like I give a damn?', 'Daniel Craig in Casino Royale', 2006),
      makeQuote('ET phone home.', 'Gertie in ET: The Extra-Terrestrial', 1982),
      makeQuote('Everybody runs, Fletch.', 'Tom Cruise in Minority Report', 2002),
      makeQuote('Get busy living, or get busy dying.', 'Tim Robbins in the Shawshank Redemption', 1994),
      makeQuote('How do you like them apples?', 'Matt Damon in Good Will Hunting', 1997)
    ];

    let lastQuote;

    const quote = document.querySelector('.quote'),
          quoteText = quote.querySelector('.quote__text'),
          quoteAuthor = quote.querySelector('.quote__author'),
          quoteYear = quote.querySelector('.quote__year'),
          btnNewQuote = document.querySelector('#js-new-quote');

    const getRandomQuote = () => {
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        if(randomQuote === lastQuote) {
          getRandomQuote();
        } else {
          lastQuote = randomQuote.quote;
        }
        return randomQuote;
    };

    const newQuote = () => {
        let quote = getRandomQuote();

        quoteText.innerText = quote.quote;
        quoteAuthor.innerText = quote.author;
        quoteYear.innerText = quote.year;
    };

    btnNewQuote.addEventListener('click', newQuote);

    newQuote();
})();
