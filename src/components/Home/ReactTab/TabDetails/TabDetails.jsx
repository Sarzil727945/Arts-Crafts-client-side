import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const TabDetails = () => {
     useTitle('Toy Details')
     const TabData = useLoaderData();
     const { photoURL, name, displayName, email, description, price, rating, quantity } = TabData;
     return (
          <div className='mt-5 pt-5'>
          <h1 className=' text-center my-3 pb-3'>Toy Details</h1>
          <div className="card col-lg-5 mx-auto">
               <img src={photoURL} className="card-img-top p-3 rounded viewImg" alt="..." />
               <div className="card-body">
                    <h4 className="card-title">Toy name: {name}</h4>
                    <h5 className="card-title">Seller name: {displayName}</h5>
                    <h6>Email: {email}</h6>
                    <p className="card-text">Description: {description}</p>
                    <div className=' d-flex'>
                         <div>
                              <p className="card-text"><small className="text-muted">Price: ${price}</small></p>
                         </div>
                         <div>
                              <p className="card-text mx-4"><small className="text-muted">Rating: {rating}</small></p>
                         </div>
                         <div>
                              <p className="card-text"><small className="text-muted">Quantity: {quantity}</small></p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     );
};

export default TabDetails;