import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
  //   console.log(meal);
  const { idMeal, strMeal, strMealThumb } = meal;
  return (
    <div>
      <div className="card bg-base-300 shadow-xl">
        <figure>
          <img src={strMealThumb} alt="Meal Thumbnail" />
        </figure>
        <div className="card-body">
          <h1 className="card-title justify-center">
            {strMeal.length > 27 ? strMeal.slice(0, 27) : strMeal}
          </h1>
          <div className="card-actions justify-center mt-2">
            <Link to={`/meal/${idMeal}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Meal.propTypes = {
  meal: PropTypes.object,
};

export default Meal;
