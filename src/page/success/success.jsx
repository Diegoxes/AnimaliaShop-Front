import React, { useContext, useEffect } from "react";
import CartContext from "../../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import axios from "axios";

const SuccessfullPayment = () => {
  return (
    <div>
      <h2>Succesfull Payment</h2>
    </div>
  );
};

export default SuccessfullPayment;
