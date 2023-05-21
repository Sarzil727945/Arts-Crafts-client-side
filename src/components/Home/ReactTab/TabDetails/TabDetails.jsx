import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const TabDetails = () => {
     useTitle('Toy Details')
     const TabData = useLoaderData();
     const { photoURL, name, displayName, email, category, description, price, rating, quantity } = TabData;
     return (
          <div className='mt-5 pt-5'>
          <h1 className=' text-center my-3 pb-3'>Toy Details</h1>
          <div className="card col-lg-5 mx-auto">
               <img src={photoURL} className="card-img-top p-3 rounded viewImg" alt="..." />
               <div className="card-body">
                    <h4 className="card-title"><b>Toy name:</b> {name}</h4>
                    <h5 className="card-title"><b>Seller name:</b> {displayName}</h5>
                    <h6><b>Email:</b> {email}</h6>
                    <p className="card-text"><b>Sub-category:</b> {category}</p>
                    <p className="card-text"><b>Description:</b> {description}</p>
                    <div className=' d-flex'>
                         <div>
                              <p className="card-text"><small className="text-muted"><b>Price:</b> {price} Tk</small></p>
                         </div>
                         <div>
                              <p className="card-text mx-4"><small className="text-muted"><b>Rating:</b> {rating}</small></p>
                         </div>
                         <div>
                              <p className="card-text"><small className="text-muted"><b>Quantity:</b> {quantity}</small></p>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     );
};

export default TabDetails;