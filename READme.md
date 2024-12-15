Browser History API :

This project is a simple backend API built with Node.js and Express.js to simulate browser history functionality, including visiting new pages, navigating back, and moving forward.

Features :

1. Visit a new page and add it to the browsing history.

2. Navigate back to the previous page.

3. Navigate forward to a page in the forward history.

4. Retrieve the current page being viewed.

Endpoints:
Visit a URL :

1. POST /visit
   Body: { "url": "example.com" }
   Go Back

2. GET /back
   Go Forward

3. GET /forward
   Get Current Page

4. GET /current
