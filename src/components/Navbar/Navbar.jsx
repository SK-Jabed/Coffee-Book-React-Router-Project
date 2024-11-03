import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col gap-2"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/coffees"}>Coffees</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="text-2xl font-bold">
            COFFEE BOOK
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-12">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/coffees"}>Coffees</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;