import React from 'react';
import { Link } from 'react-router-dom';


const SubMyToys = ({ data, handelDelete }) => {
     const { photoURL, name, displayName, email, category, description, price, quantity, rating, _id } = data;
     return (
          <div className=' container'>
               <div className="card mb-3">
                    <div className="row g-0 align-items-center p-2 justify-content-center">
                         <div className="col-lg-4">
                              <img src={photoURL} className="img-fluid rounded-start" alt="..." />
                         </div>
                         <div className="col-lg-6 ps-lg-5">
                              <div className="card-body">
                                   <h4 className="card-title">Name: {name}</h4>
                                   <h5 className="card-title">Seller Name: {displayName}</h5>
                                   <h6>Email: {email}</h6>
                                   <p>Sub-category: {category}</p>
                                   <p className="card-text">Description: {description}</p>
                                   <div className=' d-flex'>
                                        <p className="card-text "><small className="text-muted">Price: {price}</small></p>
                                        <p className="card-text mx-5"><small className="text-muted">Rating: {rating}</small></p>
                                        <p className="card-text"><small className="text-muted">Quantity: {quantity}</small></p>
                                   </div>
                              </div>
                         </div>
                         <div className=' col-lg-2 text-center p-3'>
                              <Link to={`updateToy/${_id}`}>
                                   <button type="button" className="btn btn-success me-3">Update</button>
                              </Link>
                              <button onClick={() => handelDelete(_id)} type="button" className="btn btn-danger">Delete</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SubMyToys;