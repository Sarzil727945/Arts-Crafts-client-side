import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import ReactTab from './ReactTab/ReactTab';
import ExtraSection1 from './ExtraSection1/ExtraSection1';
import ExtraSection2 from './ExtraSection2/ExtraSection2';
import useTitle from '../../hooks/useTitle';

const Home = () => {
     useTitle('Home')

     return (
          <div className='my-5 pt-5'>
               <section className=' pt-5'>
                    <Banner></Banner>
                    <Gallery></Gallery>
                    <ExtraSection1></ExtraSection1>
                    <ExtraSection2></ExtraSection2>
                    <ReactTab></ReactTab>
               </section>
          </div>
     );
};

export default Home;