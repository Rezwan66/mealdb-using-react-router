import { NavLink, useLoaderData } from 'react-router-dom';

const Pagination = () => {
  const { categories } = useLoaderData();
  //   console.log(categories);
  //   const myCategories = categories.slice(0, 5);
  return (
    <div className="mt-10 mb-10">
      <div className="join">
        {categories.map(category => (
          <NavLink to={`/${category.strCategory}`} key={category.idCategory}>
            <button className="join-item btn">{category.strCategory}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
