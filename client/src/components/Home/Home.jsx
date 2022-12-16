import React, { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useDispatch } from "react-redux";
//JSX
import NavBar from "../NavBar/NavBar";
import Paginated from "../Paged/Paginated.jsx";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
//actions

const Home = () => {
  const dispatch = useDispatch();
  //devuelve toda la info del contexto
  const authContext = useAuth(); // eslint-disable-line
  //devuelve el user del contexto
  const { user } = useAuth(); // eslint-disable-line

  // useEffect(() => {
  //   if (user) {
  //     console.log(user);
  //   }
  // }, [user]);

  return (
    <>
      {console.log(localStorage.getItem('carrito'))}      
      <ScrollToTop />
      <NavBar />
      <Paginated />
      <Footer />
    </>
  );
};

export default Home;