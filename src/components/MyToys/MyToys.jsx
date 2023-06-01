import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SubMyToys from './SubMyToys/SubMyToys';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
     useTitle('MyToys')

     const { user } = useContext(AuthContext);
     const [isLoading, setIsLoading] = useState(true);
     const [toysData, setToysData] = useState([]);
     const [priceSort, setPriceSort] = useState("");
     const navigate = useNavigate()

     // // server data get start 
     // const url = `https://assignment11-server-site-delta.vercel.app/Toy?email=${user?.email}&sort=${priceSort}`;
     // useEffect(() => {
     //      fetch(url)
     //           .then(res => res.json())
     //           .then(data => {
     //                setToysData(data);
     //                setIsLoading(false);
     //           })
     // }, [priceSort, url]);
     // // server data get exit 

     // jwt added server data get start
     const url = `https://assignment11-server-site-delta.vercel.app/Toy?email=${user?.email}&sort=${priceSort}`;
     useEffect(() => {
          fetch(url, {
               method: 'GET',
               headers: {
                    authorization: `Bearer ${localStorage.getItem('arts-access-token')}`
               }
          })
               .then(res => res.json())
               .then(data => {
                    setToysData(data);
                    setIsLoading(false);
               })
     }, [priceSort, url]);
     // jwt added server data get exit

     // server data delete start
     const handelDelete = (id) => {
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
               if (result.isConfirmed) {

                    fetch(`https://assignment11-server-site-delta.vercel.app/Toy/${id}`, {
                         method: 'DELETE'
                    })
                         .then(res => res.json())
                         .then(data => {
                              if (data.deletedCount > 0) {
                                   Swal.fire(
                                        'Deleted!',
                                        'Your Toy has been deleted.',
                                        'success'
                                   )

                                   const remaining = toysData.filter(booking => booking._id !== id)
                                   setToysData(remaining);
                              }
                         })
               }

          })

     }
     // server data delete end


     return (
          <div className='mt-5 pt-5 container'>
               <h1 className='my-4 text-center'>My Toys</h1>
               <div className=" my-3 pb-3">
                    <button onClick={() => setPriceSort(1)} type="button" className="btn btn-success me-2">Ascending Sort</button>
                    <button onClick={() => setPriceSort(-1)} type="button" className="btn btn-danger">Descending Sort</button>
               </div>

               <section>
                    <div className='table-responsive'>
                         <table className="table text-center table-striped">
                              <thead className='table-light'>
                                   <tr>
                                        <th scope="col">SELLER NAME</th>
                                        <th scope="col">TOY NAME</th>
                                        <th scope="col">PICTURE</th>
                                        <th scope="col">CATEGORY</th>
                                        <th scope="col">PRICE</th>
                                        <th scope="col">RATING</th>
                                        <th scope="col">QUANTITY</th>
                                        <th scope="col">UPDATE</th>
                                        <th scope="col">DELETE</th>
                                   </tr>
                              </thead>

                              <tbody>
                                   {
                                        toysData.map(data => <SubMyToys
                                             key={data._id}
                                             data={data}
                                             handelDelete={handelDelete}
                                        ></SubMyToys>)
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

               </section>
          </div>
     );
};

export default MyToys;