import Link from "next/link";

const NavBar = () => {
  return (
    <nav style={{ padding: "10px" }} className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Directory
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/add-new">
              Add new user.
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;