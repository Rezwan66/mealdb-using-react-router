import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetails = () => {
  const { meals } = useLoaderData();
  console.log(meals[0]);
  const mealDetails = meals[0];
  const {
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
    strSource,
    strYoutube,
  } = mealDetails;

  const navigate = useNavigate();

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={strMealThumb} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold mb-4">{strMeal}</h1>
            <p>
              <i>
                <strong>Place of Origin:</strong> {strArea},{' '}
              </i>
              <i>
                <strong>Meal Category:</strong> {strCategory}
              </i>
            </p>
            <p className="py-6">{strInstructions}</p>
            <p>
              <strong>Source:</strong> {strSource}
            </p>
            <p className="mb-8">
              <strong>YouTube:</strong> {strYoutube}
            </p>
            <button onClick={() => navigate(-1)} className="btn btn-primary">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
