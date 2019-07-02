import React from 'react';
import { Link } from 'react-router-dom';


export default () => {
  return (
    <Link to="/client/add" style={{ backgroundColor:"#61A598" }} className="btn btn-block">
        <i className="fas fa-plus"></i> New
    </Link>
  )
}


