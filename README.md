# Stock Exchange Survey

<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/ioanniskousis/stock-exchange">
    <img src="src/resources/images/microverse.png" alt="Microverse Logo" width="80" height="80">
  </a>
  
  <h3 align="center">The Magic Books Application</h3>
  
  <p align="center">
    This project is part of the Microverse curriculum in React course!
    <br />
    <a href="https://github.com/ioanniskousis/stock-exchange"><strong>Explore the docs</strong></a>
    <br />
    <a href="https://stock-exchange-jgk.herokuapp.com">Live Version</a>
    <br />
    <a href="https://github.com/ioanniskousis/stock-exchange/issues">Report Bug</a>
    <span> - </span>
    <a href="https://github.com/ioanniskousis/stock-exchange/issues">Request Feature</a>
  </p>
</p>

## This is a Book Store application

<hr />

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Screen Shots](#screen-shots)
- [About the Project](#about-the-project)
- [Application Instructions](#application-instructions)
- [Live Version](#live-version)
- [System Requierments](#system-requierments)
- [Development](#development)
- [Dependencies](#dependencies)
- [Built With](#built-with)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

## Screen Shots
<img src="./src/resources/images/stock-exchange.png" alt="stock-exchange.png">
<hr />
<img src="./src/resources/images/stock-exchange1.png" alt="stock-exchange.png">
<hr />

<!-- ABOUT THE PROJECT -->

## About The Project

The project was created using the create-react-app model

The project files tree:

```
-src  
  -components  
    App.js  
    book.js  
    CategoryFilter.js  
  -containers  
    booksList.js  
    booksForm.js  
  -actions  
    index.js  
  -reducers  
    books.js  
    index.js  
    filter.js  
  index.js  
  booksSeed.js  
```
  - The entry point is root **index.js** where the **App** components is render through the **Container** components of Redux. 
  - Componets **BooksList, Book, and BooksForm** are held in respective files in **components/** folder  
  - Actions **createBook** and **removeBook** are in **actions/index.js**  
  - Reducers are in **reducers/** folder, currently only 1, the **booksReducer** in reducers/books.js is combined into **rootReducer** held in reducers/index.js  
  - The **App** component renders **BooksList** and **BooksForm** components  
  - The **BookList** components renders the **books table**. Implements removing books feature  
  - The **BooksForm** adds new books given that title and category are not empty  
  - The **Book** component renders a **table row** with a book's data  
  - The **booksSeed** array initializes the state with a set of books  
  - The **CategoryFilter** implements the category filtering on the books  

<hr/>

<!-- ABOUT THE PROJECT -->

## Application Instructions

<hr/>

## Live Version

[Heroku](https://stock-exchange-jgk.herokuapp.com)

<hr/>

## System Requierments

- JavaScript Enabled
- You need to Disable Cross-Origin-Restrictions from your browser if you want to open the index.html from your file system without using a server.

<hr/>

## Development

- Clone the project

```
  https://github.com/ioanniskousis/stock-exchange.git

  Use VSCode and Live Server to show index.html
  Since webpack is used, run 'npm run build' on you terminal before opening  
  run : **npm start** to open the project using localhost:3000  
```

<hr/>

## Dependencies

please run

```
  npm run build
```

to comply with the dependencies held in package.json

<hr/>

## Built With

This project was built using these technologies.

- React
- Redux
- API
- CSS3
- webpack
- Git - GitHub
- ESLint
- Stylelint
- heroku

<hr/>

<!-- CONTACT -->

## Contributors

:bust_in_silhouette:
​

## Ioannis Kousis

- Github: [@ioanniskousis](https://github.com/ioanniskousis)
- Twitter: [@ioanniskousis](https://twitter.com/ioanniskousis)
- Linkedin: [Ioannis Kousis](https://www.linkedin.com/in/jgkousis)
- E-mail: jgkousis@gmail.com
​
<hr/>
<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Microverse](https://www.microverse.org/)
- [The Odin Project](https://www.theodinproject.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ioanniskousis/stock-exchange.svg?style=flat-square
[contributors-url]: https://github.com/ioanniskousis/stock-exchange/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ioanniskousis/stock-exchange.svg?style=flat-square
[forks-url]: https://github.com/ioanniskousis/stock-exchange/network/members
[stars-shield]: https://img.shields.io/github/stars/ioanniskousis/stock-exchange.svg?style=flat-square
[stars-url]: https://github.com/ioanniskousis/stock-exchange/stargazers
[issues-shield]: https://img.shields.io/github/issues/ioanniskousis/stock-exchange.svg?style=flat-square
[issues-url]: https://github.com/ioanniskousis/stock-exchange/issues


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
### [Live On Heroku](https://stock-exchange-jgk.herokuapp.com)

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
