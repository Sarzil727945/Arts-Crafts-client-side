import React from 'react';
import './ExtraSection1.css'

const ExtraSection1 = () => {
     return (
          <div>
               <h1 className=' text-center my-5'>Extra Section1 </h1>
               <div className=' container'>
                    <div class="row align-items-center">
                         <div class="col-lg-5">
                              <div>
                                   <img src="https://img.freepik.com/free-vector/font-design-word-art-craft-with-colorful-crayons_1308-44267.jpg?w=1380&t=st=1684487820~exp=1684488420~hmac=dfcc9a55d0d43b07a6ccaf5658e514c00b2f90b2f6f038ae6eb41ae578120d34" alt="" class="img-fluid" />
                              </div>
                         </div>
                         <div class="col-lg-7 my-3">
                              <h2>Lorem, ipsum, dolor sit amet consectetur adipisicing.</h2>
                              <p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptates labore culpa porro dolore, suscipit minus hic laudantium nisi minima. Sunt obcaecati culpa fugiat dolorem.</p>
                         </div>
                    </div>
               </div>
               <div className=' container'>
                    <div class="row align-items-center">
                         <div class="col-lg-7 my-5">
                              <h2>Lorem, ipsum, dolor sit amet consectetur adipisicing.</h2>
                              <p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptates labore culpa porro dolore, suscipit minus hic laudantium nisi minima. Sunt obcaecati culpa fugiat dolorem.</p>
                         </div>
                         <div class="col-lg-5">
                              <div>
                                   <img className='sec1Img w-100' src="https://img.freepik.com/free-vector/diy-creative-workshop_23-2148517404.jpg?w=740&t=st=1684488156~exp=1684488756~hmac=1a9d04ee76d6b394a85af49c909d91d2df3653f04c636256ad074a529ca3ba2b" alt="" class="img-fluid" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection1;