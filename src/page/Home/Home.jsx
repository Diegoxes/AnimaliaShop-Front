import React from "react";
import InterestProducts from "../../Components/InterestProducts/InterestProducts";

import Footer from "../../Components/Footer/Footer";
import ReviewList from "../../components/testimonios/ReviewList";
import InputReview from "../../Components/testimonios/InputReview";

const Home = () => {
  return (
    <div>
      <InterestProducts />
      <div>
        <div className='mb-10'>
          <div className='mt-4'>
            <ReviewList />
          </div>
          <div className='mb-4'>
            <InputReview />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
