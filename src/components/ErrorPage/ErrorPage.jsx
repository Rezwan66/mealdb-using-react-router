import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="mt-80 space-y-6">
      <h1 className="text-5xl font-bold">Oops!!!</h1>
      <p>Sorry, an unexpected error has occurred!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <br />
      <Link to="/">
        <button className="btn btn-secondary">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
