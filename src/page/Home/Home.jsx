import React from "react";
import InterestProducts from "../../Components/InterestProducts/InterestProducts";
import ReviewList from "../../components/testimonios/ReviewList";
import InputReview from "../../components/testimonios/InputReview";

const Home = () => {
  return (
    <div>
      <h1>Prueba del Home</h1>
      <InterestProducts />
      <div>
        <div className="mb-10">
        <div className="mt-4">
          <ReviewList />
        </div>
        <div className="mb-4">
          <InputReview />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;