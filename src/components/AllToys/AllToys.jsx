import React, { useEffect, useState } from 'react';
import SubAllToys from './SubAllToys/SubAllToys';
import "./ALLToys.css"
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
     useTitle('AllToys')
     const [jsonData, setJsonData] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
     const [searchText, setSearchText] = useState('')

     useEffect(() => {
          fetch('https://assignment11-server-site-delta.vercel.app/Toy')
               .then(res => res.json())
               .then(data => {
                    setJsonData(data);
                    setIsLoading(false);
               })
     }, [])
     const arrLimit = jsonData.slice(0, 20)

     // search server json start 
     const handleSearch = () => {
          fetch(`https://assignment11-server-site-delta.vercel.app/ToySearchText/${searchText}`)
               .then((res) => res.json())
               .then((data) => {
                    setJsonData(data);
               });
     };
     // search server json exit

     return (
          <div className=' servicePosition mt-5 pt-5 container-lg'>

               {/* search part start  */}
               <div className="container my-4 pb-3 d-flex justify-content-center">
                    <input onChange={(e) => setSearchText(e.target.value)} id="input-field" type="text" className=" w-50 py-2 px-2 form-control mx-3" placeholder="Search.." />{" "}
                    <button onClick={handleSearch} id="btn-search" type="submit" className="btn btn-info">Search</button>
               </div>
               {/* search part end  */}


               <div className='table-responsive'>
                    <table className="table text-center table-striped">
                         <thead className='table-light'>
                              <tr>
                                   <th scope="col">Seller Name</th>
                                   <th scope="col">Toy Name</th>
                                   <th scope="col">Sub-category</th>
                                   <th scope="col">Toy Price</th>
                                   <th scope="col">Available Quantity</th>
                                   <th scope="col">View</th>
                              </tr>
                         </thead>

                         <tbody>
                              {
                                   arrLimit.map(data => <SubAllToys
                                        data={data}
                                        key={data._id}
                                   ></SubAllToys>)
                              }
                         </tbody>
                    </table>
               </div>

               {
                    isLoading && <div className="text-center my-5">
                         <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
               }
          </div>
     );
};

export default AllToys;