import React from 'react';
import { useNavigate } from "react-router-dom";

function ChangeRoute(path : string) {
  const navigate = useNavigate(); 

  const routeChange = () => { 
    navigate(path);
  }

  return routeChange;
}

export default ChangeRoute;