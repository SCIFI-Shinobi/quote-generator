const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const xBtn=document.getElementById('x-button');
const newQuoteBtn=document.getElementById('new-quote');

let apiQuotes=[];

function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    // if author field is empty replace it with unknown
    authorText.textContent = quote.author.split(',').length==2 ? 
    quote.author.split(',')[0]:'unknow' ;
    // changing style of quote based on length of  the quote
    quote.text.length > 120 ? quoteText.classList.add('long-quote'):quoteText.classList.remove('long-quote');
    quoteText.textContent = quote.text;
  }

async function getQuotes(){
  const apiUrl='https://type.fit/api/quotes';
  try{
    const response =await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  }catch(error){
    //catch error here
  }
}

// tweet quote
function tweetQuote(){
  const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} -
  ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}
// event listeners for button click
newQuoteBtn.addEventListener('click', newQuote);
xBtn.addEventListener('click', tweetQuote);

getQuotes();