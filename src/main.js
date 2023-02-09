import React, { useState } from "react";
import twitterPng from "./twitter.png";
import './main.css';

export function QuotePage() {

    let bgColor = Math.floor(Math.random() * 16777215).toString(16);

    const quotesList = [
        {quote : '"Many of life’s failures are people who did not realize how close they were to success when they gave up."', 
                author : 'Thomas A. Edison'},
        {quote : '"To live is the rarest thing in the world. Most people exist, that is all."', 
                author : 'Oscar Wilde'},
        {quote : '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."', 
                author : 'Ralph Waldo Emerson'},
        {quote : '"Be kind, for everyone you meet is fighting a hard battle."', 
                author : 'Plato'},
        {quote : '"Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well."', 
                author : 'Voltaire'},
    ];

    function getRandomIndex() {
        return Math.floor(Math.random() * quotesList.length);
    }

    let index = getRandomIndex();

    const [selectedQuote, setSelectedQuote] = useState(quotesList[index].quote);
    const [selectedAuthor, setSelectedAuthor] = useState(quotesList[index].author);

    function HandleRandomise() {
        index = getRandomIndex();
        setSelectedQuote(quotesList[index].quote);
        setSelectedAuthor(quotesList[index].author);
    }
    return(
        <div className="bg">
            <div className="quote-box">
                <div className="text">
                    {selectedQuote}
                </div>
                <div className="author">
                    - {selectedAuthor}
                </div>
                <div className="actions">
                    <img className="image" src={twitterPng}></img>
                    <button className="random-button" onClick={HandleRandomise}>Randomise</button>
                </div>
            </div>
        </div>
    )
}