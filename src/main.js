import React, { useState } from "react";
import './main.css';

export function QuotePage() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    const quotesList = [
        {quote : '"Many of life’s failures are people who did not realize how close they were to success when they gave up."', author : 'name1'},
        {quote : 'Bones2', author : 'name2'},
        {quote : 'Bones3', author : 'name3'},
        {quote : 'Bones4', author : 'name4'},
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
                <div className="new-quote">
                    <button className="random-button" onClick={HandleRandomise}>Randomise</button>
                </div>
            </div>
        </div>
    )
}