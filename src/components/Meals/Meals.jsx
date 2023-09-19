import { useLoaderData, useParams } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
  const { categoryName } = useParams();
  const { meals } = useLoaderData();
  //   console.log(meals);
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-semibold mb-6">
        Meals From Category: {categoryName}
      </h1>
      <div className="grid grid-cols-4 gap-6">
        {meals.map(meal => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </div>
  );
};

export default Meals;
