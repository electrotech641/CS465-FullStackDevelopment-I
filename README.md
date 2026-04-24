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

    Methods are the intent of requests, including GET, used to retrieve data only, POST, used to create new data, PUT, which is used to 
    update existing data, and DELETE, used to remove data. Testing of these methods will depend on which one you are testing, as each 
    one will be expecting specific data. GET being the simpleist as it just needs to know what data to retrieve, POST/PUT needs the data 
    it is creating/editing.

    Endpoints are where the client needs to send the requests and typically resembles a folder structure, for example www.blahblah.com/api/trips. 
    Depending on the endpoint route, controller, and model, the endpoint could be expecting a GET, POST/PUT, or DELETE type of request. 

    Security determines who is authorized to access what and adding more layers of security, such as JWT tokens, password hashing, HTTPS, and 
    CORS, this adds complexity to the way we test as well. Depending on what we are testing and how many layers of security, we might have 
    to ensure we have valid tokens, headers, and authorization, as well as ensuring tokens aren't expired. 

Reflection

    This course has directly contributed to me being promoted to project manager in my current career and brought me one step closer to 
    completing my degree in computer science. I have learned lots of skills in my degree path, and this one specifically helped me bring 
    all of that together in a full stack application. It helped me see in a real world setting how all of these systems work together to form 
    a seamless user experience, from the backend database, to the user facing interface, and everything in between, such as security layers. 
    I have strengthened my ability to problem solve by evaluating technical information and identifying root causes. All of this makes me a 
    much more marketable candidate should I choose a new career path. Bundled with my 20 years of professional experience, these new skills 
    will help me lead projects with structure, adapt to new systems and tools, and analyze problems and propose solutions. 
