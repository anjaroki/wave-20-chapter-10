export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              Tri Game
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#games">Games</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#requirements">Requirements</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/register">
                <span className=""></span> Register
              </a>
            </li>
            <li>
              <a href="/login">
                <span className=""></span> Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
