import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
     useTitle('Blog')

     return (
          <div className='mt-5 pt-5'>
               <h1 className='py-lg-5 text-center'>Question Answer</h1>
               <div className='my-5 container'>
                    <div className="accordion" id="accordionExample">
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                   <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                   </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>Access Token:</b> An access token is a credential that is issued by an authentication server after a user successfully authenticates and grants permission to an application. It represents the user's authorization to access specific resources or perform certain actions on behalf of the user. Access tokens are typically short-lived and have an expiration time, after which they become invalid. They are used to authenticate API requests to protected resources by including them in the request headers. <br />

                                        <b>Refresh Token:</b> A refresh token is also issued by the authentication server but has a longer lifetime compared to the access token. It is used to obtain a new access token once the previous one expires. When an access token expires, instead of requiring the user to re-authenticate, the application can use the refresh token to request a new access token from the server without involving the user. This helps to improve the user experience by avoiding frequent re-authentication. <br />

                                        <b>In-memory storage:</b> For web applications, you can store the tokens in memory variables, which are cleared when the user closes the browser. This approach is suitable if you don't need to persist the tokens across sessions or page refreshes, and you obtain new tokens each time the user logs in. <br />

                                        <b>Cookies:</b> You can store the tokens in HTTP-only secure cookies, which are accessible by the server but not by JavaScript code running in the browser. This approach provides some level of protection against cross-site scripting (XSS) attacks. However, be cautious about the security implications and make sure to set the appropriate expiration times for the cookies.
                                        <br />

                                        <b>Local storage or session storage:</b> These are browser-based storage mechanisms that allow storing data on the client-side. While convenient, these storage options are more vulnerable to cross-site scripting (XSS) attacks. If you choose this approach, make sure to take appropriate security measures and avoid storing sensitive information in these storage mechanisms. <br />
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingTwo">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Compare SQL and NoSQL databases?                                   </button>
                              </h2>
                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>SQL: </b> databases are based on the relational data model. They organize data into structured tables with predefined schemas, where relationships between tables are established through primary and foreign keys.
                                        SQL databases typically scale vertically by adding more resources to a single server. While they can handle a significant amount of data, their scalability is limited by the capacity of a single machine.
                                        SQL databases have a rigid schema, meaning that the structure of the data is defined in advance. Any changes to the schema require altering the tables, which can be complex and time-consuming.
                                        SQL databases use the SQL language, a standardized language for querying and manipulating structured data. SQL provides powerful querying capabilities with a rich set of operators, functions, and joins. <br />

                                        <b>NoSQL: </b>NoSQL databases use various data models, such as key-value, document, columnar, and graph. They provide more flexibility in data representation and do not enforce rigid schemas. NoSQL databases can handle unstructured or semi-structured data more efficiently.NoSQL databases are designed for horizontal scalability. They distribute data across multiple servers, allowing for seamless scalability by adding more servers to the database cluster. This makes them more suitable for handling large-scale, high-volume applications.NoSQL databases offer schema flexibility, allowing developers to store data without predefined structures. This makes them suitable for scenarios where the data schema is dynamic or evolves over time.NoSQL databases often have their own query languages or APIs specific to the data model they support. Some NoSQL databases provide query languages similar to SQL, while others offer simpler key-value or document-based retrieval mechanisms.


                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingThree">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What is express js? What is Nest JS?                                   </button>
                              </h2>
                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>Express.js :</b> is a minimalist web framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs. Express.js offers a lightweight set of features and middleware that allow developers to handle HTTP requests, define routes, manage sessions, and interact with databases.
                                        Key features of Express.js include:
                                        Routing: Express.js provides an intuitive routing system for defining endpoints and handling HTTP methods (GET, POST, PUT, DELETE, etc.).
                                        Middleware: Express.js offers a middleware architecture that allows developers to plug in functionality at various stages of the request-response cycle, such as authentication, logging, parsing request bodies, error handling, and more.
                                        Template engines: Express.js supports various template engines like EJS, Handlebars, and Pug, enabling server-side rendering of dynamic web pages.
                                        Extensibility: Express.js is highly extensible, allowing developers to incorporate additional modules and libraries to enhance the functionality of their applications. <br />



                                        <b>Nest.js: </b> is a progressive and opinionated web application framework built with TypeScript and heavily inspired by Angular's architectural concepts. It combines elements of object-oriented programming, functional programming, and reactive programming to provide a robust and structured development experience.Nest.js aims to provide a structured and scalable development experience while leveraging the power of TypeScript and the familiarity of Angular's concepts. It is well-suited for building enterprise-level applications and APIs.
                                   </div>
                              </div>
                         </div>
                         <div className="accordion-item">
                              <h2 className="accordion-header" id="headingFour">
                                   <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is MongoDB aggregate and how does it work?                                   </button>
                              </h2>
                              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                   <div className="accordion-body">
                                        <b>MongoDB:</b>
                                        In MongoDB, the aggregate function is used to perform advanced data analysis and aggregation operations on collections. It allows you to process and transform data in a pipeline-like manner, applying a series of stages to the documents in a collection and producing computed results.
                                        MongoDB provides a wide range of additional stages to perform various operations in the aggregation pipeline. These include $unwind (to deconstruct arrays), $limit (to limit the number of documents in the output), $skip (to skip a specified number of documents), $facet (to perform multiple independent aggregations in a single pipeline), and more.
                                        Each stage in the aggregation pipeline processes the documents from the previous stage and passes the transformed result to the next stage. The output of the final stage is the aggregated result that matches your specified criteria.
                                        The MongoDB aggregate function is powerful and flexible, allowing you to perform complex data transformations, grouping, and calculations in a single query. It enables you to leverage the full potential of MongoDB's document-based data model and perform advanced analytics on your collections.
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Blog;