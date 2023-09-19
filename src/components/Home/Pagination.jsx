import { NavLink, useLoaderData } from 'react-router-dom';
import './Pagination.css';

const Pagination = () => {
  const { categories } = useLoaderData();
  //   console.log(categories);
  //   const myCategories = categories.slice(0, 5);

  return (
    <div className="mt-10 mb-10">
      <div className="join">
        {categories.map(category => (
          <NavLink
            to={`/${category.strCategory}`}
            key={category.idCategory}
            className="join-item btn"
          >
            {category.strCategory}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
