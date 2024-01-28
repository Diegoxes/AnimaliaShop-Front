import React from "react";
import { Card } from '../card/Card';
import { useSelector } from "react-redux";

const Cards = () => {

  const titles = useSelector((state) => state.titles) || []; // Si titles es undefined, establece un array vacío

  
  return (
    <div>
      {titles.length > 0 &&
        titles.map((titles, index) => (
          <div key={index}>
            <Card 
              id={titles?.id} 
              title={titles?.title} 
              manufacturer={titles?.manufacturer}
              stock={titles?.stock}
              price={titles?.price}
              // image={titles?.image}
              available={titles?.available}
              description={titles?.description}
              category={titles?.category}
            />
          </div>
        ))
      }
    </div>
  );
};

export default Cards;