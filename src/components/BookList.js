const BookList = (props) => {
  const handleDelete = (id) => {
    let requestInit = {
      method: "DELETE",
    };
    fetch("https://library-net.cleverapps.io/api" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    props.setListUpdated(true);
  };

  let {titulo, autor, edicion} = props.book

  const handleUpdate = (id) => {
    edicion = parseInt(edicion, 10);
    //validación de los datos
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos deben ser validos");
      return;
    }

    const requestInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(props.book),
    };
    fetch("https://library-net.cleverapps.io/api" + id, requestInit)
      .then((res) => res.text())
      .then((res) => console.log(res));
    props.setBook({
      titulo: "",
      autor: "",
      edicion: 0,
    });
    props.setListUpdated(true);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.titulo}</td>
              <td>{book.autor}</td>
              <td>{book.edicion}</td>
              <td>
                <div className="mb-3">
                  <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Delete</button>
                </div>
                <div className="mb-3">
                  <button onClick={() => handleUpdate(book.id)} className="btn btn-dark">Update</button>
                </div>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;
