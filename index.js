var quates = [
  {
    author: "Jim Rohn",
    quote: " 1--Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "2--It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "3--The best revenge is massive success." },

  {
    author: "Wayne Gretzy",
    quote: "4--You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:

      "5--Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "6--Do not take life too seriously. You will not get out alive.",
  },
];



  var usedArticles = [];
  
  function makeRandomQuates() {
    if (usedArticles.length === quates.length) {
      usedArticles = [];
    }
  
    var randomQuates;
  
    for (var i = 0; i < 1; i++) { 
      
      while (true) {
        randomQuates = Math.floor(Math.random() * quates.length);
        if (!usedArticles.includes(randomQuates)) {
          break; 
        }
      }
  
      document.getElementById('quoteOutput').innerHTML = quates[randomQuates].quote;
      document.getElementById('authorOutput').innerHTML = quates[randomQuates].author;
  
      usedArticles.push(randomQuates);
    }
  }
