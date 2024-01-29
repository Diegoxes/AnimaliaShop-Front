import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { fetchTestimonios } from './actions/testimoniosActions';

export const Testimonios = () => {

    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.review.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const getRandomReviews = (reviews, count) => {
    const shuffledReviews = reviews.sort(() => 0.5 - Math.random());
    return shuffledReviews.slice(0, count);
  };

  const randomReviews = getRandomReviews(reviews, 3);

  return (
    <div>
      <ul>
        {randomReviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
            <p>Score: {review.score}</p>
          </li>
        ))} 
      </ul>
    </div>
  )
}
