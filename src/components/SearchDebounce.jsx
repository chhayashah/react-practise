import React, { useState,useEffect } from "react";

const SearchDebounce = () => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            if (query) {
                fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`)
                    .then(res => res.json())
                    .then(data => console.log(data))
                .catch((err) => console.log("Error:", err));
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [query]);

    return (
        <>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={"search query"} />
        </>
    )
}
export default SearchDebounce;