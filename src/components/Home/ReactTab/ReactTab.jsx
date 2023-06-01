import React, { useEffect, useState } from 'react';
import './ReactTab.css'
import Tab1 from './Tab1/Tab1';
import Tab2 from './Tab2/Tab2';
import Tab3 from './Tab3/Tab3';

const ReactTab = () => {
     const [toggleState, setToggleState] = useState(1);
     const [isLoading, setIsLoading] = useState(true);
     const [tab1Data, setTab1Data] = useState([])
     const [tab2Data, setTab2Data] = useState([])
     const [tab3Data, setTab3Data] = useState([])

     useEffect(() => {
          fetch('https://assignment11-server-site-delta.vercel.app/Toy')
               .then(res => res.json())
               .then(data => {
                    const Tab1Data = data.filter(data => data.category === "Sculpting and Modeling")
                    const Tab2Data = data.filter(data => data.category === "Jewelry Making")
                    const Tab3Data = data.filter(data => data.category === "Drawing and Coloring")
                    setTab1Data(Tab1Data)
                    setTab2Data(Tab2Data)
                    setTab3Data(Tab3Data)
                    setIsLoading(false);
               })
     }, []);

     const toggleTab = (index) => {
          setToggleState(index);
     };
     return (
          <div className="container mt-5">
               <h1 className=' my-5 text-center'>Shop by Category</h1>
               <div className="bloc-tabs">
                    <button
                         className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(1)}
                    >
                         Sculpting and Modeling
                    </button>
                    <button
                         className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(2)}
                    >
                         Jewelry Making
                    </button>
                    <button
                         className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(3)}
                    >
                         Drawing and Coloring
                    </button>
               </div>

               <div className="content-tabs">
                    <div
                         className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-4 text-center'>Sculpting and Modeling</h1>
                         {
                              isLoading && <div className="text-center my-5">
                                   <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                   </div>
                              </div>
                         }
                         <div className='row mb-2'>
                              {
                                   tab1Data?.map(data => <Tab1
                                        key={data._id}
                                        data={data}
                                   ></Tab1>)
                              }
                         </div>
                    </div>

                    <div
                         className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-4 text-center'>Jewelry Making</h1>
                         {
                              isLoading && <div className="text-center my-5">
                                   <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                   </div>
                              </div>
                         }
                         <div className=' row mb-2'>
                              {
                                   tab2Data?.map(data => <Tab2
                                        key={data._id}
                                        data={data}
                                   ></Tab2>)
                              }
                         </div>
                    </div>

                    <div
                         className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-4 text-center'>Sculpting and Modeling</h1>
                         {
                              isLoading && <div className="text-center my-5">
                                   <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                   </div>
                              </div>
                         }
                         <div className='row mb-2'>
                              {
                                   tab3Data?.map(data => <Tab3
                                        key={data._id}
                                        data={data}
                                   ></Tab3>)
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ReactTab;