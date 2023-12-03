const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const xBtn=document.getElementById('x-button');
const newQuoteBtn=document.getElementById('new-quote');

let apiQuotes=[];

function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    quoteText.textContent=quote.text;
    authorText.textContent=quote.author;
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

getQuotes();