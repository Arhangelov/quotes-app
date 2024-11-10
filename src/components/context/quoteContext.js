import { createContext, useContext, useState } from "react";

const QuotesContext = createContext();

const initialState = [];

export const QuotesProvider = ({ children }) => {
    const [notes, setNotes] = useState(initialState);

    return(
        <QuotesContext.Provider value={[ notes, setNotes ]}>
            {children}
        </QuotesContext.Provider>
    );
};

export const useQuotes = () => useContext(QuotesContext);