import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Pagination from './Pagination';

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      <Pagination></Pagination>
      {navigation.state === 'loading' ? (
        <div>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
