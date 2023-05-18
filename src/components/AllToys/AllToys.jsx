import React, { useEffect, useState } from 'react';
import SubAllToys from './SubAllToys/SubAllToys';

const AllToys = () => {
     const [jsonData, setJsonData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
          fetch('https://assignment11-server-site-delta.vercel.app/Toy')
               .then(res => res.json())
               .then(data => {
                    setJsonData(data);
                    setIsLoading(false);
               })
     }, [])
     return (
          <div className=' servicePosition mt-5'>
               <div className=' text-center col-lg-6 mx-auto'>
                    <h5 className=' fw-bold text-danger'> Service</h5>
                    <h2 className='fs-1 my-3'>Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
               </div>

               {
                    isLoading && <div className="text-center my-5">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
               }
               
               <div className='row'>
                    {
                         jsonData.map(data => <SubAllToys
                              data={data}
                              key={data._id}
                         ></SubAllToys>)
                    }
               </div>
          </div>
     );
};

export default AllToys;