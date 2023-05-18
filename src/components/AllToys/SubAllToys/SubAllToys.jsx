import React from 'react';

const SubAllToys = ({ data }) => {
     const { displayName, name, category, price, quantity } = data;
     console.log(data);
     return (
          // <div className=' col-lg-4' >
          //      <div class="card mb-3">
          //           <div class="card-body">
          //                <h4 class="card-title">Seller:   {displayName}</h4>
          //                <h4 class="card-title">Toy Name: {name}</h4>
          //                <p class="card-text">Sub-category: {category}</p>
          //                <div className=' d-flex'>
          //                     <p className="card-text "><small className="text-muted mx-3">Price: ${price}</small></p>
          //                     <p className="card-text"><small className="text-muted">Quantity: {quantity}</small></p>
          //                </div>
          //                <div className=' text-center my-2'>
          //                     <button href="#" class="btn btn-danger">View Details</button>
          //                </div>
          //           </div>
          //      </div>
          // </div>
          <tr>
               <th scope="row">{displayName}</th>
               <td>{name}</td>
               <td>{category}</td>
               <td>${price}</td>
               <td className='ms-5'>{quantity}</td>
               <td>
                    <button href="#" class="btn btn-danger">View Details</button>
               </td>
          </tr>
     );
};

export default SubAllToys;