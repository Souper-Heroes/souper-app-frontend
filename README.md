# souper-app-frontend
![app-login](https://user-images.githubusercontent.com/70176601/97798191-b1f12e00-1c1b-11eb-8862-beddde7e72c8.jpg)
## Project description

This project is split up in the frontend part built with React and the backend part with a node/express server.  
This is the frontend for the Souper Heroes Food Waste Reduction app.
The app aims to provide ESG benefits to users by helping them minimize their food wastage.
Built using React using the Material UI framework, incorporating Firebase authentication and Redux state management.

Furthermore, this project has the following features:
 * Be responsive
 * Be accessible: Users can navigate thought the app
 * Have pagination: calculates the total number of pages and the current page based on the API response, and its possible to navigate to any page
 * Built using Javascript and node.js: project built with Node/Express and React
 * Progressively enhanced: using Git and creating a new branch for each feature
 * Deployed on Heroku and CloudFront
 
## Factsheet

| **Category**              | **Value**                                 |
| ------------------------- | ---------------------------------------- |
| **Contact**               | @cavalost, @abinormal, @mcblueglade, @Andystyles30
| **Language / Framework**  | React
| **Deployment type**       | CircleCI + AWS(S3 + CloudFront)
| **Production URL**     | [https://d1ndnbcmyzr04g.cloudfront.net/index.html](https://d1ndnbcmyzr04g.cloudfront.net/index.html)|


## Configuration

Configuration is via the following environment variables:

| Env var      |    
| ------------ |
| `REACT_APP_FIREBASE_API_KEY` | 
| `REACT_APP_FIREBASE_AUTH_DOMAIN` |
| `REACT_APP_FIREBASE_DATABASE_URL` | 
| `REACT_APP_FIREBASE_PROJECT_ID` | 
| `REACT_APP_FIREBASE_STORAGE_BUCKET` | 
| `REACT_APP_FIREBASE_MESSAGING_SENDER_ID` | 
| `REACT_APP_FIREBASE_APP_ID` |
| `REACT_APP_GOOGLE_MAPS_API_KEY` |
| `SOUP_API` |
 

## Requirements
Node >= 8

## Project setup
Install [Node.js](http://nodejs.org/) and node dependencies:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run start
```
## Chrome Extension Developer Tools 

React Developer Tools:
[React Developer Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

Redux Devtool:
[Redux Devtool Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)


## Usage

### Compiles and minifies for production
```
npm run build
```

### Lints files
```
npm run lint
```

### Run unit tests
```
npm run test
```

