import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SubMyToys from './SubMyToys/SubMyToys';

const MyToys = () => {
     const { user } = useContext(AuthContext);
     const [toysData, setToysData] = useState([])
     const navigate = useNavigate()

     const url = `https://assignment11-server-site-delta.vercel.app/Toy?email=${user?.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => setToysData(data))
     }, [url]);


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
                                        'Your file has been deleted.',
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
               <h1 className='my-5 text-center'>MyToys</h1>

               <section>
                    {
                         toysData.map(data => <SubMyToys
                              key={data._id}
                              data={data}
                              handelDelete={handelDelete}
                         ></SubMyToys>)
                    }
               </section>
          </div>
     );
};

export default MyToys;