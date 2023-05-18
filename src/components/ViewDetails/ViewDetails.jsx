import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
     const ViewData = useLoaderData();
     const { photoURL, name, email, description, price,  rating, quantity} = ViewData;
     console.log(ViewData);
     return (
          <div className='mt-5 pt-5'>
               <h1 className=' text-center my-3 pb-3'>ViewDetails</h1>
               <div class="card col-lg-5 mx-auto">
                    <img src={photoURL} class="card-img-top p-3 rounded" alt="..." />
                    <div class="card-body">
                         <h4 class="card-title">Toy name: {name}</h4>
                         <h5 class="card-title">Seller name: {name}</h5>
                         <h6>Email: {email}</h6>
                         <p class="card-text">Description: {description}</p>
                         <div className=' d-flex'>
                              <div>
                                   <p class="card-text"><small class="text-muted">Price: ${price}</small></p>
                              </div>
                              <div>
                                   <p class="card-text mx-4"><small class="text-muted">Rating: {rating}</small></p>
                              </div>
                              <div>
                                   <p class="card-text"><small class="text-muted">Quantity: {quantity}</small></p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ViewDetails;