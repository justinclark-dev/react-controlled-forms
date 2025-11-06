import { useState } from 'react';

const Bookshelf = (props) => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const initialFormData = {
        title: '',
        author: '',
    }

    const [newBook, setNewBook] = useState(initialFormData);

    const handleInputChange = (event) => {
        const createNewBook = { ...newBook, [event.target.name]: event.target.value };
        setNewBook(createNewBook);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log([...books, { title: newBook.title, author: newBook.author }])
        setBooks([...books, { title: newBook.title, author: newBook.author }]);
        setNewBook(initialFormData);
    };

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title: </label>
                        <input
                            id="title"
                            name="title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />
                        <br />
                        <label htmlFor="author">Author: </label>
                        <input
                            id="author"
                            name="author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        <br />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book, index) => {
                        return (
                            <div key={index} className='bookCard'>
                                <h2>{book.title}</h2>
                                <p>{book.author}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );

};

export default Bookshelf;