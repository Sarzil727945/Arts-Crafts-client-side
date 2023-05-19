import React, { useEffect, useState } from 'react';
import './ReactTab.css'
import Tab1 from './Tab1/Tab1';
import Tab2 from './Tab2/Tab2';
import Tab3 from './Tab3/Tab3';

const ReactTab = () => {
     const [toggleState, setToggleState] = useState(1);
     const [tabData, SetTabData] = useState([]);

     useEffect(() => {
          fetch('../../../../public/TabData.json')
               .then(res => res.json())
               .then(data => {
                    SetTabData(data);
               })
     }, []);

     const Tab1Data = tabData[0];
     const Tab2Data = tabData[1];
     const Tab3Data = tabData[2];


     const toggleTab = (index) => {
          setToggleState(index);
     };
     return (
          <div className="container mt-5">
               <h1 className=' my-5 text-center'>Shop By Category</h1>
               <div className="bloc-tabs">
                    <button
                         className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(1)}
                    >
                         Educational and learning
                    </button>
                    <button
                         className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(2)}
                    >
                         Language Toys
                    </button>
                    <button
                         className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(3)}
                    >
                         Science Toys
                    </button>
               </div>

               <div className="content-tabs">
                    <div
                         className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-3 text-center'>Tab1</h1>
                         <div className='row mb-2'>
                              {
                                   Tab1Data?.map(data => <Tab1
                                        key={data.id}
                                        data={data}
                                   ></Tab1>)
                              }
                         </div>
                    </div>

                    <div
                         className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-3 text-center'>Tab2</h1>
                         <div className=' row mb-2'>
                              {
                                   Tab2Data?.map(data => <Tab2
                                        key={data.id}
                                        data={data}
                                   ></Tab2>)
                              }
                         </div>
                    </div>

                    <div
                         className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-3 text-center'>Tab3</h1>
                         <div className='row mb-2'>
                              {
                                   Tab3Data?.map(data => <Tab3
                                        key={data.id}
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