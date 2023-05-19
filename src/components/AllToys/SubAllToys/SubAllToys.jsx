import React from 'react';
import { Link } from 'react-router-dom';

const SubAllToys = ({ data }) => {
     const {_id, displayName, name, category, price, quantity } = data;
     return (
          <tr>
               <th scope="row">{displayName}</th>
               <td>{name}</td>
               <td>{category}</td>
               <td>${price}</td>
               <td className='ms-5'>{quantity}</td>
               <td>
                    <Link to={`/details/${_id}`}>
                         <button href="#" className="btn btn-danger">View Details</button>
                    </Link>

               </td>
          </tr>
     );
};

export default SubAllToys;