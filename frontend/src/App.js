import './App.css';
import React, { useState, useEffect } from 'react';
import PostList from './components/postList';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './redux/ducks/posts';

const App = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

  const posts = useSelector((state) => state.posts.posts);

  const onChangeHandler = (text) => {
    let matches = [];
    if(text.length > 3){
      matches = posts.filter(dt => {
        return dt.title.includes(text)
      })
    }
    setSuggestions(matches.slice(0,10));
    setSearch(text);
  };

  const onSuggestHandler = (text) => {
    setSearch(text);
    setSuggestions([]);
  };

  const handleSearch = () =>{
    let temp = posts.filter(dt => {
      const title = dt.title.toLowerCase();
      return title === search;
    });
    setSearchResult(temp);
  };

  return (
    <div id="App">
      <h2>Search posts:</h2>
      <input className='search-input' type='text' value={search} placeholder='Input the post title '
      onChange={(e) => {e.preventDefault(); onChangeHandler(e.target.value)}}/>
      <button className='search-btn' onClick={(e) => handleSearch()}>Search</button>
      {suggestions && suggestions.map((suggestion, i) => {
       return <div key={i} className='suggestions' onClick={() => onSuggestHandler(suggestion.title)}>{suggestion.title}</div>
      })}
      {searchResult.map((post,index) =>
        <PostList key={index} post={post} />
      )}
    </div>
  );
}

export default App;
