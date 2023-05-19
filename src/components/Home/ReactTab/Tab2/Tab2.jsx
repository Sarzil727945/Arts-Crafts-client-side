import React from 'react';

const Tab2 = ({data}) => {
     const { img, name, price, rating } = data
     return (
          <div className='col-lg-4'>
          <div class="card p-2">
               <img src={img} class="card-img-top tabImg" alt="..." />
               <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <div className=' d-flex justify-content-between'>
                         <p class="card-text">Price: ${price}</p>
                         <p class="card-text">Rating: {rating}</p>
                    </div>
                    <button href="#" class="btn btn-primary">View Details</button>
               </div>
          </div>
     </div>
     );
};

export default Tab2;