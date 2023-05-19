import React from 'react';
import './ExtraSection2.css'

const ExtraSection2 = () => {
     return (
          <div className=' container'>
               <h1 className='my-5 text-center pt-lg-3'>Extra Section2</h1>
               <div class="row">
                    <div class=" col-lg-6 mb-5">
                         <div class="row pe-lg-5">
                              <div class="shadow p-3 mb-lg-5 bg-white rounded col-lg-7">
                                   <p><b class="text-primary">World</b></p>
                                   <h2>Featured post</h2>
                                   <p class="text-secondary">Nov 12</p>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisic, elit. Corrupti, mollitia, reprehenderit. Quae, maiores soluta velit.</p>
                                   <p class="text-primary">Contirune reading</p>

                              </div>
                              <div class="col-lg-5">
                                   <img class="img-fluid sec2Img w-100 rounded" src="https://img.freepik.com/free-photo/people-making-paper-flowers-craft-art-work-handicraft_53876-22956.jpg?w=996&t=st=1684488840~exp=1684489440~hmac=5ef222f04ae8097ff2a92331fba915b28b7eed06e02c0c3bcc412b1f8d8df3db" alt=""/>
                              </div>
                         </div>
                    </div>
                    <div class="col-lg-6">
                         <div class="row">
                              <div class="shadow p-3 mb-3 bg-white rounded col-lg-7 ">
                                   <p><b class="text-success">Desing</b></p>
                                   <h2>Post title</h2>
                                   <p class="text-secondary">Nov 11</p>
                                   <p>Lorem ipsum dolor sit amet consectetur adipisic, elit. Corrupti, mollitia, reprehenderit. Quae, maiores soluta velit.</p>
                                   <p class="text-primary">Contirune reading</p>

                              </div>
                              <div class="col-lg-5">
                                   <img class="img-fluid sec2Img w-100 rounded" src="https://img.freepik.com/free-vector/flat-lay-arts-crafts-background_23-2149129572.jpg?w=996&t=st=1684488722~exp=1684489322~hmac=98e0e4ea36a6914f36b34fd22296cbb892930ad82d29c7f132e16243113e455e" alt=""/>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ExtraSection2;