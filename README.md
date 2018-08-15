# MyMedicareBot Code Test


## Test Description
There were two requirements:
1) A text input box where you can enter in a string of text. There should be a submit button that when clicked makes an API call back to your server where it reverses the string and sends it back to the frontend and displays the result on the page.

2) A text input box which accepts a URL. There should be a dropdown with options for GET and POST. There should be a submit button. When the submit button is clicked the URL and HTTP method should be sent to the backend where a request is made to the URL using the specified HTTP method. The data recieved back from the URL should be returned as a string to the frontend and displayed there.


## Running App Locally

After cloning the project, perform the following two steps:
```bash
# 1. Install Dependencies
npm i 

# 2. Start the App
npm start

```

If developing locally and would like to enable hot-reloading, run the following after installing dependencies:
```bash
npm run start-dev
```


## Project Organization

This is small React app being server from a node server using Express.

**Client-Side**

All the client-side code is in `/src/`. Here is a brief explanation of the main files and folders:
```
- src/
  |
  - index.js    - The entry point for the app, and where React is bootstrapped
  |
  - index.html  - The base HTML file for the app. This is directly copied over to /dist on build
  |
  - util.js     - Shared functions in the app
  |
  - components/  - Folder with all component files in the app. As there aren't many, it is only one level deep
  |
  - scss/       - All CSS styles used in the app

```

**Server-Side**

As this is a simple server that responds to just two endpoints, the server is contained within `/index.js`, at the project root.

The server either serves the `index.html`, or responds to the two specific api endpoints.



## Tools Used

- [React](https://reactjs.org/docs)
- [Express](http://expressjs.com/)
- [Axios](https://github.com/axios/axios) 
- [Webpack](https://webpack.js.org/)
- [Sass](https://sass-lang.com/guide)
