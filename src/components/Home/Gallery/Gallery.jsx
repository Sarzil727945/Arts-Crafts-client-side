import React from 'react';
import './Gallery.css';
import 'aos/dist/aos.css';
const Gallery = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 pt-lg-4 text-center'>Gallery Section</h1>
               <div className="row my-4  no-gutter">
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://img.freepik.com/free-vector/diy-creative-workshop-concept-with-hands-illustration_23-2148530493.jpg?w=996&t=st=1684456099~exp=1684456699~hmac=6c0390330869cee50e105b3393b49e29ba6f237c7e0874f8983244eab619e5bd" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom" >
                         <img src="https://img.freepik.com/premium-photo/paint-brushes-paints_200402-4922.jpg?w=996" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-left"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://img.freepik.com/premium-photo/drawing-with-brush-mandala-stone_102290-201.jpg?w=996" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
               </div>
               <div className="row  no-gutter">
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-right"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://img.freepik.com/premium-photo/human-hand-holding-origami-bird-craft-product_23-2148188394.jpg?w=826" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 mb-3 aos-init aos-animate" data-aos="fade-up"
                         data-aos-anchor-placement="center-bottom">
                         <img src="https://img.freepik.com/free-photo/wooden-art-pieces-painting-process_23-2148271008.jpg?w=996&t=st=1684456677~exp=1684457277~hmac=fd493d31573337777cc89c9a792eb6568fc681b400a7da6f2508be02bd0abd5a" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>
                    <div className="col-lg-4 aos-init aos-animate" data-aos="fade-left"
                         data-aos-offset="300" data-aos-easing="ease-in-sine">
                         <img src="https://img.freepik.com/premium-photo/bank-pencils-with-hearts-wrapped-with-string-wooden-table-handmade_71756-413.jpg?w=996" alt="" className=' img-fluid rounded w-100  galleryImg' />
                    </div>

               </div>
          </div>
     );
};

export default Gallery;