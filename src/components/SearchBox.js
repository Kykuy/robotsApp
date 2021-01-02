import React from 'react';

const SearchBox = (props) => {
  return (
    <>
      <input type = "search" 
      placeholder = "search robots!" 
      className = 'searchBar searchBar-bot' 
      onChange = {props.onInput}/>      
    </>
  );
}

export default SearchBox;