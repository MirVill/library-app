import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import Form from "./components/Form";
function App() {
  const [book, setBook] = useState({
    titulo: '',
    autor: '',
    edicion: 0
  });
  const [books, setBooks] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);

  const getBooks = () => {
    fetch('https://library-net.cleverapps.io/api')
    .then(res => res.json())
    .then(res => setBooks(res))
  };

  useEffect(() => {
    getBooks();
    setListUpdated(false);
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand={"Library App"} />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <br />
            <h2 style={{ textAlign: "center" }}>Book List</h2>
            <br />
            <BookList book={book} setBook={setBook} books={books} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
            <br />
            <h2 style={{ textAlign: "center" }}>Book Form</h2>
            <br/>
            <Form book={book} setBook={setBook}/>
            <br />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
