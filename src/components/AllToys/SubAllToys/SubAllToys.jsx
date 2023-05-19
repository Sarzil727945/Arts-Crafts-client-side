import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const SubAllToys = ({ data }) => {
     const { _id, displayName, name, category, price, quantity } = data;

     return (
          <tr>
               <td scope="row"><span>{displayName}</span></td>
               <td><span>{name}</span></td>
               <td><span>{category}</span></td>
               <td><span>${price}</span></td>
               <td className='ms-5'><span>{quantity}</span></td>
               <td>
                    <Link to={`/details/${_id}`} className='text-decoration-none fs-2 text-danger'>
                         <BsFillArrowRightCircleFill />
                    </Link>

               </td>
          </tr>
     );
};

export default SubAllToys;