const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" style={{"color":"#8B76F7"}} href="/">Zeru</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="bi bi-list" style={{"color":"#8B76F7"}} />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#about">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#portofolio">Portofolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#contact">Contact me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

export default Navbar;
