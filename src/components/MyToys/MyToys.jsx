import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SubMyToys from './SubMyToys/SubMyToys';

const MyToys = () => {
     const { user } = useContext(AuthContext);
     const [toysData, setToysData] = useState([])
     const navigate = useNavigate()

     const url = `http://localhost:5000/addToy?email=${user.email}`;
     useEffect(() => {
          fetch(url)
               .then(res => res.json())
               .then(data => setToysData(data))
     }, []);

     // // server data delete start
     // const handelDelete = (id) => {
     //      Swal.fire({
     //           title: 'Are you sure?',
     //           text: "You won't be able to revert this!",
     //           icon: 'warning',
     //           showCancelButton: true,
     //           confirmButtonColor: '#3085d6',
     //           cancelButtonColor: '#d33',
     //           confirmButtonText: 'Yes, delete it!'
     //      }).then((result) => {
     //           if (result.isConfirmed) {

     //                fetch(`https://mren-server-project.vercel.app/bookings/${id}`, {
     //                     method: 'DELETE'
     //                })
     //                     .then(res => res.json())
     //                     .then(data => {
     //                          if (data.deletedCount > 0) {
     //                               Swal.fire(
     //                                    'Deleted!',
     //                                    'Your file has been deleted.',
     //                                    'success'
     //                               )

     //                               const remaining = bookings.filter(booking => booking._id !== id)
     //                               setBookings(remaining);
     //                          }
     //                     })
     //           }

     //      })

     // }
     // // server data delete end

     // // server data update start
     // const handelUpdate = (id) => {
     //      fetch(`https://mren-server-project.vercel.app/bookings/${id}`, {
     //           method: 'PATCH',
     //           headers: {
     //                'content-type': 'application/json'
     //           },
     //           body: JSON.stringify({ status: 'confirm' })
     //      })
     //           .then(res => res.json())
     //           .then(data => {
     //                if (data.modifiedCount > 0) {
     //                     const remaining = bookings.filter(booking => booking._id !== id);
     //                     const updated = bookings.find(booking => booking._id === id);
     //                     updated.status = 'confirm'
     //                     const newBookings = [updated, ...remaining];
     //                     setBookings(newBookings);
     //                }
     //           })
     // }
     // // server data update end

     return (
          <div className='mt-5 pt-5 container'>
               <h1 className='mt-5'>booking</h1>

               <section>
                    <div className="row my-5 bg-light p-4 fw-semibold">
                         <div className="col-lg-6">PRODUCT</div>
                         <div className="col-lg-2">PRICE</div>
                         <div className="col-lg-2">DATE</div>
                         <div className="col-lg-2">STATUS</div>
                    </div>
                    {
                         toysData.map(data => <SubMyToys
                              key={data._id}
                              data={data}
                              // handelDelete={handelDelete}
                              // handelUpdate={handelUpdate}
                         ></SubMyToys>)
                    }
               </section>
          </div>
     );
};

export default MyToys;