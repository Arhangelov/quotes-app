import React from 'react';
import "./QuoteList.css";

//Context
import { useQuotes } from '../context/quoteContext';

//Services
import { getQuoteService } from '../../services/homeServices';

//Icons
import { IoIosRefresh } from "react-icons/io";

const QuoteList = () => {
    const [quotes, setQuotes] = useQuotes();
    const refreshHandle = (category) => {
        getQuoteService(category)
            .then(newQuote => {
                setQuotes(newQuote)
            })
    }

    return (
        <div className='quote-list-container'>
            {quotes?.map(quote => (
                <div className="quote-card">
                    <blockquote>
                        <p className='text'>{quote.quote}</p>
                    </blockquote>
                    <cite>—{quote.author}</cite>
                    <button onClick={() => refreshHandle(quote.category)} className='btn'><IoIosRefresh /></button>
                </div>
            ))}
        </div>
    )
}

export default QuoteList