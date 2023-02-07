import React, { useState } from "react"

export function QuotePage() {
    const quotesList = ['Bones', 'Psych', 'Big Bang Theory', 'Mad Men', 
    'Breaking Bad', 'Modern Family', 'Game of Thrones', 'Dexter'];

    function getRandomIndex() {
        return Math.floor(Math.random() * quotesList.length);
    }
    
    function getRandomQuote() {
        return quotesList[getRandomIndex()];
    }

    const [selectedQuote, setSelectedQuote] = useState(() => getRandomQuote());
    function HandleRandomise() {
        setSelectedQuote(getRandomQuote());
    }
    return(
        <div className="bg">
            {selectedQuote}
            <br />
            <button onClick={HandleRandomise}>Randomise</button>
        </div>
    )
}