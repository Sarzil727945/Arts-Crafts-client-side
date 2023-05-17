import React from 'react';
import { Button } from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti'
import Swal from 'sweetalert2';

const SubMyToys = ({ data, handelDelete}) => {
     const { photoURL, name, displayName, email, category, description, price, quantity,
          rating, _id } = data;
     console.log(data);
     return (
          <div className=' container'>
               {/* <div className='row align-items-center justify-content-end mb-3'>
                    <div className="col-lg-6 d-flex align-items-center">
                         <button onClick={() => handelDelete(_id)} className='subButton'>
                              <span className=' fs-1 me-4'><TiDelete /></span>
                         </button>
                         <div className='me-4 col-lg-6'>
                              <img className=' img-fluid rounded' src='../' alt="" />
                         </div>
                         <div className=' fw-semibold'>
                              <h4>title</h4>
                              <p className=' text-muted'>Color : Green</p>
                         </div>
                    </div>
                    <div className="col-lg-2 fw-semibold">price</div>
                    <div className="col-lg-2 fw-semibold">date</div>
                    <div className="col-lg-2 fw-semibold">
                         {
                              status === 'confirm' ? <span className=' fw-bold text-danger'>Confirmed</span> :
                              <button onClick={() => handelUpdate(_id)} type="button" className="btn btn-danger">Please Confirmed</button>
                         }
                    </div>
               </div> */}
               <div class="card mb-3">
                    <div class="row g-0 align-items-center p-2 justify-content-center">
                         <div class="col-lg-4">
                              <img src={photoURL} class="img-fluid rounded-start" alt="..." />
                         </div>
                         <div class="col-lg-6 ps-lg-5">
                              <div class="card-body">
                                   <h4 class="card-title">Name: {name}</h4>
                                   <h5 class="card-title">Seller: {displayName}</h5>
                                   <h6>Email: {email}</h6>
                                   <p>Sub-category: {category}</p>
                                   <p class="card-text">Description: {description}</p>
                                   <div className=' d-flex'>
                                        <p class="card-text "><small class="text-muted">Price: {price}</small></p>
                                        <p class="card-text mx-5"><small class="text-muted">Rating: {rating}</small></p>
                                        <p class="card-text"><small class="text-muted">Quantity: {quantity}</small></p>
                                   </div>
                              </div>
                         </div>
                         <div className=' col-lg-2 text-center p-3'>
                              <button type="button" class="btn btn-success me-3">Update</button>
                              <button onClick={() => handelDelete(_id)} type="button" class="btn btn-danger">Delete</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SubMyToys;