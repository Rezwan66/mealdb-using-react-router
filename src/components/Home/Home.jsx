import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Pagination from './Pagination';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Pagination></Pagination>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Home;
