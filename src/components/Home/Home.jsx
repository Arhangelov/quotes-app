import React, { useEffect, useState } from 'react'
import QuoteList from '../QuoteList/QuoteList'
import { getQuoteService } from '../../services/homeServices';
import { useQuotes } from '../context/quoteContext';
import "./Home.css";

const Home = () => {
    const [category, setCategory] = useState("");
    const [quotes, setQuotes] = useQuotes();
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if(category !== "") {
            getQuoteService(category)
            .then(newQuote => {
                setQuotes(newQuote);
                setIsSelected(false);
            })
        } else {
            return
        }
    },[category, setIsSelected, setQuotes])

    const selectedCategoryHandle = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
        setIsSelected(true);
    }   


    return (
        <div className='home-container'>
            <h1>Random Quotes</h1>
            <p>Choose category</p>
            <div className="category">
                <input onClick={selectedCategoryHandle} type="submit" value="alone" />
                <input onClick={selectedCategoryHandle} type="submit" value="amazing" />
                <input onClick={selectedCategoryHandle} type="submit" value="anger" />
                <input onClick={selectedCategoryHandle} type="submit" value="art" />
                <input onClick={selectedCategoryHandle} type="submit" value="beauty" />
                <input onClick={selectedCategoryHandle} type="submit" value="business" />
                <input onClick={selectedCategoryHandle} type="submit" value="change" />
                <input onClick={selectedCategoryHandle} type="submit" value="communication" />
                <input onClick={selectedCategoryHandle} type="submit" value="courage" />
                <input onClick={selectedCategoryHandle} type="submit" value="dating" />
                <input onClick={selectedCategoryHandle} type="submit" value="dreams" />
                <input onClick={selectedCategoryHandle} type="submit" value="failure" />
                <input onClick={selectedCategoryHandle} type="submit" value="fitness" />
                <input onClick={selectedCategoryHandle} type="submit" value="food" />
                <input onClick={selectedCategoryHandle} type="submit" value="forgiveness" />
                <input onClick={selectedCategoryHandle} type="submit" value="funny" />
                <input onClick={selectedCategoryHandle} type="submit" value="future" />
                <input onClick={selectedCategoryHandle} type="submit" value="history" />
                <input onClick={selectedCategoryHandle} type="submit" value="humor" />
                <input onClick={selectedCategoryHandle} type="submit" value="inspirational" />
                <input onClick={selectedCategoryHandle} type="submit" value="intelligence" />
                <input onClick={selectedCategoryHandle} type="submit" value="knowledge" />
                <input onClick={selectedCategoryHandle} type="submit" value="learning" />
                <input onClick={selectedCategoryHandle} type="submit" value="life" />
                <input onClick={selectedCategoryHandle} type="submit" value="love" />
                <input onClick={selectedCategoryHandle} type="submit" value="money" />
                <input onClick={selectedCategoryHandle} type="submit" value="success" />
            </div>
            <QuoteList />
        </div>
    )
}

export default Home