import React, { useState } from 'react';
import './EbookFilter.css';
import harry from './images/harry.jpg';
import inter from './images/inter.jpg';
import react from './images/react.jpg';
import corporate from './images/corporate.jpg';


const EbookFilter = () => {
    const [searchName, setSearchName] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [searchAuthor, setSearchAuthor] = useState('');
    const [books, setBooks] = useState([
        {
            title: 'Harry Potter & the half blood prince',
            author: 'J.K. Rowling',
            category: 'Novel',
            image: harry,
        },
        {
            title: 'Harry Potter & the prisoners of Azkaban',
            author: 'J.K. Rowling',
            category: 'Novel',
            image: harry,
        },
        {
            title: 'Harry Potter & the deathly hollows part 1',
            author: 'J.K. Rowling',
            category: 'Novel',
            image: harry,
        },
        {
            title: 'Interstellar',
            author: 'J.k Borrow',
            category: 'Sci-Fi',
            image: inter,
        },
        {
            title: 'Corporate Chanakya',
            author: 'R.K Pillai',
            category: 'Management',
            image: corporate,
        },
        {
            title: 'Learn React in 24 Hrs',
            author: 'L.K Thoda',
            category: 'Technical',
            image: react,
        },

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
            <div className="filter-box">
                <h2>E-book Filter</h2>
                <div className="search-inputs">
                    <div className="input-group">
                        <input
                        className='textshadow'
                            type="text"
                            placeholder="Search by Name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                        />
                        <input
                        className='textshadow'
                            type="text"
                            placeholder="Search by Category"
                            value={searchCategory}
                            onChange={(e) => setSearchCategory(e.target.value)}
                        />
                        <input
                        className='textshadow'
                            type="text"
                            placeholder="Search by Author"
                            value={searchAuthor}
                            onChange={(e) => setSearchAuthor(e.target.value)}
                        />
                        <button className="filter-button" onClick={handleFilter}>Filter</button>
                    </div>

                </div>

            </div>
            <div className="book-cards">
                {filteredBooks.map((book, index) => (
                    <div className="book-card" key={index}>
                        <h2>{book.title}</h2>
                        <div className='boxx'>
                        
                            <div className='text-box'>
                                <p>Author: {book.author}</p>
                                <p>Category: {book.category}</p>
                                <button className="preview-button">Preview</button><br></br>
                                <button className="subscribe-button">Subscribe Now</button>
                            </div>

                            <div className='image-box'>
                                <img className='book-img' src={book.image} alt={`Cover for ${book.title}`} />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EbookFilter;
