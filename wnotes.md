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
Arrow functions in JavaScript provide a concise way to define functions. For example, const add = (a, b) => a + b; defines an arrow function for addition.

Map with an Array Output:
When you use the map function with an array, it iterates through each element of the array and applies a provided function, returning a new array with the results of the function.

getElementByID and addEventListener:
getElementById is a method to access an HTML element by its unique ID, and addEventListener is used to attach event listeners to elements, so you can respond to events like clicks or keypresses.

JavaScript with # Selector:
When you see a # selector in JavaScript, it typically refers to selecting elements by their ID attribute, e.g., document.querySelector("#elementId");.

True Statements About the DOM:
Without specific options, it's difficult to determine which statements are true. The DOM (Document Object Model) is a tree-like representation of the structure of an HTML document.

Default Display Property for Span:
By default, the HTML <span> element has a default CSS display property value of "inline," which means it doesn't introduce line breaks and flows with the surrounding text.

Change Div Background Color to Red:
To change the background color of all <div> elements to red, you can use the CSS rule: div { background-color: red; }.

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

How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?
You can change the text color of an element with the ID "byu" to green using JavaScript like this:
javascript
Copy code
const element = document.getElementById("byu");
element.style.color = "green";

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second Level Heading: <h2>
First Level Heading: <h1>
Third Level Heading: <h3>

How do you declare the document type to be html?
To declare the document type as HTML in an HTML document, you should use the following declaration at the very beginning of your HTML file:
html
Copy code
<!DOCTYPE html>

What is valid JavaScript syntax for if, else, for, while, switch statements?
if statement: if (condition) { /* code to execute if condition is true */ }
else statement: if (condition) { /* code if condition is true */ } else { /* code if condition is false */ }
for loop: for (initialization; condition; increment) { /* code to execute in the loop */ }
while loop: while (condition) { /* code to execute as long as condition is true */ }
switch statement:
```javascript
Copy code
switch (expression) {
  case value1:
    /* code to execute for value1 */
    break;
  case value2:
    /* code to execute for value2 */
    break;
  default:
    /* code to execute if no case matches */
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
person.job = "Engineer"; // Adding a new property

If you want to include JavaScript on an HTML page, which tag do you use?
To include JavaScript on an HTML page, you can use the <script> tag. You can place your JavaScript code inside a <script> element in the HTML document, like this:
html
Copy code
<script>
  // JavaScript code here
</script>

Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
To change the text "animal" to "crow" while leaving the "fish" text unaffected, you can use JavaScript as follows:
javascript
Copy code
document.getElementById("elementId").textContent = "crow";
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





