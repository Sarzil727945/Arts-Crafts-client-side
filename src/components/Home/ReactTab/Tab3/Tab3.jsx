import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Tab3 = ({data}) => {
     const {_id, photoURL, name, price, rating } = data;
     const { user } = useContext(AuthContext)

     const handelToast = () => {
          (user?.email) || Swal.fire('Please Login your Account!!')
     }
     return (
          <div className='col-lg-4 mb-3'>
               <div className="card p-2">
                    <img src={photoURL} className="card-img-top tabImg" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title"> <b>Name:</b> {name}</h5>
                         <div className=' d-flex justify-content-between'>
                              <p className="card-text"><b>Price:</b> {price} Tk</p>
                              <p className="card-text"><b>Rating:</b> {rating}</p>
                         </div>
                         <Link to={`/tab1Details/${_id}`}>
                              <button onClick={handelToast} href="#" className="btn btn-primary">View Details</button>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Tab3;