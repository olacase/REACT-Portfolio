
# React Portfolio

My personal portfolio built using React and Bootstrap. I will continually adding projects, modifying the content, and updating the look and functionality. 


## Table of Contents 

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [About Me](#about)

* [Credits](#credits)
​
* [Questions](#questions)

## Prerequisites

If you want to pull inspiration from my portfolio design, please email or credit me :) But if you're interested in how I built it, below are the tools used:


## Installation

To build a similar, single page portfolio or website for yourself, you'll want first create a new React app:
```
npx create-react-app <projectname>
```

Then for the single page, smooth scrolling, install react-scroll. To deploy to Github Pages, install gh-pages:
```
npm install react-scroll gh-pages
```
You can also fork and clone this repo to use as a template and then just run npm install

## Usage

You'll be able to run the app locally by running npm start:
```
npm start
```
All your changes should update the local host in real time. If you want to deploy your app, you'll need to make a few changes to the package.json file. Directions below for deploying to Github Pages:

1. Add a homepage: <name-of-the-page-deploying-to> to your package.json in the root
  ```
  "homepage": "https://olacase.github.io/react-portfolio/"
  ```
2. In the "scripts" property of your package.json, add two scripts:
  

3. Now, after you merge your changes and pull the most up-to-date master, open a new terminal and run npm run deploy:
```
npm run deploy
```
  
4. This creates a new branch, gh-pages. Open your deploy settings in Github and change the deploy branch to gh-pages


5. Every time you want your deployed site to update with the changes you've made, you need to run npm run deploy

## Pages

### Main
  * Basic about with main navbar links and link to the full bio


### Projects
  * Portfolio of selected projects with logo, description, technologies used, and links to the repo and live site

### About
  * Bio page with more about me, my background, and favorite technologies
  
### Resume
  * Link to standard resume

### Contact
  * Email, LinkedIn, and Github
  * Contact Form!

## License

This project is licensed under the MIT license.

## About

* ### [Olamide Bello](https://github.com/olacase)


## Credits

linkedIn
Github

## Questions

Questions or feedback-- we welcome them all! Feel free to reach out for any questions about the repo, open an issue or contact me and I'll get back to you soon!
