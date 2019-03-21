import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function App() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("react hooks");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchInputRef = useRef();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setNews(response.data.hits);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  const handleSearch = event => {
    event.preventDefault();
    getNews();
  };

  const handleClear = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  return (
    <div className="container max-w-md mx-auto p-4 m-2 bg-purple-lightest shadown-lg rounded">
      <h1 className=" text-gre-darkets font-thin mb-4">
        Hooks news from Hacker news
      </h1>
      <form onClick={handleSearch} className=" mb-4">
        <input
          type="text"
          onChange={event => setQuery(event.target.value)}
          value={query}
          ref={searchInputRef}
          className="border p-1 rounded"
        />
        <button type="submit" className="bg-orange rounded m-1 p-1">
          Search
        </button>
        <button
          type="button"
          className="bg-green rounded m-1 p-1"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
      {isLoading ? (
        <div className=" font-bold text-orange-dark"> Loading results ... </div>
      ) : (
        <ul className="list-reset leading-normal">
          {news.map(result => (
            <li key={result.objectID} className="mb-1">
              <a
                href={result.url}
                className=" text-indigo-dark hover:text-indigo-darkest"
              >
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      )}
      {error && <div className="text-red  font-bold">{error.message}</div>}
    </div>
  );
}
