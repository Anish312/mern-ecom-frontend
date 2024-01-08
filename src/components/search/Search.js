import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate('/products');
    }
  };

  return (
    <div>
      <form onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search..."
          value={keyword}
          onChange={handleInputChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Search;
