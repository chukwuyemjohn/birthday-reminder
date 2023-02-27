Birthday Reminder

This is a simple React application that displays birthday reminder stored in a data file. It displays a list of the messages recepient, and a clear all.

Functionality

The application uses React hooks to store the data and display it on the page. The data is imported from a separate file called data.js and stored in the people state variable using the useState hook. The getClick function is triggered when the "clear all" button is clicked, and it sets the people state to an empty object, effectively clearing all the birthday messages from the screen.

The List component is imported and passed the people state as a prop. The component maps through the array of messages and returns a new array of div elements containing each individual message.
Getting started

To run the application, follow these steps:

    Clone the repository or download the source code.
    Navigate to the project directory in your terminal.
    Run npm install to install the project dependencies.
    Run npm start to start the application.
    Open your web browser and navigate to http://localhost:3000 to view the app.

Technologies used

    React
    JavaScript
    CSS

Credits

This application was created as part of a React course project. The data.js file was provided as part of the project materials.