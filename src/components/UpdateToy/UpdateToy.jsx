import React, { useContext } from 'react';
import './UpdateToy.css'
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const UpdateToy = () => {
     useTitle('UpdateToy')
     const navigate = useNavigate();
     const { user } = useContext(AuthContext)
     const toyData = useLoaderData();
     const { _id, name, photoURL, category, price, rating, quantity, description } = toyData;
     const formHandel = (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photoURL = form.photoURL.value;
          const category = form.category.value;
          const price = form.price.value;
          const rating = form.rating.value;
          const quantity = form.quantity.value;
          const description = form.description.value;

          const UpData = {
               name,
               photoURL,
               category,
               price,
               rating,
               quantity,
               description,
          }

          // server data post start 
          fetch(`https://assignment11-server-site-delta.vercel.app/Toy/${_id}`, {
               method: 'PUT',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(UpData)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.modifiedCount) {
                         Swal.fire({
                              title: 'Success!',
                              text: 'Toy update Successfully',
                              icon: 'success',
                              confirmButtonText: 'Ok'
                         })
                    }

                    // server data post exit 
                    navigate('/myToys')

               })

          form.reset();

     }

     return (
          <div className='mt-5 pt-5 container '>
               <div className=' my-4 text-center'>
                    <h1>UpData Toy</h1>
               </div>
               <div className='checkoutForm rounded'>
                    <form className='p-lg-5 mx-lg-5' onSubmit={formHandel}>
                         <div className="row px-4 pt-4">
                              <div className="col-lg mb-2">
                                   <input type="text" name='name' defaultValue={name} className="form-control py-2" placeholder="Name" aria-label="name" required />
                              </div>
                              <div className="col-lg">
                                   <input type="text" name='photoURL' defaultValue={photoURL} className="form-control py-2" placeholder="Picture URL" aria-label="Picture URL" required />
                              </div>
                         </div>
                         <div className=' row px-4 pt-4'>
                              <div className="mb-2">
                                   <select className="form-select py-2" name='category' aria-label="Default select example" defaultValue={category} required>
                                        <option>Sculpting and Modeling</option>
                                        <option value="Jewelry Making">Jewelry Making</option>
                                        <option value="Drawing and Coloring">Drawing and Coloring</option>
                                   </select>
                              </div>
                         </div>
                         <div className="row px-4 py-4">
                              <div className="col-lg mb-2">
                                   <input type="number" name='price' defaultValue={price} className="form-control py-2" placeholder="Price" aria-label="Price" required />
                              </div>
                              <div className="col-lg mb-2">
                                   <input type="text" name='rating' defaultValue={rating} className="form-control py-2" placeholder="Rating" aria-label="Rating" required />
                              </div>
                              <div className="col-lg">
                                   <input type="text" name='quantity' defaultValue={quantity} className="form-control py-2" placeholder="Available quantity" aria-label="Available quantity" required />
                              </div>
                         </div>
                         <div className="mb-3 px-4 pb-3">
                              <textarea name='description' defaultValue={description} className="form-control py-2" id="validationTextarea" placeholder="Detail description" required rows="5"></textarea>
                         </div>
                         <div className='px-4'>
                              <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">UpData Toy</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default UpdateToy;