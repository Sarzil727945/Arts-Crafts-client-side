import React from 'react';
import './Tab1.css'
import { Link } from 'react-router-dom';

const Tab1 = ({ data }) => {
     const {_id, photoURL, name, price, rating } = data;
     return (
          <div className='col-lg-4'>
               <div class="card p-2">
                    <img src={photoURL} class="card-img-top tabImg" alt="..." />
                    <div class="card-body">
                         <h5 class="card-title">{name}</h5>
                         <div className=' d-flex justify-content-between'>
                              <p class="card-text">Price: ${price}</p>
                              <p class="card-text">Rating: {rating}</p>
                         </div>
                         <Link to={`/tab1Details/${_id}`}>
                              <button href="#" class="btn btn-primary">View Details</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Tab1;