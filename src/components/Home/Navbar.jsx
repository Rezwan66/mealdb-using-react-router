import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar bg-base-100 flex justify-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl border-2 border-base-content"
        >
          MealsDB
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
