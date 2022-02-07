const Navbar = (props) => {
  return(
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <a href="#!" className="navbar-brand">
        {props.brand}
      </a>
    </div>
  </nav>
  ) 
};
export default Navbar;
