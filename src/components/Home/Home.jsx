import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';

const Home = () => {
     return (
          <div className='my-5 pt-5'>
               <section className=' pt-5'>
                    <Banner></Banner>
                    <Gallery></Gallery>
               </section>
          </div>
     );
};

export default Home;