# Welcome to the Brigad Design System documentation!

This project was created with [Create React App](https://github.com/facebook/create-react-app). The script to run this project in dev mode is `yarn start`


## File organization
All of the documentation's content is in the `./content` folder, and assets (such as images) are in the `./assets` folder.

The `./content` folder contains a `pages.js` file, which is a sort of index of all the pages. All the the other folders of contained in `./content` are the websites pages.


## Inside a page folder
A page folder contains files ending in `*.section.js`. These files are sections of a page.

## Inside a `*.section.js` file
### 1 -  `documentation`
This is the left part of each page. It uses standard HTML syntax, and is styled with [Bulma](https://bulma.io/documentation/). You can use any of Bulma's css helpers, and add customization in the `Bulma.sass` file at the root of the `src` folder.
### 2 - `codeSnippets` (optional)
This is an array of "code snippet" objects to display on the right side of the section. These objects can have 4 keys :

 - `code` : the string of the code snippet, which was automatically be highlighted
 - `title` : a little string to display on top of the snippet
 - `marginTop` : number, margin-top in pixels
 - `marginBottom` : number, margin-bottom in pixels

### 3 - `anchorId` (optional)
The id of what you will later set as the navigation anchor (keep reading).


## Inside the `pages.js` file
This file is the index of the website. It references all the pages and their navigational data. Once configured, the website and nav bar will automatically be populated with all the referenced data from the `./content` folder.

It's an array of objects which each represent a page. These objects must have 3 keys:

 - `folderName` : must be the exact name of the folder the page sections are in
 - `displayName` : name displayed in the nav bar
 - `anchors` : array of anchor objects on the page. Each anchor object has a `displayName`, the name displayed in the nav bar, and an `anchor`, which should be the `anchorId` set in the `.section.js` file


## Illustrations
Every illustration was made using [Excalidraw](https://excalidraw.com/). Are you feeling creative?
