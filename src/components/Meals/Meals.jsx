import { useLoaderData, useParams } from 'react-router-dom';

const Meals = () => {
  const { categoryName } = useParams();
  const { meals } = useLoaderData();
  console.log(meals);
  return (
    <div className="mb-10">
      <h1>Meals From Category {categoryName}</h1>
    </div>
  );
};

export default Meals;
