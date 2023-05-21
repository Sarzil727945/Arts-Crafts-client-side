import React from 'react';
import { Link } from 'react-router-dom';
import './SubMyToys.css'


const SubMyToys = ({ data, handelDelete }) => {
     const { photoURL, name, displayName, email, category, description, price, quantity, rating, _id } = data;
     return (
          <tr>
               <td scope="row"><span>{displayName}</span></td>
               <td><span>{name}</span></td>
               <td><img className='myImg' src={photoURL} alt="" /></td>
               <td><span>{category}</span></td>
               <td><span>{price} Tk</span></td>
               <td><span>{rating}</span></td>
               <td className='ms-5'><span>{quantity}</span></td>
               <td>
                    <Link to={`updateToy/${_id}`}>
                         <button type="button" className="btn btn-success me-3">Update</button>
                    </Link>
               </td>
               <td>
                    <button onClick={() => handelDelete(_id)} type="button" className="btn btn-danger">Delete</button>
               </td>
          </tr>
     );
};

export default SubMyToys;