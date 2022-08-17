import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" href="/">
              Tri Game
            </Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#games">Games</Link>
            </li>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#requirements">Requirements</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/register">
                <span className=""></span> Register
              </Link>
            </li>
            <li>
              <Link href="/login">
                <span className=""></span> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
