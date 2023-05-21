import React from 'react';
import './ExtraSection1.css'
import 'aos/dist/aos.css';

const ExtraSection1 = () => {
     return (
          <div>
               <h1 className=' text-center my-5'>Top Arts Crafts</h1>
               <div className=' container'>
                    <div className="row align-items-center no-gutter">
                         <div className="col-lg-6">
                              <div className='aos-init aos-animate' data-aos="fade-right"
                                   data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img src="https://img.freepik.com/free-vector/font-design-word-art-craft-with-colorful-crayons_1308-44267.jpg?w=1380&t=st=1684487820~exp=1684488420~hmac=dfcc9a55d0d43b07a6ccaf5658e514c00b2f90b2f6f038ae6eb41ae578120d34" alt="" className="img-fluid" />
                              </div>
                         </div>
                         <div className="col-lg-6 my-3">
                              <h2>Unleashing Artistry through Crafts consectetur adipisicing.</h2>
                              <p>Arts and crafts allow individuals to personalize and customize objects. It offers an opportunity to create unique gifts, home décor, and wearable art that reflect one's personality, style, and interests.</p>
                         </div>
                    </div>
               </div>
               <div className=' container'>
                    <div className="row align-items-center no-gutter">
                         <div className="col-lg-6 my-5">
                              <h2>Crafting Connections Building Artistic Communities.</h2>
                              <p>Arts and crafts play a vital role in education, particularly for children. They encourage sensory exploration, stimulate creativity, and foster cognitive development. Art education promotes visual literacy, fosters appreciation for aesthetics, and nurtures a deeper understanding of artistic concepts.</p>
                         </div>
                         <div className="col-lg-6">
                              <div className='aos-init aos-animate' data-aos="fade-left"
                                   data-aos-offset="300" data-aos-easing="ease-in-sine">
                                   <img className='sec1Img w-100 img-fluid' src="https://img.freepik.com/free-vector/diy-creative-workshop_23-2148517404.jpg?w=740&t=st=1684488156~exp=1684488756~hmac=1a9d04ee76d6b394a85af49c909d91d2df3653f04c636256ad074a529ca3ba2b" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection1;