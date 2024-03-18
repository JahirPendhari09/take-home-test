# take-home-test

## Overview

This repository contains the code for a Todo App designed using React with Typescript  for an assignment given by Krinay Infotech Pvt Ltd.


## Technologies Used
### 1. TypeScript 
This project is developed using TypeScript, a superset of JavaScript that adds static typing to the language. TypeScript offers several benefits, including:

<li> Type Safety:- TypeScript provides compile-time type checking, helping catch errors and bugs early in the development process.</li>
<li>Enhanced IDE Support:-IDEs and text editors with TypeScript support offer advanced features like code completion, refactoring tools, and type information tooltips.Improved Code Maintainability: With explicit type annotations, code becomes more self-documenting and easier to understand, reducing the likelihood of introducing errors during maintenance.</li>
<li>Better Collaboration:-TypeScript's type system helps clarify interfaces and function signatures, facilitating collaboration among team members.</li>
<li>Ecosystem Compatibility:- TypeScript seamlessly integrates with existing JavaScript libraries and frameworks, allowing gradual adoption in projects.</li>
         
### 2. React

React is a JavaScript library for building Ssamless UI. Its component-based architecture makes it easy to manage and organize UI elements, promoting reusability and maintainability.React Provide SOC ( Seperation of Concerns ) so we can separate our app.

### 3. Axios

Axios is a promise-based HTTP client for making asynchronous requests in JavaScript. It simplifies data fetching and handling HTTP responses, making it a reliable choice for API interactions in React applications.

### 4. Jest Testing 

Jest is a popular JavaScript testing framework developed by Facebook. It's commonly used for testing JavaScript code, including React applications. Jest provides a simple and efficient way to write tests for your code, with features like automatic mocking, snapshot testing, and parallel test execution.

### 5. Node.js 

Node.js is commonly used for building server-side applications, APIs (Application Programming Interfaces), and various other types of software. Its event-driven, non-blocking I/O model makes it efficient and suitable for building scalable and high-performance applications.

### 6. Express 

Express.js, commonly referred to as Express, is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It is designed to make the process of building web servers and APIs in Node.js easier and more efficient

### 7. MongoDB 

MongoDB is a popular open-source NoSQL database management system that stores data in a flexible, JSON-like format known as BSON (Binary JSON). It is designed to handle large volumes of data and provides high performance, scalability, and flexibility for modern applications.


## Deplolyed App
Frontend: https://take-home-test-assignment.netlify.app/
<br/>
Backend: https://home-take-test-backend.onrender.com/


 ## How to Run <br/>
   <h2>Installation ( Frontend ) </h2>
   
   Clone the repository:   ``` git clone https://github.com/JahirPendhari09/take-home-test.git ``` <br/>
   Navigate to the project directory:   ``` cd frontend ``` <br/>
   Navigate to the project directory:   ``` cd todo_app ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm start ``` <br/>
   Open your browser and visit:   ``` http://localhost:3000 ``` <br/>

   <h2>Installation ( Backend )</h2>
   
   Clone the repository:   ``` git clone https://github.com/JahirPendhari09/take-home-test.git ``` <br/>
   Navigate to the project directory:   ``` cd backend ``` <br/>
   Install the dependencies:   ``` npm install ``` <br/>
   Start the development server:   ``` npm run server ``` <br/>
   Open your browser and visit:   ``` http://localhost:8080 ``` <br/>
   

   api:   ``` https://home-take-test-backend.onrender.com/ ``` <br/>

   <h2>Endpoints</h2>
   <h3>Get All Todos</h3>
   <pre><code>GET api/todos/</code></pre>
   <h3>Create new Todo</h3>
   <pre><code>POST api/todos/create/</code></pre>
   <h3> Update Todo</h3>
   <pre><code>PATCH api/todos/update/:id</code></pre>
   <h3> Delete Todo</h3>
   <pre><code>DELETE api/todos/delete/:id</code></pre>

   # Credits <br/>
   This project was developed by ```Jahir Pendhari``` as a part of ```Masai School``` training program.

   <p>Feel free to explore and integrate these endpoints into your application.</p>

