import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};