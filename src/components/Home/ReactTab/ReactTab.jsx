import React, { useState } from 'react';
import './ReactTab.css'

const ReactTab = () => {
     const [toggleState, setToggleState] = useState(1);

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
                         <h2 className=' fw-bold'>Educational and learning</h2>
                         <hr />
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                              vel voluptatum?
                         </p>
                    </div>

                    <div
                         className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                         <h2 className=' fw-bold'>Language Toys</h2>
                         <hr />
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                              voluptatum qui adipisci.
                         </p>
                    </div>

                    <div
                         className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                         <h2 className=' fw-bold'>Science Toys</h2>
                         <hr />
                         <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                              Accusamus in quia odit aspernatur provident et ad vel distinctio
                              recusandae totam quidem repudiandae omnis veritatis nostrum
                              laboriosam architecto optio rem, dignissimos voluptatum beatae
                              aperiam voluptatem atque. Beatae rerum dolores sunt.
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default ReactTab;