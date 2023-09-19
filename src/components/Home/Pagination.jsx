import { NavLink, useLoaderData } from 'react-router-dom';

const Pagination = () => {
  const { categories } = useLoaderData();
  //   console.log(categories, categories.categories);

  return (
    <div className="mt-10 mb-10">
      <div className="join">
        {categories.map(category => (
          <NavLink to={`/${category.idCategory}`} key={category.idCategory}>
            <button className="join-item btn">{category.strCategory}</button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
