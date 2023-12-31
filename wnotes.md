#Here is a first level heading for you notes in CS 260

###Things I learned
Git hub is extremely useful when coding.
I will need to keep and organize my notes the best I can to help me progress in my studies.
Here is the link from class
https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md

Here is the link for notes
https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

##Development and producion enviornments

In commercial wb development it is cruical that you keep you test product and you product seperated. 

Furthermore, companies will do this so that their website can be protected and not destroied and mangled from an malicious programmer

Thus, automated integration (CI) processes were designed. **You should never test or experiment in your production area. Such as you AWS server.**

There is a tutorial about how to implement this better. Here is the link https://github.com/webprogramming260/.github/blob/main/profile/essentials/devAndProd/devAndProd.md

##CodePen
*CodePen* is a fantastic way to experiment with all the coding langauges in this class

The unique part about *CodePen* is that it has a small preview window so that you can see what your code looks like

###Portfolio
Another advantage is that you can store you projects here so that you can review it later or share it with others.

##Homework involving *CodePen*
Either create a new pen, or fork an existing example pen.
Conduct the experiment as defined by the assignment.
Save your assignment periodically so that you don't lose any work. In order to keep your CodePen account organized you should consider using pen collections for different technologies.
Submit the pen's URL in Canvas along with a description of some interesting thing that you learned.

#Encription and Let's Encript
today I learned how to use caddy and how it works. I also encripted my website *pdfsimplifer.click*

____________________________________________________________________
**MIDTERM NOTES**
Link Element (<link>):
The <link> element is used to link external resources to an HTML document. It's commonly used to link stylesheets, icons, or other resources that aren't directly part of the HTML content.

Div Tag (<div>):
The <div> element is a generic container used to group and structure content on a web page. It's often used to create sections, divisions, or containers for styling and layout purposes.

Difference Between #title and .grid Selector:
#title is an ID selector and targets a specific element with the ID "title."
.grid is a class selector and targets multiple elements with the class "grid." The key difference is that IDs should be unique on a page, while classes can be used for multiple elements.

Padding vs. Margin:
Padding is the space inside an element, between its content and its border. It affects the spacing of an element's content from its border.
Margin is the space outside an element, which separates it from other elements. It affects the spacing between elements.

Images Displayed Using Flex:
To use the Flexbox layout, you can apply display: flex; to a container element, and its child elements will be arranged as flexible items, allowing for easy alignment and distribution of space.

Padding CSS:
Padding CSS sets the padding (inner space) of an element. For example, padding: 10px; adds 10 pixels of padding to all sides of an element.

Arrow Syntax Function Declaration:
Arrow functions in JavaScript provide a concise way to define functions. For example, 
```javascript
const add = (a, b) => a + b; defines an arrow function for addition.
```

Map with an Array Output:
When you use the map function with an array, it iterates through each element of the array and applies a provided function, returning a new array with the results of the function.

getElementByID and addEventListener:
getElementById is a method to access an HTML element by its unique ID, and addEventListener is used to attach event listeners to elements, so you can respond to events like clicks or keypresses.

JavaScript with # Selector:
When you see a # selector in JavaScript, it typically refers to selecting elements by their ID attribute, e.g., document.querySelector("#elementId");.

True Statements About the DOM:
Without specific options, it's difficult to determine which statements are true. The DOM (Document Object Model) is a tree-like representation of the structure of an HTML document.
    Web Page Structure: The DOM is like a tree representing the structure and content of a web page.

    Works Anywhere: It's not tied to specific software, so you can use it on different devices and platforms.

    Change Web Pages: You can use it to change web pages in real-time.

    Tree of Elements: It organizes elements like a family tree with parents, children, and siblings.

    Built-In Tools: It has built-in tools for making changes to web pages.

    Handles Clicks and More: It can respond to user actions like clicks and keypresses.

    Works on Different Browsers: It's designed to work the same way on different web browsers.

    Loads Web Pages: It helps with loading web pages, and you can do things after the page loads.

    Accessibility: It makes web content accessible to all users, including those with disabilities.

    Helps with Data: It's used for connecting data to web elements.

    Consistent Way for Web Tools: Many web tools use the DOM to work with web pages.


Default Display Property for Span:
By default, the HTML <span> element has a default CSS display property value of "inline," which means it doesn't introduce line breaks and flows with the surrounding text.

Change Div Background Color to Red:
To change the background color of all <div> elements to red, you can use the CSS rule: 
```css
div { background-color: red; }.
```

Display Image with Hyperlink in HTML:
To display an image with a hyperlink in HTML, you can use the following code:
``` html
Copy code
<a href="your-link-here">
  <img src="image-url-here" alt="Image Description">
</a>
```

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
In the CSS box model, the layers, starting from the inside and working out, are as follows: content, padding, border, and margin.


Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
To set the text "troubl" to green while leaving the "double" text unaffected in HTML, you can use the following CSS:
```css
Copy code

.specific-class {
  color: green;
}
```
And apply this class to the element containing the "troubl" text in your HTML.


What will the following code output when executed using a for loop and console.log?
You didn't provide the code, so I can't answer this without seeing the code.
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?
You can change the text color of an element with the ID "byu" to green using JavaScript like this:
```javascript
Copy code
const element = document.getElementById("byu");
element.style.color = "green";
```

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
```html
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second Level Heading: <h2>
First Level Heading: <h1>
Third Level Heading: <h3>
```

How do you declare the document type to be html?
To declare the document type as HTML in an HTML document, you should use the following declaration at the very beginning of your HTML file:
```html
Copy code
<!DOCTYPE html>
```

What is valid JavaScript syntax for if, else, for, while, switch statements?
    if statement: if (condition) { /* code to execute if condition is true */ }
    else statement: if (condition) { /* code if condition is true */ } 
    else { /* code if condition is false */ }
    for loop: for (initialization; condition; increment) { /* code to execute in the loop */ }
    while loop: while (condition) { /* code to execute as long as condition is true */ }
    switch statement:`

    ```javascript
    // Valid JavaScript syntax for if statement
if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}

// Valid JavaScript syntax for for loop
for (let i = 0; i < 5; i++) {
  // code to execute in the loop
}

// Valid JavaScript syntax for while loop
while (condition) {
  // code to execute as long as the condition is true
}

// Valid JavaScript syntax for switch statement
switch (expression) {
  case value1:
    // code to execute for value1
    break;
  case value2:
    // code to execute for value2
    break;
  default:
    // code to execute if no case matches
}
```

What is the correct syntax for creating a JavaScript object?
You can create a JavaScript object using curly braces {} with key-value pairs. For example:
```javascript
Copy code
const person = {
  name: "John",
  age: 30
};
```
Is it possible to add new properties to JavaScript objects?
Yes, it's possible to add new properties to JavaScript objects even after the object is created. For example:
javascript
Copy code
```javascript
person.job = "Engineer"; // Adding a new property
```

If you want to include JavaScript on an HTML page, which tag do you use?
To include JavaScript on an HTML page, you can use the <script> tag. You can place your JavaScript code inside a <script> element in the HTML document, like this:
```html
Copy code
<script>
  // JavaScript code here
</script>
```

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
To change the text "animal" to "crow" while leaving the "fish" text unaffected, you can use JavaScript as follows:
```javascript
Copy code
document.getElementById("elementId").textContent = "crow";
```

Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and a web application, and it's a text-based format that consists of key-value pairs.

What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
chmod: Changes file permissions.
pwd: Prints the current working directory.
cd: Changes the current directory.
ls: Lists files and directories.
vim and nano: Text editors for creating and editing files.
mkdir: Creates a new directory.
mv: Moves or renames files and directories.
rm: Removes files or directories.
man: Displays manual pages for commands.
ssh: Securely connects to remote servers.
ps: Lists running processes.
wget: Downloads files from the internet.
sudo: Allows a user to execute commands with superuser privileges.

Which of the following console command creates a remote shell session?
The console command that creates a remote shell session is ssh.

Which of the following is true when the -la parameter is specified for the ls console command?
When you use the -la parameter with the ls command, it lists all files, including hidden files (those starting with a dot), in a long format. The long format includes details such as permissions, owner, group, file size, and modification date.

Which of the following is true for the domain name banana.fruit.bozo.click:
In the domain name "banana.fruit.bozo.click," each part has a specific role:
"click" is the top-level domain (TLD).
"bozo.click" is the domain name (or second-level domain).
"fruit" is a subdomain of "bozo.click."

Is a web certificate is necessary to use HTTPS?
Yes, a web certificate (SSL/TLS certificate) is necessary to use HTTPS (Hypertext Transfer Protocol Secure). The certificate encrypts data between the server and the client, ensuring a secure and trusted connection.

Can a DNS A record point to an IP address or another A record?
A DNS A (Address) record maps a domain name to an IPv4 address. It cannot directly point to another A record. However, a DNS A record can point to an IP address, and you can use CNAME (Canonical Name) records to create aliases or point to other domain names.

Port 443, 80, 22 is reserved for which protocol?
Port 443 is reserved for HTTPS (HTTP Secure).
Port 80 is reserved for HTTP (Hypertext Transfer Protocol).
Port 22 is reserved for SSH (Secure Shell) for secure remote access.

What will the following code using Promises output when executed? (for this question use a general example of promises)
Promises are used for asynchronous operations. The output of a promise code depends on the specific code and asynchronous tasks it's performing. Typically, you would have to provide a specific code example for a more accurate explanation.

**Promises**
Certainly! Promises are a fundamental part of JavaScript for handling asynchronous operations. They provide a way to work with asynchronous code in a more structured and readable manner. Promises represent a value that might not be available yet but will be at some point in the future. They have three states: pending, fulfilled, and rejected.

Here's an example of a Promise that you can use for your midterm notes:

javascript
Copy code
```javascript
// Example of a Promise to simulate loading data from a server
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate a network request with a timeout
    setTimeout(() => {
      const data = {
        message: "Data fetched successfully",
        result: [1, 2, 3, 4, 5],
      };
      // Resolve the Promise with the fetched data
      resolve(data);
      // In case of an error, you can reject the Promise
      // reject("Error: Failed to fetch data");
    }, 2000); // Simulate a 2-second delay
  });
};

// Using the Promise
fetchData()
  .then((data) => {
    console.log(data.message);
    console.log("Data:", data.result);
  })
  .catch((error) => {
    console.error(error);
  });
  ```
In this example:

We define a fetchData function that returns a Promise. Inside the Promise constructor, we simulate fetching data from a server with a delay using setTimeout.

We resolve the Promise with the fetched data if the operation is successful, and you can use resolve to return the result.

In the case of an error, you can reject the Promise using reject.

We use the .then() method to handle the successful fulfillment of the Promise and the .catch() method to handle errors.

When the Promise resolves, it logs the message and the fetched data to the console. If there's an error, it logs the error message.

This is a basic example of using Promises for asynchronous operations. You can adapt this example and the concept of Promises to handle various asynchronous tasks like fetching data from a server, making API calls, or reading/writing files. Promises are essential for managing non-blocking operations and ensuring that your code remains responsive and maintainable.

You can include this example and explanation in your midterm notes to demonstrate how Promises work in JavaScript.

______________________________________
**NODE.JS**
**FOR THE REST OF THE SEMESTER**
You will be expected to run your front end code from the browser!

https://github.com/webprogramming260/.github/blob/main/profile/webServices/node/node.md

Node.JS is used to manage, organize, and download modules from the cloud.

Here is the code that generates the server.
```
javascript
const http = require('http'); // this is a module to create a server
let foo = {name:"Mark",number:13} //This is creating an object
const server = http.createServer(function (req, res) { 
//This section here is how we are creating he server
//Req stands for request res stands for response
//   res.writeHead(200, { 'Content-Type': 'text/html' });
  res.writeHead(200, { "Content-Type": "application/json"});
  //This code shows how the code is going to respond to a req
//   res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.write(JSON.stringify(foo));
  //This code sends a response body to the req in this case
  //it is a JSON named foo.
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
**Debuging in Node.js**
follow the instructions listed here
https://github.com/webprogramming260/.github/blob/main/profile/webServices/debuggingNode/debuggingNode.md

The debugging works similar to other programs. However here are a couple things

*Important Notes*
1.Nodemon module is great for debuggin node.js. It runs immediatly after a save.
2. "F5" is used for debugging in Node.js
3. "F11" allows you to dive deeper into the orignal code of the creators


______________________________________________________________________
**HUGE note about https and http**
for our program we will need to use http when booting up our data via Node.js
______________________________________________________________________
## **PM2**
When you run a program it will automatically terminate when you close the console. In order to keep the program running after shutdown it need to become a *daemon*. We all have daemons haunting us.

An easy way to manage our deams is through *Process Manager 2 aka PM2*

See this link to see commands for pm2: https://github.com/webprogramming260/.github/blob/main/profile/webServices/pm2/pm2.md

To access your caddy use the command
PS C:\Users\18019\OneDrive\Desktop\CS_260\my_start_up> ssh -i wjw37.pem ubuntu@34.235.87.249

## **UI Testing**
There is so much to test and not enough time to check everything. To remedy that, we can use Playwright to help us
Playwright is a node extension that can be used to overcome a slu of problems. You can use it to test UI stuff.
Here is a link on how to use playwright and how to use it to test stuff.
https://github.com/webprogramming260/.github/blob/main/profile/webServices/uiTesting/uiTesting.md

## Endpoint Testing Jest
End point testing a is a common industry practice. However, it takes a lot of effor to write your own tests. Getting good at this skill will allow you to have a significant advantage over the competetion.

**jest**
Jest is an easier tool to make testing faster because you don't need to run it inside a browser.

```
javascript
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
```

The test function takes a description as a parameter and then the second part of the function calls a function.

See this link and your project folder about endpoints to see how this is done
https://github.com/webprogramming260/.github/blob/main/profile/webServices/endpointTesting/endpointTesting.md

We can make this even simpler by using the "supertest" function
The supertest function allows us to test our code via our environment. Normally, we would have to test it over a webservice. but with this we don't have to worry anymore. :-J

##HTTP methods
HTTP (Hypertext Transfer Protocol) defines a set of request methods that indicate the desired action to be performed for a given resource. Here are the common HTTP methods:

GET:
Used to request data from a specified resource. The GET method should only retrieve data and not modify it.

POST:
Used to submit data to be processed to a specified resource. The data is included in the body of the request.

PUT:
Used to update a resource or create a new resource if it doesn't exist. The entire representation of the resource is replaced.

PATCH:
Similar to PUT, but it is used to apply partial modifications to a resource.

DELETE:
Used to request that a resource be removed or deleted.

HEAD:
Similar to GET, but it asks the server to return only the headers of the response, without the actual data.

OPTIONS:
Used to describe the communication options for the target resource. It can be used to check the server capabilities before sending a request.

TRACE:
Used to perform a message loop-back test along the path to the target resource.

CONNECT:
Reserved for use with proxy servers. It converts the request connection to a transparent TCP/IP tunnel.

**Data Services**
There are many differnt types of databases. One of the most general purpose data services is Mongo DB which stores JSON objects

Here is a great video to help with understanding queries and setting up mongodb https://www.youtube.com/watch?v=daIH4o75KE8

## Cookies
Cookies are HTTP request header. It's essentially a traveling dictionary cookies are created using the `Document` property 
```javascript
allCookies = document.cookie;
```
Cookies are great for authentication processes!

## Websocket
*Websocket is a way for users to speak in real time with another user. Plus, it allows you to send data in realtime as well.*

## React
So basically we are converting our website to become more dynamic and quicker. We can do this by using make `JSX`. 
`JSX` is basically a dynamic HTML code stored in a javascript file.
This great for when you want you body tag on your website to change but you want to keep your header and footer tag the same.

# Web Frameworks
Web frameworks seek to make the job of writing web applications easier by providing tools for completing common application tasks.
One way this is done is through hybrid file formats such as JSX or SFC files which combine HTML and JS files.

### React Tutorial

## Rendering
Elements are the smallest building block of a React page. Often time the body tag our our program is populated by using the <div id="root"> </div>. 
The Render function will display the data for the user.

## Components
Components let you split the UI into independent, reusable pieces, and address each piece in isolation.

## Events
Handling events in React is very similar to handling events in JS except we use camelCase instead.

## More On Components
The primary purpose of a `component` is to generate the user interface. What ever is returned from the render function is inserted into the HTML element.

# VITE

Vite Build Tool:
- Purpose: Helps developers build websites or web apps more quickly and efficiently.
- Key Features: Fast development server, quick startup times, and features like hot module replacement for faster coding.
- Usage: Often used with the Vue.js framework but can also work with other frameworks like React or Svelte.

Vite.js Framework:
- Purpose: Provides a structure for building web applications.
- Key Features: Lightweight and designed to work well with Vue.js, but can be extended to support other JavaScript frameworks.
- Usage: Developers use Vite.js to organize and build the code of their web applications.

What is the relationship between index.html, Main.jsx, and App.jsx?
Index provides the structure for the web page. The main.jsx tells the code to go to App.jsx to get the html, javascript, and css to load the code. The app.jsx holds the code for html, javascript, and css to be injected. 
Basically, the main is the syringe, the app is the formula, and the index is the patient's arm.

# What is the difference between a library and a Framework?
Library provides a tool for a specific functionality whereas
Frameworks provide a set of tools and guidlines for building apps
React is a library and is great for building a UI. Furthermore, it is platform agnostic and can be partnered with other libraries and frameworks.

# Fragments in React
Fragments are a way to group multiple child elements in without introducing more praent elements into the DOM

They are very useful for avoiding unnecessary HTMl elements or when dealing with layout concerns
```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <> // This is the opening fragment
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </> // This is the closing fragment
  );
};

export default MyComponent;
```

# Final Study Guide

1. What ports are used for HTTP, HTTPS, SSH?
http typically use port 80
https typically use port 443
SSH (Secure Shell) typically uses port 22.

2. What do HTTP status codes in the 300, 400, 500 range indicate?
*300 range* indicates redirection (redirecting you to)
*400 range* indicates client errors (bad requests)
*500 range* indicates server error (internal server error)

3. What does the HTTP header content-type allows you to do?
The `Content-Type` header in an HTTP request or response specifies the media type of the resource. It tells the recipient what the data type of the content is and how to properly parse it. For example, it can indicate that the content is in HTML `(text/html)`, JSON `(application/json)`, or XML `(application/xml)`. *Allows you to emphzise the content type*

4. What do the following attributes of a cookie do?
- Domain - Specifies the domain to which the cookie belongs and to which it should be sent. If the domain attribute is not specified, the cookie is valid for the domain that issued the request. *where the cookies come from*
- Path - Path: Specifies the subset of URLs to which the cookie is sent. If a cookie is set with a specific path, it will only be sent to requests made to that path or subdirectories. *The cookie is generated here. We only care about the foo part.*
- SameSite - This attribute is used to control whether a cookie should be restricted to a first-party or same-site context. It helps mitigate the risk of cross-site request forgery attacks. Possible values are "Strict," "Lax," or "None." "Strict" means the cookie is only sent in a first-party context, "Lax" is a more relaxed mode, and "None" means the cookie can be sent in cross-site requests. *only returns cookies to the samesites. Meaning only google websites can use google cookies*
- HTTPOnly  When set, the cookie is not accessible through JavaScript, enhancing security by mitigating the risk of cross-site scripting (XSS) attacks. *not allow JS to run on the browser so it can read the browser*


5. Assuming the following Express middleware, what would be the console.log output for an HTTP GET  request with a URL path of /foo/bar? *look the console logs and see what order the functions are called.*

6. Given the following Express service code: What does the following JavaScript fetch return? *fetch returns status code or response objects (GET,POST,ETC). Also Promises can be returned too* if you see app.use that is an express service code.

7. Given the following MongoDB query
```javascript
{ cost: { $gt: 10 }, name: /fran.*/}
```
Select all the mathcing documents
This code seems to be grabbing any values that are greater than 10 and that has the name that starts with "fran."

8. How should you store user passwords in a database?
Hashed and Salted

9. Assuming the following Node.js service code is executing with websockets, what will be logged to  the console of the web browser? *study what happens on connect, disconnect, and message*

10. What is the WebSocket protocol used for?

11. What is JSX and how are the curly braces rendered? Javascript and HMTL together.
anything after the return is rendered to the screen. {} are used for Js.

12. Assuming a HTML document with a element, 
```HTML
<div id="root"></div>
```
what content will the following React Component Generate?
``` javascript
      function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }
      function App() {
        return (
          <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
          </div>
        );
      }
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
```

13. Assuming a HTML document with a element, 
```HTML
<div id="root"></div>
```
What will the React component do?
``` javascript
    function Numbers() { 
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>) //ul means unordered list which generates bullet points whereas 
      //ol generates 1),2),3), so on so forth
    }
    const root = ReactDOM.createRoot(document.getElementById('root')); 
    root.render(<Numbers/>);
```

14. What does the following React component do?
```javascript
function Example() {
  // Declare a new state variable, which we'll call "count"  
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

15. What are React Hooks used for? 
Hooks are used to modify the state of a component. They handle the state. 
They also handle the lifeclyce of events.

16. What is the useEffect hook used for?
This is used to watch the lifecycle component. If I click a button it will rerun the program.
Basically anytime something is changed(vars,code,etc) the useEffect will update the render. 

17. What does this code do?
```javascript
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
This code creates the routers and allows you to navigate through the different JSX files. This is rendering different components based on what is searched for.

```jsx
export default function App() {
  return (
    // Set up the BrowserRouter for navigation
    <BrowserRouter>
      {/* Define the routes using the Routes component */}
      <Routes>
        {/* Define a route for the root path */}
        <Route path="/" element={<Layout />}>
          {/* Specify the default route for the root path */}
          <Route index element={<Home />} />
          
          {/* Define a route for the "blogs" path */}
          <Route path="blogs" element={<Blogs />} />
          
          {/* Define a route for the "contact" path */}
          <Route path="contact" element={<Contact />} />
          
          {/* Define a catch-all route for any other path */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

18. What role does npm play in web development?
It manages your node packages.
19. What does package.json do in a npm project?
It lists all the packages you have. When you deploy your scripts it allows you to do that. It also provides you a place to place infomation about your project.

20. What does the fetch function do?

21. What does node.js do?
Runs your server.

22. What does Vite do?
Vite allows you to bundle all your code together so that it can be deployed to a server. It also transposes your jsx code to normal javascript.
