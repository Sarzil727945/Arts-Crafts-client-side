import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SubAllToys = ({ data }) => {
     const { _id, displayName, name, category, price, quantity } = data;
     const { user } = useContext(AuthContext)

     const handelToast = () => {
          (user?.email) || Swal.fire('Please Login your Account!!')
     }


     return (
          <tr>
               <td scope="row"><span>{displayName}</span></td>
               <td><span>{name}</span></td>
               <td><span>{category}</span></td>
               <td><span>{price} Tk</span></td>
               <td className='ms-5'><span>{quantity}</span></td>
               <td>
                    <Link onClick={handelToast} to={`/details/${_id}`} className='text-decoration-none fs-2 text-danger'>
                         <BsFillArrowRightCircleFill />
                    </Link>

               </td>
          </tr>
     );
};

export default SubAllToys;