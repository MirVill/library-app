
const Form = (props) => {

const handleChange = (e) => {
  props.setBook({
    ...props.book,
    [e.target.name]: e.target.value
  })
};
let {titulo, autor, edicion} = props.book

const handleSubmit = () => {
  edicion = parseInt(edicion, 10)
  //validación de los datos
  if(titulo === '' || autor === '' || edicion <= 0 ){
    alert('Todos los campos deben ser validos')
    return
}
  //consulta 
  let requestInit = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(props.book)
  }
  fetch('https://library-net.cleverapps.io/api', requestInit)
  .then(res => res.json())
  .then(res => console.log(res))
  //reiniciando state de libro
  props.setBook({
    titulo: '',
    autor: '',
    edicion: 0
  })
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input value={titulo} name="titulo" type="text" id="title" className="form-control" onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">Author</label>
        <input value={autor} name="autor" type="text" id="author" className="form-control"  onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="edition" className="form-label">Edition</label>
        <input name="edicion" type="number" id="edition" className="form-control" onChange={handleChange}/>
      </div>
      <button value={edicion} type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
};
export default Form;