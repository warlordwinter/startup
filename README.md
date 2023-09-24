# PDF simplifier

### Elevator Pitch
Have you ever had a super long PDF or document that you didn't want to read? What if I told you that there was a website that would read a PDF and make it easier for you to understand by providing an AI assistant for you to ask questions? This amazing tool is called *pdfsimplifer.click* and it was made for you.


### Design
Here is my front-end design for my project. A back-end design will be added later.

![Mock](1.jpg)
![Mock](2.jpg)
![Mock](3.jpg)
![Mock](4.jpg)

### Key Features

- Secure login over HTTPS

- Ability for the user to upload their own PDFS

- Ability for the User to download their simplified PDF.

- An AI chat box is provided for the user to ask questions.

- Past PDFs of the user are stored in their account.

### Technologies
I will utilize the technologies in the following ways.

-**HTML** HTML Structure is showcased through the structure of the webpage. There will be three web pages. This includes creating the layout for the PDF viewer, user dashboard, and AI chatbox. One page will be used for the introduction page. Another page will be for the User's Dashboard. The last page will be for the Login.

-**CSS** Application's styling is used in chatboxs, screen headers, PDF displayers, and dynamic colors. 

**JavaScript** Provides login capability, button connections, and collection of text box information. It will also be used to implement the AI chatbox, handle PDF uploads, and make the user experience smoother.

**Service**
    - Login Endpoints
    - Manage User's data.
    - Retrieving the previous PDFs
    - Storing and submitting PDFs

**DB** Will be used to store the User's PDFs and login data.

**Login** Registers and logins the user. User credentials are stored in the database.

**WebSocket** The web socket will be used for real-time communication with the AI assistant.

**React** React will help build the PDF viewer, the user dashboard, and the AI chatbox.
