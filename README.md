## PROJECT LOAN CALCULATOR

This project was built using [Create React App](https://github.com/facebook/create-react-app).

## Description
User interface that allows a user to enter a loan amount and a loan duration in months which then displays
the interest rate and the monthly payment.

The user will be able to enter the monetary amount and the Tenure details by using a slider. The
calculated interest rate and the monthly payment will be automatically update as and when the slider is moved.

The loan amount should be between $500 and $5000 and the loan duration between 6
and 24 months.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

https://ftl-frontend-test.herokuapp.com/interest?amount=&lt;amount&gt;&amp;numMonths=&lt;numMonths&gt, is the API used in this project to calculate the monthly payment amount and the interest rate.

## Prerequisites
### `Below are the prequisites required to run this application:`

     1.Node - You can install the node using [NODE](https://nodejs.org/en/).
     2.NPM - You can get the latest npm using [NPM](https://www.npmjs.com/get-npm).
     3.GIT - Git is required to clone this particular project and to use it in your local machine. You can install git using 
     [GIT](https://github.com/).

### `Frameworks and libraries required to run this applications are:`
  
     1.Install React and react dom.
             use these commands to install react and react-dom - npm install react --save , npm install react-dom --save.
     2.Install axios.
             use the command npm install axios --save to install it.
     3.Install @material-ui/core & @material-ui/lab.
             use npm install @material-ui/core and npm install @material-ui/lab to get the @material-ui library.
        
Once all the installation completed. Run npm start in the project directory, once the npm start finishes open the 
[http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

You can learn more about deployment in the [Deployment](https://facebook.github.io/create-react-app/docs/deployment).
I have done the deployment using surge, link - [Loan Calculator](http://fullThrottle-labs-test.surge.sh).

Screenshot of the loan calculator app :![Loan Calculator](LoanCalculator.PNG)

## Author
Kavya H L : kavyahl1234@gmail.com
