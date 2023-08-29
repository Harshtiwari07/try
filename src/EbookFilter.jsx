import React, { useState } from 'react';
import './EbookFilter.css';

const EbookFilter = () => {
  const [searchName, setSearchName] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');
  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Author 1', category: 'Category A' },
    { title: 'Book 2', author: 'Author 2', category: 'Category B' },
    { title: 'Book 3', author: 'Author 3', category: 'Category A' },
    { title: 'Book 4', author: 'Author 4', category: 'Category B' },
    { title: 'Book 5', author: 'Author 5', category: 'Category A' },
    { title: 'Book 6', author: 'Author 6', category: 'Category B' },
    
  ]);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleFilter = () => {
    const filtered = books.filter(book => {
      const nameMatch = book.title.toLowerCase().includes(searchName.toLowerCase());
      const categoryMatch = book.category.toLowerCase().includes(searchCategory.toLowerCase());
      const authorMatch = book.author.toLowerCase().includes(searchAuthor.toLowerCase());
      return nameMatch && categoryMatch && authorMatch;
    });

    setFilteredBooks(filtered);
  };

  return (
    <div className="ebook-filter">
      <h2>E-book Filter</h2>
      <div className="search-inputs">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by category"
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by author"
          value={searchAuthor}
          onChange={(e) => setSearchAuthor(e.target.value)}
        />
      </div>
      <button className="filter-button" onClick={handleFilter}>
        Filter
      </button>
      <div className="book-cards">
        {filteredBooks.map((book, index) => (
          <div className="book-card" key={index}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EbookFilter;
