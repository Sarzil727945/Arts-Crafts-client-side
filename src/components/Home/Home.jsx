import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ReactTab from './ReactTab/ReactTab';

const Home = () => {
     return (
          <div className='my-5 pt-5'>
               <section className=' pt-5'>
                    <Banner></Banner>
                    <Gallery></Gallery>
                    <ReactTab></ReactTab>
               </section>
          </div>
     );
};

export default Home;