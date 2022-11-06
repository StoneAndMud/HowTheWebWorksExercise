// Part One: Solidify Terminology
// In your own terms, define the following terms:

// What is HTTP?
Hypertext Transfer Protocol

// What is a URL?
Uniform Resource Locator

// What is DNS?
Domain Name System

// What is a query string?
"extra info", search terms, info from forms, etc...

// What are two HTTP verbs and how are they different?
Get: Requests information from the server.
Post: Sends information to the server.

// What is an HTTP request?
An http request is a request from your computer to a server.

// What is an HTTP response?
an http response is the content you were looking for from the server.

// What is an HTTP header? Give a couple examples of request and response headers you have seen.
Hostname: returns the name of the site you are searching for 
Date: returns the date of the request
Language: returns the content in the language you want to view the content.

// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
1 Request: My Web Browser  — GET/HTTP/1.1 Headers —> Server
2 Internal Work: My Browser	Server <—> Database Server
3 Response: My Browser <— Headers <html></html> — Server

// Part Two: Practice Tools
// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”


// Use dig to find what the IP address is for icanhazdadjoke.com
172.67.198.173
104.21.66.15

// Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.


// Part Three: Explore Dev Tools
// Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.


// Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.


// Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.


// Part Four: Explore the URL API
// At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

// Read about the URL API

// Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.