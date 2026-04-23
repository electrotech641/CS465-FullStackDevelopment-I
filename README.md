Architecture

    Starting with Express HTML, pages loaded fast and all logic was handled by the server. This is great for those fast initial load 
    times, however every navigation triggers the server to send a full page render, increasing server load. This is not ideal for a 
    large user base. Javascript added some client side functionality, since it runs in the browser. It allows for dynamic content where 
    the UI can update without triggering a full page re-load from the server. This eases server load for larger user bases. The 
    single page application, or SPA, loaded all the application logic upfront to the client. All navigation and routing is handled by the 
    browser, while the server only provided data as the SPA requests it, instead of full HTML pages. This results in a slower initial 
    load, but a much more responsive UI after that. 

    We used MongoDB as our NoSQL backend database because of its high scalability and schema-less design. This makes it extremely 
    flexibility in dealing with different types of records, which in our case was vacation trips and users. This allows the 
    flexibility for trips to have different key-value pairs when necessary instead of defining a strict data structure. MongoDB 
    works extremely well with JSON, which is what we used with Angular, so naturally it was the best choice for our backend database. 

Functionality

    Javascript is a full programming language where JSON is just a data format. This ties the frontent to the backend where Angular 
    sends HTTP requests with JSON bodies that the backend can then use for operations in javascript and the backend to the 
    frontend when a JSON document is returned and Angular can bind the data contained in the JSON to UI components. The backend can also
    take any JSON documents and store them in a MongoDB database for later retrieval and usage by the front or backend operations. 
    
    One big efficiency came from refactoring HTML elements into reusable components for the SPA. Prime example is the trip cards. This 
    created a layout for each trip that could pull data from a JSON and display it consistently in the UI. By creating an array 
    of trips and using a loop to display the cards, the HTML was shrunk down to just a few lines, no matter how big the trip
    dataset gets. 

Testing

    Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Reflection

    How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
